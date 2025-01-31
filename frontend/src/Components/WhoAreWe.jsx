import React from 'react';
import { data } from '../restApi.json';

const WhoAreWe = () => {
  return (
    <>
      <section className="py-20 mt-20">
        <div className="container mx-auto px-6">
          {/* Top Banner with Stats */}
          <div className="flex justify-center gap-8">
            {/* Left Stats */}
            <div className="flex flex-col items-center max-w-sm">
              {data[0].who_we_are.slice(0, 2).map((element) => (
                <div
                  className="p-6 rounded-xl mb-6 text-center mt-20 ml-16"
                  key={element.id}
                >
                  <h1 className="text-[70px]">{element.number}</h1>
                  <p className="text-[20px] mt-2">{element.title}</p>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center items-center">
              <img
                src="/images/whoweare.png"
                alt="Food"
                className="w-80 md:w-96 lg:w-1/2 transform hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Right Stats */}
            <div className="flex flex-col items-center max-w-sm">
              {data[0].who_we_are.slice(2).map((element) => (
                <div
                  className="p-6 rounded-xl mb-6 text-center mt-20 mr-16"
                  key={element.id}
                >
                  <h1 className="text-[70px]">{element.number}</h1>
                  <p className="text-[20px] mt-2 ">{element.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
