import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (media) => {
    media()
      .then((response) => {
        console.log(response);

        Swal.fire({
          icon: "success",
          text: `Welcome ${response.user.displayName}`,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error("Login Error:", err.message);
        Swal.fire("Error!", err.message || "An error occurred.", "error");
      });
  };

  return (
    <div className="mt-10">
      <div className="divider">
        <FcGoogle
          className="text-[150px] cursor-pointer"
          onClick={() => handleLogin(googleLogin)}
        ></FcGoogle>
      </div>
    </div>
  );
};

export default SocialLogin;
