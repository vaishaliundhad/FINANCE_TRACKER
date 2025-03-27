// import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
// import './App.css'
// import FinanceTracker from './pages/FinanceTracker'
// import FinanceList from './pages/FinanceList'
// import TaskProvider from './pages/TaskProvider'
// // import SignUp from './pages/SignUp'
// import Navbar from './components/Navbar'
// import { Route } from 'react-router'
// import Home from './pages/Home'
// // import Login from './pages/Login'
// import EditFinanceTracker from './pages/EditFinanceTracker'
// import Dashboard from './pages/Dashboard'
// // import AuthPage from './pages/Authpage'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Route  element={<Navbar/>}>
//      <Route path="/" element={<Home/>}></Route>
//      <Route path="/financeTracker" element={<FinanceTracker/>}></Route>
//      {/* <Route path="/signup" element={<SignUp/>}></Route> */}
//      <Route path="/financeList" element={<FinanceList />}></Route>
    //  <Route path="/editfinancetracker" element={<EditFinanceTracker />}></Route>
//      {/* <Route path="/login" element={<Login />}></Route> */}
//      {/* <Route path="/authpage" element={<AuthPage />}></Route> */}
//      <Route path="/dashboard" element={<Dashboard />}></Route>
     
//    </Route>
//   )
// )

// function App() {



//   return (
//     <>
//       <TaskProvider>
//        <RouterProvider router={router}></RouterProvider>
//     </TaskProvider>
//     </>
//   )
// }

// export default App



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskProvider from "./pages/TaskProvider";
import FinanceTracker from "./pages/FinanceTracker";
 import FinanceList from "./pages/FinanceList";
 import EditFinanceTracker from './pages/EditFinanceTracker'
 import Navbar from './components/Navbar'
 import Home from './pages/Home'
 import Login from "./pages/Login";
 import SignUp from "./pages/SignUp";
//  import Dashboard from './pages/Dashboard'
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
        <Route  element={<Navbar/>}>
          {/* <Route path="/" element={<FinanceTracker />} /> */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/FinanceList" element={<FinanceList />} />
          <Route path="/financeTracker" element={<FinanceTracker/>}></Route>
          <Route path="/editfinancetracker" element={<EditFinanceTracker />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="/dashboard" element={<PrivateRoute ><Dashboard /></PrivateRoute>}></Route> */}
        </Route>  
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TaskProvider from "./pages/TaskProvider"; 
// import FinanceTracker from "./pages/FinanceTracker";
// import FinanceList from "./pages/FinanceList";
// import EditFinanceTracker from './pages/EditFinanceTracker';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';  

// function App() {
//   return (
//     <TaskProvider>
//       <Router>
//         <Navbar /> 
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/FinanceList" element={<FinanceList />} />
//           <Route path="/financeTracker" element={<FinanceTracker />} />
//           <Route path="/editfinancetracker" element={<EditFinanceTracker />} />
//         </Routes>
//       </Router>
//     </TaskProvider>
//   );
// }

// export default App;
