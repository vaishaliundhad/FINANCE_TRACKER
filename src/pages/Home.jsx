import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import image2 from "../assets/image2.webp";

// 🎨 Gradient Button Component
const GradientButton = ({ children, variant = "primary", onClick }) => {
  const buttonStyles = `
    gradient-button inline-flex items-center justify-center
    rounded-[11px] min-w-[132px] px-9 py-4
    text-base leading-[19px] font-[500] text-white font-sans font-bold
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white
    disabled:pointer-events-none disabled:opacity-50
    ${variant === "primary" ? "bg-blue-600" : "bg-gray-500"}
  `;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

// 📌 Demo Component
const Demo = () => {
  return (
    <div className="flex gap-8">
      {/* <GradientButton variant="primary" onClick={() => navigate("/login")}>Get Started</GradientButton> */}
      {/* <GradientButton variant="secondary">Get Started</GradientButton> */}
    </div>
  );
};

{/* <div className="overflow-x-auto overflow-hidden fixed ml-[-25px] mt-[-20px] h-screen w-screen">
<div className="relative w-screen h-screen overflow-hidden">
  {/* Background Image */}
// <img src={image2} className="w-lvw max-h-svh object-cover overflow-hidden ml-[-120px] " alt="Background" /> */}

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed overflow-hidden mt-[-22px] ml-[-25px]">
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Image */}
        <img src={image2} className=" absolute top-0 left-0 w-full h-full object-cover " alt="Background" />

        {/* Demo Component */}
        <div className="absolute  mt-96 ml-40  left-1/2 transform -translate-x-1/2 text-right">
          <Demo />
          <GradientButton variant="secondary" className="" onClick={() => navigate("/login")}>Get Started</GradientButton>
        </div>

        {/* Outlet for Nested Routes */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
export { GradientButton, Demo };

