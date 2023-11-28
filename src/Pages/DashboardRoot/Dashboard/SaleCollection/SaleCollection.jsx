import axios from "axios";
import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../../../assets/jsons/noProduct.json';
import { useEffect, useState, useContext } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { FiPlusCircle } from "react-icons/fi";
const SaleCollection = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                if (user) {
                    const response = await axios.get(`http://localhost:5000/products?email=${user.email}`);
                    setProducts(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    const productExists = products.length > 0;
    const filteredProducts = products.filter(product =>
        product._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="">
                <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                    Sales Collection
                </h1>

                {loading && <p>Loading...</p>}

                {error && <p>Error: {error}</p>}

                {!loading && !error && !productExists && (
                    <div className="mt-10">
                        <div className='lg:flex mt-14 flex-col hidden lg:justify-start'>
                            <p className="text-[22px] lg:text-6xl uppercase font-extrabold bg-gradient-to-r text-center from-[#4aca4a] to-[#9cf69c] text-transparent bg-clip-text">No Product</p>
                            <Player
                                autoplay
                                loop
                                src={json}
                                className='h-[400px] w-[500px]'
                            >
                            </Player>
                        </div>
                    </div>
                )}

                {!loading && !error && productExists && (
                    <div className="mt-10">
                        <div>
                            <div className="w-full flex justify-evenly mt-2 lg:mt-6 items-center">
                                <div className="flex justify-certer items-center">
                                    <input
                                        type="text"
                                        placeholder="Search Product"
                                        className="custom-border-gradient bg-transparent w-full max-w-xs p-2"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button className="Achronicle-button">
                                        <span>
                                            <em className="flex text-white  px-20 font-bold justify-center items-center gap-1 lg:gap-3">
                                                <FaSearch /> Search
                                            </em>
                                        </span>
                                        <span>
                                            <em className="flex text-white  px-20 justify-center items-center gap-1 lg:gap-3">
                                                <FaSearch /> Search
                                            </em>
                                        </span>
                                    </button>
                                </div>
                                <button className="Achronicle-buttonss rounder-xl">
                                    <span>
                                        <em className="flex px-[70px] text-white font-bold justify-center items-center gap-1 lg:gap-3">
                                            <FaShoppingCart /> Cart
                                        </em>
                                    </span>
                                    <span>
                                        <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                            Proceed to check out
                                        </em>
                                    </span>
                                </button>
                            </div>
                            {/* Table */}
                            <div className="mt-4">
                                <div className="">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th className="font-bold text-sm">Product id</th>
                                                <th className="font-bold text-sm">Product Name</th>
                                                <th className="font-bold text-sm">Quantity</th>
                                                <th className="font-bold text-sm">Discount</th>
                                                <th className="font-bold text-sm">Selling Price</th>
                                                <th className="font-bold text-sm pl-6">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProducts.map(product => (
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
                                                    <td className="font-bold">{product?._id}</td>
                                                    <td className="font-bold">{product?.productName}</td>
                                                    <td className="font-bold pl-10">{product?.productQuantity}</td>
                                                    <td className="font-bold pl-8">{product?.productDiscount}%</td>
                                                    <td className="font-bold pl-10">${product?.sellingPrice}</td>
                                                    <td className="">
                                                        <button className="btn text-lg btn-sm hover:bg-green-500 hover:text-white text-green-500 bg-white btn-ghost">
                                                            Add <FiPlusCircle></FiPlusCircle>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SaleCollection;
