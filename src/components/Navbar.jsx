
// import React from 'react'
// import { NavLink, Outlet } from 'react-router'
// import image1 from '../assets/image1.jpg'


// const Navbar = () => {
//     return (
//         <>
//             <div className="h-20 flex bg-gray-50 sticky top-0  shadow-md shadow-gray-600  overflow-hidden z-50">
//                 <div className='font-bold items-center flex text-2xl'>
//                     {/* <div className='ml-4'>Expense Tracker</div> */}
//                     <img src={image1} alt="" className='h-16 mt-2 w-18 ml-8 border-2 bg-sky-300 mb-2 border-black shadow-xl shadow-gray-500 rounded-full p-1' />
//                 </div>

//                 <div className='flex  justify-evenly items-center ml-[40%] '>

//                     <nav className='flex gap-6 justify-evenly items-center '>
//                         <ul className='gap-8 flex'>

//                             <NavLink to="/">Home</NavLink>
//                             <NavLink to="/financeTracker">FinanceTracker</NavLink>
//                             <NavLink to="/signup">Signup</NavLink>
//                             {/* <NavLink to="/financeList">FinanceList</NavLink> */}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>


//             <div>
//                 <Outlet />
//             </div>
//         </>
//     )
// }

// export default Navbar

// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import image1 from '../assets/image1.jpg';
// import { FcHome } from "react-icons/fc";



// const Navbar = () => {


//     return (
//         <div className="flex">

//             <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 p-6 shadow-md shadow-blue-200 ">

//                 <div className="flex items-center justify-center mb-6">
//                     <img src={image1} alt="Logo" className="h-16 w-16 rounded-full border-2 border-white" />
//                 </div>


//                 <nav>
//                     <ul className="flex flex-col gap-4">

//                         <NavLink to="/" className="py-2 px-4 rounded hover:bg-gray-700 flex ">< FcHome className='mr-4 text-2xl' /> Home</NavLink>
//                         <NavLink to="/financeTracker" className="py-2 px-4 rounded hover:bg-gray-700">💰 Finance Tracker</NavLink>
//                         <NavLink to="/signup" className="py-2 px-4 rounded hover:bg-gray-700">📝 Signup</NavLink>
//                     </ul>
//                 </nav>
//             </div>

//             <div className="flex-1 ml-64">

//                 <div className="h-16 bg-gray-100 flex items-center justify-center shadow-md  shadow-gray-600 ">
//                     <h1 className="text-xl font-extrabold">📊 PERSONAL FINANCE TRACKER</h1>
//                 </div>
//                 <div className="p-6">
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import { FcHome } from "react-icons/fc";
import { FcKey } from "react-icons/fc";
import { CgOpenCollective } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

    return (
        <div className="flex overflow-auto ">

            <div className={`w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 p-6 shadow-md shadow-blue-200 transition-all duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-center mb-6">

                    <img src={image1} alt="Logo" className="h-16 w-16 rounded-full border-2 border-white" />
                </div>


                    <nav>
                        <ul className="flex flex-col gap-4">
                            <NavLink to="/" className="py-2 px-4 rounded hover:bg-gray-700 flex ">
                                <FcHome className='mr-4 text-2xl ' /> Home
                            </NavLink>
                            <NavLink to="/financeTracker" className="py-2 px-4 rounded hover:bg-gray-700 ">💰 Finance Tracker</NavLink>
                            {/* <NavLink to="/login" className="py-2 px-4 rounded hover:bg-gray-700"><FcKey className='inline-block size-6'/> Login</NavLink> */}
                            <NavLink to="/signup" className="py-2 px-4 rounded hover:bg-gray-700">📝 Signup</NavLink>
                            <NavLink to="/dashboard" className="py-2 px-4 rounded hover:bg-gray-700"><MdDashboard className='inline-block size-6'/> Dashboard</NavLink>

                        

                        </ul>
                    </nav>
            </div>

            <button
                onClick={toggleSidebar}
                className={`fixed  z-50  px-4 py-2 rounded-md shadow-md ${isSidebarOpen ? "text-white top-0" : "text-black  top-5"}`}>
                {isSidebarOpen ? <IoClose /> : <CgOpenCollective />}
            </button>

            <div className={`flex-1 transition-all duration-500 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                <div className="h-16 bg-gray-100 flex items-center justify-center shadow-md shadow-gray-600">
                    <h1 className="text-xl font-extrabold">📊 PERSONAL FINANCE TRACKER</h1>
                </div>
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
