import { FaShop } from "react-icons/fa6";
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";

const AddProduct = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const handleCreateStore = async (e) => {
        e.preventDefault();
        const ProductName = e.target.name.value;
        const ProductImage = e.target.img.value;
        const ProductQuantity = e.target.quantity.value;
        const ProductLocation = e.target.location.value;
        const ProductCost = parseFloat(e.target.cost.value).toFixed(2);
        const ProductProfit = parseFloat(e.target.profit.value).toFixed(2);
        const ProductDiscount = parseFloat(e.target.discount.value).toFixed(2);
        const ProductDescription = e.target.des.value;

        try {
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
            const productLimit = userData.productLimit || 0;

             // Fetch the user's products to get the count
        const productsResponse = await axios.get(`https://ims-server-kappa.vercel.app/products?email=${userEmail}`);
        const userProducts = productsResponse.data;
        const userProductCount = userProducts.length;

        // Check productLimit
        if (userProductCount >= 3) {
            // User has reached the productLimit, show an alert
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
                productImage: ProductImage,
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
                            <input name='img' type="text" placeholder=" Image" className="input input-bordered  text-sm" required />
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