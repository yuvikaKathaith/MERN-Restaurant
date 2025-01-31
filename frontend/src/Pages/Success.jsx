import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-pink-200 via-yellow-100 to-purple-200 min-h-screen

">
      <div className="p-8 flex flex-col items-center -mt-20">
        <img
          src="/images/success.png"
          alt="success"
          className="w-[650px] h-[650px] mb-6"
        />
        
        <h1 className="text-[40px] text-black mb-4 -mt-28">
          Redirecting to Home in{" "}
          <span className="text-black font-bold">{countdown}</span> seconds...
        </h1>
        <Link
          to="/"
          className="flex items-center justify-center text-[20px] text-black px-6 py-3 rounded-full bg-green-600 transition duration-300"
        >
          Back to Home
          <HiOutlineArrowNarrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Success;
