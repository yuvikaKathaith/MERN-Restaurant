import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-pink-200 via-yellow-100 to-purple-200 min-h-screen text-white">
      <div className="text-center p-10 bg-white bg-opacity-40 rounded-lg shadow-lg max-w-md w-full">
        <img src="/images/notFound.svg" alt="notFound" className="mx-auto mb-6" />
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">LOOKS LIKE YOU'RE LOST</h1>
        <p className="text-lg text-gray-600 mb-6">We can't seem to find the page you're looking for</p>
        <Link
          to="/"
          className="inline-flex items-center text-xl text-gray-800 hover:text-gray-300 font-semibold"
        >
          Back to Home
          <HiOutlineArrowNarrowRight className="ml-2 text-black" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
