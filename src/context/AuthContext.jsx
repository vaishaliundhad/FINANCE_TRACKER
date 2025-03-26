
import { createContext, useState, useEffect , useContext } from "react";
import { onAuthStateChanged , signOut } from "firebase/auth";
import { auth } from "../Auth/firebaseConfig";


const AuthContext = createContext();

 

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setuser]=useState([]);
  const [curuser , setcuruser]=useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (user)=>{
      setcuruser(user);
    });
    return ()=>unsubscribe();
  },[])
  

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth , user , setuser , curuser , setcuruser , signOut:()=>signOut(auth)}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
