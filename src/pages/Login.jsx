
import React, { useState } from 'react'
import { useTaskContext } from './TaskProvider';
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider, signInWithPopup, twitterProvider } from '../Auth/firebaseConfig';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { githubProvider } from '../Auth/firebaseConfig';


const Login = () => {

  const { setIsAuth, setCurUser } = useTaskContext();
  const navigate = useNavigate()

  const [formdata, setformdata] = useState({
    email: "",
    password: ""
  })

  console.log('formdata', formdata);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {


      const usercrendital = await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      const user = usercrendital.user;
      console.log("google sign-in success", usercrendital.user);

      setIsAuth(true);
      setformdata({ email: "", password: "" })
      setCurUser(user)
      navigate("/financeTracker")

    }
    catch (err) {
      alert("invalid username and password plz signup")
      console.log("login err", err);

    }
  }

  //Googlelogin
  const handleGoogleLogin = async () => {

    try {


      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      console.log("google sign-in success", user);

      setIsAuth(true);
      setCurUser(user)
      navigate("/financeTracker")

    }
    catch (error) {

      console.error("Google login error:", error.message);
      alert("Google login failed! try again");

    }
  }

  //Github Login
  const handleGithubLogin = async () => {
    try {
      // const githubProvider = new GithubProvider();
      console.log("intial github login...");

      const result = await signInWithPopup(auth, githubProvider)
      const user = result.user;
      console.log("Github sign-up success", user);

      setIsAuth(true)
      setCurUser(user)
      navigate("/financeTracker")

    }
    catch (err) {
      console.log("Github login error", err.message);
      alert("Github login failed ! try again.");

    }
  }

  //twitter login

  const handleTwitterLogin = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider)
      const user = result.user;
      console.log("Twitter SignIn Success", user);
      setIsAuth(true);
      setCurUser(user);
      navigate("/financeTracker")

    }
    catch (error) {
      console.log("Twitter login error", error.message);
      alert("Twitter login failed! try again.")

    }
  }

  return (
    <div className='overflow-auto'>
      <h1>API KEY: {import.meta.env.VITE_API_KEY}</h1>
      {/* <h1 className="heading text-xl">This is the Login Page</h1> */}
      <form onSubmit={handlesubmit}>
        <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-center pt-4">Login Page</h1>
            </div>
            <div>
              <label className="block">Email*</label>
              <input type="email" placeholder="Enter the email" className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100" value={formdata.email} onChange={(e) => setformdata((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label className="block">Password*</label>
              <input
                type="password"
                placeholder="Enter the Password"
                className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100"
                value={formdata.password}
                onChange={(e) => setformdata((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <div className='text-center'>
              <button className="w-64 flex items-center  justify-center ml-8 h-10  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black  border-2 " >Login </button>
              {/* <button className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2 ">Signup </button> */}
            </div>


            <div className='text-center flex items-center ml-8'>
              <button onClick={handleGoogleLogin} className='w-64   h-10  bg-blue-600  text-white flex text-center items-center justify-center px-4  border-black mb-2 mt-[-15px] border-2'><span className='text-xl mr-4 text-red-600'><FaGoogle /></span>Continue with Google</button>
            </div>



            <div className='text-center flex items-center ml-8'>
              <button
                onClick={handleGithubLogin}
                className='w-64 mt-[-30px] h-10 bg-black  text-white border-black flex items-center justify-center mb-4 border-2 gap-2  px-4'
              >

                <span className=' text-2xl'><FaGithub /></span>

                Continue with Github
              </button>
            </div>
            <button
              onClick={handleTwitterLogin}
              className='w-64 h-10 bg-blue-400 ml-8   text-white border-black flex items-center justify-center mb-4 border-2 gap-2 px-4'>
              <span className='text-2xl'><FaTwitter /></span> Continue with Twitter
            </button>

            <div className='text-center '>
              <p className='text-black'>Dont't have an account?
                <button className='text-blue-600 underline ml-1 mb-4' onClick={() => navigate("/SignUp")}>Sign Up</button>
              </p>
            </div>


          </div>
        </div>
      </form>
    </div>
  )
}

export default Login

