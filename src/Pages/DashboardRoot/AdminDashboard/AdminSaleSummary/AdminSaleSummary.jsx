import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { FaBoxesPacking } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FiPlusCircle } from "react-icons/fi";
import { AiFillCarryOut } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
const AdminSaleSummary = () => {

    const { user, loading: authLoading } = useContext(AuthContext);
    const [sales, setSales] = useState([]);
    const [saleData, setSaleData] = useState([]);
    const [payment, setPayment] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const response = await axios.get('http://localhost:5000/products');
                    console.log(response.data);
                    setSaleData(response.data);

                }
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [user]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                setSales(response.data);
                const Paymentresponse = await axios.get('http://localhost:5000/payment');
                setPayment(Paymentresponse.data);
            }
            catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);


    const handleNotify = () => {

        console.log('Notify button clicked');
    };

    const totalSaleCount = saleData ? saleData.reduce((sum, product) => {
        return sum + (product.saleCount || 0);
    }, 0)
        : 0;
    const totalIncome = payment ? payment.reduce((sum, product) => {
        return sum + (product.price || 0);
    }, 0)
        : 0;
    const totalProduct = saleData.length;
    return (
        <div className="overflow-y-auto">
            <Helmet>
                <title>Dashboard | Sale Summary</title>
            </Helmet>
            {authLoading && <p>Loading...</p>}

            {error && <p>Error: {error.message}</p>}

            {!authLoading && !error && (
                <div>
                    <div className="flex flex-col overflow-y-auto lg:flex-row items-center justify-center gap-4">
                        <div className="w-full text-white rounded-2xl border mx-auto bg-gradient-to-r from-orange-500 to-red-500 parentContainer">
                            <div className="stat">
                                <div className="stat-figure text-3xl text-white font-bold">
                                    <GiTakeMyMoney />
                                </div>
                                <div className="stat-title text-2xl font-bold text-white ">Total Income</div>
                                <div className="stat-value text-white ">${(totalIncome).toFixed(0)}</div>
                            </div>
                        </div>
                        <div className="w-full text-white rounded-2xl border mx-auto bg-gradient-to-r from-pink-500 to-rose-500 parentContainer">
                            <div className="stat">
                                <div className="stat-figure text-3xl text-white font-bold">
                                    <FaBoxesPacking />
                                </div>
                                <div className="stat-title text-2xl font-bold text-white ">Total Products</div>
                                <div className="stat-value text-white ">{(totalProduct).toFixed(0)}</div>
                            </div>
                        </div>
                        <div className="w-full text-white rounded-2xl border mx-auto bg-gradient-to-r from-rose-400 to-red-500 parentContainer">
                            <div className="stat">
                                <div className="stat-figure text-3xl font-bold">
                                    <AiFillCarryOut />
                                </div>
                                <div className="stat-title text-2xl font-bold text-white">Total Sales</div>
                                <div className="stat-value text-white ">{(totalSaleCount).toFixed(0)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-center text-4xl mb-4 font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Users</span>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="font-bold text-lg">User Name</th>
                                        <th className="font-bold text-lg">User Email</th>
                                        <th className="font-bold text-lg">Shop Name</th>
                                        <th className="font-bold text-lg">Role</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sales.map((user) => (
                                        <tr key={user._id}>
                                            <td className="text-[16px] font-medium mx-auto">{user.displayName}</td>
                                            <td className="text-[16px] font-medium mx-auto">{user.email}</td>
                                            <td className="text-[16px] font-medium mx-auto">{user?.ShopName ? user.ShopName : ''}</td>
                                            <td className="text-[16px] font-medium mx-auto">{user?.role}</td>
                                            <td className="text-[16px] font-medium mx-auto">
                                                {user?.role}
                                                {user.role && user.role.toLowerCase() === 'user' && (
                                                    <button onClick={() => handleNotify()} className="btn text-lg btn-sm hover:bg-green-500 hover:text-white text-green-500 bg-white btn-ghost">
                                                        Send Promo <FiPlusCircle />
                                                    </button>
                                                )}
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
    );
}

export default AdminSaleSummary;