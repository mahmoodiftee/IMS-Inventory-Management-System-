import { FaShop } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const AddProduct = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [shops, setShops] = useState([]);
    const [imgBB, setImgBB] = useState();
    console.log(shops);
    console.log(imgBB);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    console.log('User Email:', user.email);
                    const userResponse = await axios.get(`https://ims-server-kappa.vercel.app/products?email=${encodeURIComponent(user.email || '')}`);
                    const userProducts = userResponse.data;
                    setProducts(userProducts);
                    const shopResponse = await axios.get(`https://ims-server-kappa.vercel.app/shops?email=${encodeURIComponent(user.email || '')}`);
                    const Shopss = shopResponse.data;
                    setShops(Shopss);

                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);
    const handleCreateStore = async (e) => {
        e.preventDefault();
        const ProductName = e.target.name.value;
        const ProductImageFile = e.target.img.files[0];
        const ProductQuantity = e.target.quantity.value;
        const ProductLocation = e.target.location.value;
        const ProductCost = parseFloat(e.target.cost.value).toFixed(2);
        const ProductProfit = parseFloat(e.target.profit.value).toFixed(2);
        const ProductDiscount = parseFloat(e.target.discount.value).toFixed(2);
        const ProductDescription = e.target.des.value;
        const formData = new FormData();
        formData.append('image', ProductImageFile);
        console.log({ ProductName, ProductImageFile, ProductQuantity, ProductLocation, ProductCost, ProductProfit, ProductDiscount, ProductDescription });
        try {
            // hosting img to imgbb
            const responseImg = await axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                params: {
                    key: 'b21321b69dce0a6efd75bdd3a28ee2ee',
                },
            });
            const imageUrl = responseImg.data.data.url;
            console.log(imageUrl);
            setImgBB(imageUrl)

            // Fetch all user details
            const usersResponse = await axios.get('https://ims-server-kappa.vercel.app/users');
            const allUsers = usersResponse.data;

            // Find the user with the correct email
            const userData = allUsers.find(u => u.email === user?.email);
            console.log(userData);
            if (!userData) {
                throw new Error('User not found');
            }

            // Additional fields
            const shopId = userData.shop_id || '';
            const shopName = userData.ShopName || '';
            const userEmail = userData.email || '';

            const userProductCount = products.length;
            if (userProductCount > 2) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Product Limit Exceeded',
                    text: 'You can\'t add more products. Please upgrade your subscription.',
                    showConfirmButton: true,
                }).then((result) => {
                    // Check if the user clicked "OK"
                    if (result.isConfirmed) {
                        // User clicked "OK," navigate to '/dashboard/subscription'
                        navigate('/dashboard/subscription');
                    }
                });

                // No need to navigate here
                return;
            }



            // Calculating SellingPrice
            const TaxPercentage = 7.5;
            const BuyingPrice = parseFloat(ProductCost);
            const ProfitPercentage = parseFloat(ProductProfit);
            const SellingPrice = BuyingPrice + (BuyingPrice * TaxPercentage / 100) + (BuyingPrice * ProfitPercentage / 100);

            // Product Added Date
            const addedDate = new Date().toISOString();

            // Product object
            const newProduct = {
                productName: ProductName,
                productImage: imageUrl,
                productQuantity: parseFloat(ProductQuantity),
                productLocation: ProductLocation,
                productCost: parseFloat(ProductCost),
                productProfit: parseFloat(ProductProfit),
                productDiscount: parseFloat(ProductDiscount),
                productDescription: ProductDescription,
                shopId: shopId,
                shopName: shopName,
                userEmail: userEmail,
                sellingPrice: SellingPrice,
                addedDate: addedDate,
                saleCount: 0,
            };
            console.log(newProduct);
            // Creating a new product using Axios
            const response = await axios.post('https://ims-server-kappa.vercel.app/products', newProduct);

            if (response.data.insertedId) {
                // Successfully inserted product, now update productLimit for the user
                await axios.patch('https://ims-server-kappa.vercel.app/updateProductLimit', { email: userEmail });

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Added Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/dashboard/product-management');
            } else {
                throw new Error('Failed to create a product.');
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };



    return (
        <div>
            <Helmet>
                <title>Dashboard | Add Product</title>
            </Helmet>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-3xl font-extrabold">
                PRODUCT DETAILS
            </h1>
            <div className="card w-[80%] mx-auto">
                <form onSubmit={handleCreateStore} className="card-body w-full">
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input name='name' type="text" placeholder="Product Name" className="input input-bordered  text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input name='img' type="file" className="file-input bg-transparent file-input-bordered w-full " />
                        </div>
                    </div>
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input name='quantity' type="number" placeholder="Product Quantity" className="input input-bordered text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input name='location' type="text" placeholder="Product Location" className="input input-bordered text-sm" required />
                        </div>
                    </div>
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input name='cost' type="text" placeholder="ProductionCost" className="input input-bordered text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input name='discount' type="text" placeholder="Discount" className="input input-bordered text-sm" required />
                        </div>
                    </div>
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input name='profit' type="text" placeholder="Profit Margin" className="input input-bordered text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <textarea name='des' type="text" placeholder="Product Description" className="textarea input input-bordered text-sm" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <button type='submit' className="Achronicle-buttons rounded-xl w-full">
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Create Shop <FaShop />
                                </em>
                            </span>
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Create Shop <FaShop />
                                </em>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;