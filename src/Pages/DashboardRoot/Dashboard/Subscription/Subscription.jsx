import { UilCheck } from '@iconscout/react-unicons';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MdOutgoingMail } from 'react-icons/md';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Subscription = () => {
    const { loading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cards');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching card data:', error);
                setError('Error fetching data. Please try again.');
            } finally {
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-3xl font-extrabold">
                Subscription Packages
            </h1>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {products.map((product) => (
                        <div key={product._id} className="relative mx-auto flex w-full flex-col rounded-xl bg-white bg-clip-border p-4 text-black shadow-lg">
                            <div className="relative m-0 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                                <h1 className="mb-1 text-center text-xl lg:text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text">
                                    {product.packageName}
                                </h1>
                                <hr />
                                <h1 className="flex w-full justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-5xl">
                                    <p className="-mt-2 text-2xl">$</p>{product.price}<p className="mt-6 text-xl">/mo</p>
                                </h1>
                            </div>
                            <div className="p-2">
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-2">
                                        <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                            <UilCheck />
                                        </button>
                                        <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                            limit: {product.limit}
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                            <UilCheck />
                                        </button>
                                        <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                            {product.member} team members
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <button className="text-[8px] border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-transparent text-white">
                                            <UilCheck />
                                        </button>
                                        <p className="block font-sans text-lg antialiased font-normal leading-relaxed text-inherit">
                                            {product.support}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-0 mt-4">
                                <Link to={`/dashboard/payment/${product._id}`}>
                                    <button style={{ borderRadius: '10px' }} className="Achronicle-button mt-4 w-full">
                                        <span>
                                            <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                                Purchase <MdOutgoingMail />
                                            </em>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Subscription;
