import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { FaStripeS } from "react-icons/fa6";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    console.log('User Email:', user.email);
                    const response = await axios.get(`http://localhost:5000/cart?email=${encodeURIComponent(user.email || '')}`);
                    const userProducts = response.data;
                    console.log(userProducts);

                    setProducts(userProducts);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);

    return (
        <div>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                Sales Collection
            </h1>
            <div className="flex justify-start items-center ">
                <button className="Achronicle-buttonss">
                    <span>
                        <em className="flex text-white   font-bold justify-center items-center gap-1 lg:gap-3">
                            Get Paid<FaStripeS />
                        </em>
                    </span>
                    <span>
                        <em className="flex text-white   justify-center items-center gap-1 lg:gap-3">
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