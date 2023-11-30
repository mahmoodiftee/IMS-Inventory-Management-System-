import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/jsons/store.json';
import { FaShop } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
const CreateStore = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const ownerName = user?.displayName || '';
    const ownerEmail = user?.email || '';

    const handleCreateStore = (e) => {
        e.preventDefault();
        const shop = e.target.shop.value;
        const location = e.target.location.value;
        const url = e.target.url.value;
        const des = e.target.des.value;

        const newStore = {
            'OwnerName': ownerName,
            'OwnerEmail': ownerEmail,
            'ShopName': shop,
            'ShopLocation': location,
            'LogoUrl': url,
            'ShopDescription': des,
            'limit': 3,
        };

        // Creating a new shop using Axios
        axios.post('http://localhost:5000/shops', newStore)
            .then(response => {
                const data = response.data;
                if (data.insertedId) {
                    // After successfully creating a shop, update the user role using Axios
                    return axios.patch('http://localhost:5000/updateUserRole', { email: ownerEmail, shop: { insertedId: data.insertedId, ...newStore } });
                } else {
                    throw new Error('Failed to create a shop.');
                }
            })
            .then(userData => {
                if (userData.updatedCount) {
                    return Promise.resolve(); // Resolving a promise to use in Promise.all
                } else {
                    throw new Error('Failed to update user role.');
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Failed to create shop or update user role. ${error.message || 'Something went wrong!'}`,
                });
            })
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Shop Successfully Created',
                    showConfirmButton: false,
                    timer: 1500,
                });
                e.target.reset();
                navigate('/dashboard');
            });
    };




    return (
        <div className=''>
            <Helmet>
                <title>IMS | Create Store</title>
            </Helmet>
            <Link to={'/'} className="btn fixed text-2xl font-bold text-[#50d850] m-4 btn-circle">
                <IoMdArrowRoundBack />
            </Link>
            <div className="flex justify-center items-center h-screen">
                <div className="h-screen flex gap-20 justify-center items-center">
                    <div className='lg:flex mt-14 flex-col hidden lg:justify-start'>
                        <p className="text-[22px] lg:text-6xl uppercase font-extrabold bg-gradient-to-r text-center from-[#4aca4a] to-[#9cf69c] text-transparent bg-clip-text">be a proud <br /> shop owner</p>
                        <Player
                            autoplay
                            loop
                            src={json}
                            className='h-[400px] pr-10 w-[500px]'
                        >
                        </Player>
                    </div>
                    <div className="card shadow-xl mt-10 lg:mt-0">
                        <form onSubmit={handleCreateStore} className="card-body">
                            <div className="flex flex-col lg:flex-row mb-2 gap-3 mx-auto">
                                <div className="form-control">
                                    <input type="text" disabled defaultValue={ownerName} className="input input-bordered w-[220px] text-sm" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" disabled defaultValue={ownerEmail} className="input input-bordered w-[220px] text-sm" required />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row mb-2 gap-3 mx-auto">
                                <div className="form-control">
                                    <input name='shop' type="text" placeholder="Shop Name" className="input input-bordered w-[220px] text-sm" required />
                                </div>
                                <div className="form-control ">
                                    <input name='location' type="text" placeholder="Shop Location" className="input input-bordered w-[220px] text-sm" required />
                                </div>
                            </div>
                            <div className="form-control ">
                                <input name='url' type="text" placeholder="Shop Logo Url" className="mb-4 input input-bordered text-sm" required />
                            </div>
                            <div className="form-control mb-4">
                                <textarea name='des' required className="textarea input h-32 input-bordered" placeholder="Shop Description"></textarea>
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
            </div>
        </div>
    );
};

export default CreateStore;