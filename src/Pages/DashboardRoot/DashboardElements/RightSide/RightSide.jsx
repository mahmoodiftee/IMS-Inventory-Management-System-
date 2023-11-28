import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider'; // Update this import path
import logo from '../../../../assets/man.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RightSide = () => {
    const { user, LogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null); // Initialize as null to handle loading state
    const handleSignOut = () => {
        LogOut();
        Swal.fire({
            icon: "success",
            text: "Successfully signed out",
        });
        navigate("/login");
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const usersResponse = await axios.get('http://localhost:5000/users');
                const allUsers = usersResponse.data;
                const userInfo = allUsers.find(u => u.email === user?.email);
                setUserData(userInfo);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user]);
    useEffect(() => {
        console.log(userData);
    }, [userData]);
    return (
        <div className="pt-[1rem] px-1 rounded-2xl MainDash">
            <div className="flex flex-col gap-6 rounded-2xl justify-center items-center">
                <div className="w-full px-4 h-[180px] flex flex-col gap-1 rounded-2xl bg-gradient-to-r from-blue-200 to-cyan-200 justify-center items-center">
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            {userData && userData?.photoURL ? (
                                <img src={userData?.photoURL} alt="User Avatar" />
                            ) : (
                                <img src={logo} alt="Default Avatar" />
                            )}
                        </div>
                    </div>
                    <p className='mx-auto  font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>{userData?.displayName}</p>
                    <p className='mx-auto  font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>Role: {userData?.role}</p>
                    <div className='flex gap-3'>
                        <button onClick={handleSignOut} className="btn border-none btn-sm px-6 bg-gradient-to-r from-blue-200 shadow-lg to-cyan-200 text-white font-medium">Logout</button>
                        <Link to={'/'}>
                            <button className="btn border-none btn-sm px-7 bg-gradient-to-r from-blue-200 to-cyan-200 shadow-lg text-white font-medium">Home</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[320px] flex rounded-2xl bg-gradient-to-r from-violet-200 to-pink-200 justify-center items-center">
                    {/* Uncomment the following line when Pie component is ready */}
                    {/* <Pie /> */}
                </div>
            </div>
        </div>
    );
};

export default RightSide;
