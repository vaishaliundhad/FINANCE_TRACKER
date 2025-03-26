// import React, { useState } from 'react'
// import { useTaskContext } from './TaskProvider';
// // import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {

//     const { user, setUser, setcuruser } =  useTaskContext();

//     const navigate = useNavigate()
//     console.log("navigate", navigate);

//     const [formdata, setformdata] = useState({
//         username: "",
//         email: "",
//         password: ""
//     })


//     console.log("formdata", formdata);
//     console.log("user", user);

//     const handlesubmit = (e) => {
//         e.preventDefault();
//         setUser(formdata)
//         navigate("/login");
//         setcuruser(user);
//         setformdata({ username: "", email: "", password: "" })

//     }

//     return (
//         <div className=''>

//             <form className='mt-4 ' onSubmit={handlesubmit}>
                // <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
//                     <div className="pt-2">
//                         <h1 className="text-4xl text-center italic font-bold text-black mt-8 mb-4">SignUp</h1>
//                     </div>
//                     <div className="space-y-8">
//                         <div>
//                             <label className="block">UserName*</label>
//                             {/* <input type="text"  placeholder="Enter the Title" className={`mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100 `} /> */}
//                             <input type="text" name="username" id="username" placeholder="Enter the username" className='mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100' value={formdata.username} onChange={(e) => setformdata((prev => ({ ...prev, username: e.target.value })))} required />
//                         </div>
//                         <div>
//                             <label className='block'>Email*</label>
//                             <input type="email" name="email" id="email" placeholder="Enter the Email" className='mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100' value={formdata.email} onChange={(e) => setformdata((prev) => ({ ...prev, email: e.target.value }))} required />
//                         </div>
//                         <div>
//                             <label className='block'>PassWord*</label>
//                             <input type="password" name="password" id="password" placeholder="Enter the password" className='mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100' value={formdata.password} onChange={(e) => setformdata((prev) => ({ ...prev, password: e.target.value }))} required />
//                         </div>


//                         <div className="text-center">
//                             <button type="submit" className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2"> SignUp</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default SignUp

import React, { useState } from 'react';
import { useTaskContext } from './TaskProvider';
import { useNavigate } from 'react-router-dom';
import {auth} from '../Auth/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const { setUser, setCurUser } = useTaskContext();
    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

   const [error , setError]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        // setUser(formdata); 
        // setCurUser(formdata); 
        // navigate("/login");
        // setFormData({ username: "", email: "", password: "" });
        try{
           await createUserWithEmailAndPassword(auth , formdata.email , formdata.password);
           navigate("/login");
           setFormData({username:"" , email:"", password:""});
        }
        catch(error){
            setError(error.message)
        }
    };

    return (
        <div className="overflow-auto">
            <form className="mt-4" onSubmit={handleSubmit}>
            <div className="px-6 max-w-sm mx-auto bg-pink-400 rounded-xl shadow-slate-500 shadow-xl mt-4 bg-gradient-to-r from-indigo-500">
                    <h1 className="text-4xl text-center italic font-bold text-black mt-8 mb-4">Sign Up</h1>
                    {error && <p className='text-red-500 text-center'>{error}</p>}
                    <div className="space-y-6">
                        <div>
                            <label className="block">UserName*</label>
                            <input  type="text" placeholder="Enter your username" className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100" value={formdata.username} onChange={(e) => setFormData({ ...formdata, username: e.target.value })} required/>
                        </div>
                        <div>
                            <label className="block">Email*</label>
                            <input type="email" placeholder="Enter your email" className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100" value={formdata.email}  onChange={(e) => setFormData({ ...formdata, email: e.target.value })} required />
                        </div>
                        <div>
                            <label className="block">Password*</label>
                            <input type="password" placeholder="Enter your password" className="mt-1 rounded-md block w-full px-2 py-2 text-center bg-slate-100" value={formdata.password} onChange={(e) => setFormData({ ...formdata, password: e.target.value })}required />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="w-28 h-10 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 border-black mb-4 border-2">Sign Up
                            </button>
                        </div>

                        {/*  Already have an account? Login */}
                        <div className="text-center mb-4">
                            <p className="text-black">Already have an account?  
                                <button className="text-blue-600 underline ml-1" onClick={() => navigate('/login')}>Login</button>
                            </p>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

