import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Pages/Authentication/FireBase/Firebase.Cofig";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserData = async (currentUser) => {
    try {
      const userDataResponse = await axios.get(`https://ims-server-kappa.vercel.app/users`);
      const allUsers = userDataResponse.data;
      const userInfo = allUsers.find(u => u.email === currentUser.email);
      
      setUser({
        ...currentUser,
        role: userInfo.role,
      });
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log('Logged in User', currentUser);

      if (currentUser) {
        await updateUserData(currentUser);
      }

      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, []);

  const LogOut = () => {
    setLoading(true);
    return signOut(auth)
  }


  const authInfo = { googleLogin, createUser, LoginUser, LogOut, user, loading }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;