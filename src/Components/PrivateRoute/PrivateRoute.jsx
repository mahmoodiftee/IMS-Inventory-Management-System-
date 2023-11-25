import { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import json from '../../assets/jsons/loading.json';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src={json}
        className='h-[250px] w-[250px] lg:h-[700px] lg:w-[700px]'
      >
      </Player>
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;