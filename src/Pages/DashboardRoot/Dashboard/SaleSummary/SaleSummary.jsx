import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";

import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
const SaleSummary = () => {

    const { user, loading: authLoading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    console.log(products);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    console.log('User Email:', user.email);
                    const response = await axios.get('http://localhost:5000/sale');
                    const filteredProduct = response.data.filter(item => item.cartUserEmail === user.email);
                    setProducts(filteredProduct);
                }
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [user]);

    const totalSale = products.reduce((total, sale) => {
        return total + sale.products.reduce((saleTotal, product) => saleTotal + product.sellingPrice, 0);
    }, 0);

    const totalInvest = products.reduce((total, sale) => {
        return total + sale.products.reduce((investTotal, product) => investTotal + product.productCost, 0);
    }, 0);

    const totalProfit = totalSale - totalInvest;

    return (
        <div className="overflow-y-auto">
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
                                <div className="stat-title text-2xl font-bold text-white ">Total Sale</div>
                                <div className="stat-value text-white ">${(totalSale).toFixed(0)}</div>
                            </div>
                        </div>
                        <div className="w-full text-white rounded-2xl border mx-auto bg-gradient-to-r from-pink-500 to-rose-500 parentContainer">
                            <div className="stat">
                                <div className="stat-figure text-3xl text-white font-bold">
                                    <GiPayMoney />
                                </div>
                                <div className="stat-title text-2xl font-bold text-white ">Total Invest</div>
                                <div className="stat-value text-white ">${(totalInvest).toFixed(0)}</div>
                            </div>
                        </div>
                        <div className="w-full text-white rounded-2xl border mx-auto bg-gradient-to-r from-rose-400 to-red-500 parentContainer">
                            <div className="stat">
                                <div className="stat-figure text-3xl font-bold">
                                    <FaMoneyBillTrendUp />
                                </div>
                                <div className="stat-title text-2xl font-bold text-white">Total Profit</div>
                                <div className="stat-value text-white ">${(totalProfit).toFixed(0)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                    <th className="font-bold text-lg">Image</th>
                                        <th className="font-bold text-lg">Product Name</th>
                                        <th className="font-bold text-lg">Selling date</th>
                                        <th className="font-bold text-lg">Profit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((sale) =>
                                        sale.products.map((product) => (
                                            <tr key={product._id}>
                                                <td>
                                                    <div className="h-16 w-16 ">
                                                        <img
                                                            className="h-full rounded-lg w-full object-cover"
                                                            src={product.productImage}
                                                            alt=""
                                                        />
                                                    </div>
                                                </td>
                                                <td className="text-[16px] font-medium mx-auto">{product.productName}</td>
                                                <td className="text-[16px] font-medium mx-auto">{sale.SellingDate}</td>
                                                <td className="text-[16px] font-medium mx-auto">$
                                                    {((product.sellingPrice - product.productCost)).toFixed(2)}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default SaleSummary;