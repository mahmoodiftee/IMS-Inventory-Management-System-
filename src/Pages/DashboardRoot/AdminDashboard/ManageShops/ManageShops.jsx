import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { IoIosNotifications } from "react-icons/io";
import { Helmet } from "react-helmet-async";
const ManageShops = () => {

    const { user, loading: authLoading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    console.log(products);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    console.log('User Email:', user.email);
                    const response = await axios.get('http://localhost:5000/shops');
                    setProducts(response.data);
                }
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [user]);
    const handleNotify = () => {

        console.log('Notify button clicked');
    };

    const truncateString = (str, numWords) => {
        const words = str.split(' ');
        if (words.length <= numWords) {
            return str;
        }
        const truncatedWords = words.slice(0, numWords);
        return truncatedWords.join(' ') + '...';
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Shops</title>
            </Helmet>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-3xl font-extrabold">
                Manage Shops
            </h1>
            <div className="overflow-y-auto">
                {authLoading && <p>Loading...</p>}

                {error && <p>Error: {error.message}</p>}

                {!authLoading && !error && (
                    <div>
                        <div className="mt-4">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th className="font-bold text-lg">Shop Name</th>
                                            <th className="font-bold text-lg">Product Limit</th>
                                            <th className="font-bold text-lg">Shop Description</th>
                                            <th className="font-bold text-lg"></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(product => (
                                            <tr key={product._id}>
                                                <td>
                                                    <div className="h-16 w-16">
                                                        <img
                                                            className="h-full rounded-lg w-full object-cover"
                                                            src={product?.LogoUrl}
                                                            alt={product?.productName}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="font-bold">{product?.ShopName}</td>
                                                <td className="font-bold pl-10">{product?.limit}</td>
                                                <td className="font-bold max-w-[120px] overflow-wrap-custom">{truncateString(product?.ShopDescription, 10)}</td>
                                                <td className="">
                                                    <button onClick={handleNotify()} className="btn text-lg btn-sm hover:bg-green-500 hover:text-white text-green-500 bg-white btn-ghost">
                                                        Notify <IoIosNotifications></IoIosNotifications>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageShops;