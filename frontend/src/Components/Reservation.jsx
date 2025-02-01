import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const navigate = useNavigate()

    const handleReservation = async (e) => {
        e.preventDefault();

        try {await axios.post("https://mern-restaurant-t5kw.onrender.com/api/v1/reservation/send",
              { firstName, lastName, email, phone, date, time },
              {
                headers: {
                  "Content-Type": "application/json"
                },

                withCredentials: true,
              }
          );
          toast.success(data.data);
  
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone(0);
          setTime("");
          setDate("");
          navigate('/success');
        } 
        catch (error) {
          // Check if there's a response from the server and extract the message
          const errorMessage = error.response?.data?.errors?.[0];
          // const errorMessage = error.response?.data?.errors?.[0] || "An unknown error occurred.";

          toast.error(errorMessage);
          console.log(error);
      }
    }

  return (
    <section className="reservation py-16">
      <div className="flex justify-between items-center">
        {/* Image Section */}
        <div className="hidden lg:block w-[35%] h-[45%] ml-32">
          <img src="/images/reservation.png" alt="res" className="object-cover rounded-lg" />
        </div>

        {/* Reservation Form Section */}
        <div className="w-full lg:w-1/3 bg-white p-8 lg:p-12 mr-48">
          <h1 className="text-4xl font-bold text-black text-center mb-4">MAKE A RESERVATION</h1>
          <p className="text-center text-xl text-gray-800 mb-8">For Further Questions, Please Call</p>
          <form>
            {/* First and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-black">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#54b03f] py-2 text-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#54b03f] py-2 text-black"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#54b03f] py-2 text-black"
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#54b03f] py-2 text-black"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#54b03f] py-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#54b03f] py-2 text-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleReservation}
              className="flex items-center justify-center bg-black rounded-full py-3 px-6 hover:bg-gray-800 transition duration-300 w-full text-[#c5f9b9]"
            >
              RESERVE NOW
              <span className="ml-2">
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Reservation
