import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (media) => {
    media()
      .then((response) => {
        Swal.fire({
          icon: "success",
          text: `Welcome ${response.user.displayName}`,
        });

        const userData = {
          displayName: response?.user?.displayName || '',
          email: response?.user?.email || '',
          photoURL: response?.user?.photoURL || '',
          role: 'user',
        };

        return axios.post("https://ims-server-kappa.vercel.app/users", userData);
      })
      .then(() => {
        navigate(location?.state ? location.state : "/"); // Keep this navigate
      })
      .catch((err) => {
        console.error("Login Error:", err.message);
        Swal.fire("Error!", err.message || "An error occurred.", "error");
      });
  };

  return (
    <div className="mt-4 w-[80%] mx-auto">
      <div className="divider">
        <FcGoogle
          className="text-[80px] cursor-pointer"
          onClick={() => handleLogin(googleLogin)}
        ></FcGoogle>
      </div>
    </div>
  );
};

export default SocialLogin;
