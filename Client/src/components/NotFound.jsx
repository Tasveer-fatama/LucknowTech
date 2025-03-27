import React from "react";
import { useNavigate } from "react-router-dom";
import pagenotfound from "../assets/pagenotfound.gif";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center relative">

      <div className="my-20">
        <img src={pagenotfound} alt="Page Not Found" className=" h-auto object-cover" />
      </div>
      
    </div>
  );
}
