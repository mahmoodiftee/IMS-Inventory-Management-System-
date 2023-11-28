import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { FaStripeS } from "react-icons/fa6";
import Swal from "sweetalert2";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const currentDate = new Date();

    // Format date
    const formattedDate = currentDate.toISOString().split('T')[0];

    // Format time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    const newObject = {
        currentDate: formattedDate,
        currentTime: formattedTime,
        cartUserEmail: user?.email,
        products: [...products],
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const response = await axios.get(`http://localhost:5000/cart?email=${encodeURIComponent(user.email || '')}`);
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
            const saleResponse = await axios.post('http://localhost:5000/sale', newObject, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check if sale was successful
            if (saleResponse.status === 200) {
                // Show SweetAlert on success
                Swal.fire({
                    icon: 'success',
                    title: 'Purchase Successful!',
                    text: 'Your purchase has been completed successfully.',
                    confirmButtonText: 'OK',
                });

                // 2. Increase Sales Count (/product route)
                const increaseSalesPromises = newObject.products.map(async (product) => {
                    const productId = product._id;
                    return axios.patch(`http://localhost:5000/products/${productId}`, {
                        operationType: 'increaseSaleCount',
                    });
                });
                await Promise.all(increaseSalesPromises);
                // 3. Decrease Quantity (/product route)
                const decreaseQuantityPromises = newObject.products.map(async (product) => {
                    const productId = product._id;
                    return axios.patch(`http://localhost:5000/products/${productId}`, {
                        operationType: 'decreaseQuantity',
                    });
                });

                await Promise.all(decreaseQuantityPromises);

            // 4. Clear the cart after successful purchase
            await axios.delete(`http://localhost:5000/cart/clear?email=${encodeURIComponent(user?.email || "")}`);

            // 5. Refresh the products list after clearing the cart
            const cartResponse = await axios.get(`http://localhost:5000/cart?email=${encodeURIComponent(user?.email || "")}`);
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
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                Cart Collection
            </h1>
            <div className="flex justify-start items-center ">
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