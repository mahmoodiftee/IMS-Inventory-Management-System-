import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { FaStripeS } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const currentDate = new Date();

    // Format date
    const formattedDate = currentDate.toISOString().split('T')[0];

    // Format time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    const newObject = {
        SellingDate: formattedDate,
        SellingTime: formattedTime,
        cartUserEmail: user?.email,
        products: [...products],
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const response = await axios.get(`https://ims-server-kappa.vercel.app/cart?email=${encodeURIComponent(user.email || '')}`);
                    const userProducts = response.data;
                    setProducts(userProducts);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);

    const handleGetPaid = async () => {
        try {
            // 1. Insert Data to Sales Collection (/cart route)
            const saleResponse = await axios.post('https://ims-server-kappa.vercel.app/sale', newObject, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (saleResponse.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Purchase Successful!',
                    text: 'Your purchase has been completed successfully.',
                    confirmButtonText: 'OK',
                });

                const increaseSalesPromises = newObject.products.map(async (product) => {
                    const productId = product._id;
                    return axios.patch(`https://ims-server-kappa.vercel.app/products/${productId}`, {
                        operationType: 'increaseSaleCount',
                    });
                });
                await Promise.all(increaseSalesPromises);
                const decreaseQuantityPromises = newObject.products.map(async (product) => {
                    const productId = product._id;
                    return axios.patch(`https://ims-server-kappa.vercel.app/products/${productId}`, {
                        operationType: 'decreaseQuantity',
                    });
                });

                await Promise.all(decreaseQuantityPromises);


                navigate('/dashboard/pdf');
                await axios.delete(`https://ims-server-kappa.vercel.app/cart/clear?email=${encodeURIComponent(user?.email || "")}`);

                const cartResponse = await axios.get(`https://ims-server-kappa.vercel.app/cart?email=${encodeURIComponent(user?.email || "")}`);
                setProducts(cartResponse.data);
            } else {
                // Show SweetAlert on sale failure
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred during the purchase. Please try again later.',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error performing operations:', error);
            // Show SweetAlert on error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred during the purchase. Please try again later.',
                confirmButtonText: 'OK',
            });
        }
    };



    return (
        <div>
            <Helmet>
                <title>Dashboard | Cart</title>
            </Helmet>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                Cart Collection
            </h1>
            <div className="flex mt-4 justify-center items-center ">
                <button onClick={handleGetPaid} className="Achronicle-buttonss">
                    <span>
                        <em className="flex text-white   font-bold justify-center items-center gap-1 lg:gap-1">
                            Get Paid<FaStripeS />
                        </em>
                    </span>
                    <span>
                        <em className="flex text-white   justify-center items-center gap-1 lg:gap-1">
                            Get Paid<FaStripeS />
                        </em>
                    </span>
                </button>
            </div>
            <div className="mt-4">
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="font-bold text-sm">Product Name</th>
                                <th className="font-bold text-sm">Shop Name</th>
                                <th className="font-bold text-sm">Selling Price</th>
                                <th className="font-bold text-sm">Product Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(product => (
                                <tr key={product._id}>
                                    <td>
                                        <div className="h-16 w-16">
                                            <img
                                                className="h-full rounded-lg w-full object-cover"
                                                src={product?.productImage}
                                                alt={product?.productName}
                                            />
                                        </div>
                                    </td>
                                    <td className="font-bold">{product?.productName}</td>
                                    <td className="font-bold pl-6">{product?.shopName}</td>
                                    <td className="font-bold pl-6">${product?.sellingPrice}</td>
                                    <td className="font-bold pl-12">{product?.productDiscount}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;