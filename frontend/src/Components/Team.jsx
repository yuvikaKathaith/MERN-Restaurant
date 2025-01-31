import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section className="team py-16" >
      <div className="mx-auto px-4 text-center">
        {/* Heading Section */}
        <div className="mb-12">
          <h1 className="text-[70px] font-bold mb-4">OUR TEAM</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        {/* Team Cards */}
        <div className="flex flex-wrap justify-between m-24 gap-8">
          {data[0].team.map((element) => (
            <div
              className="w-[200px] flex flex-col items-center text-center"
              key={element.id}
            >
              {/* Image Wrapper */}
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img
                  src={element.image}
                  alt={element.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name and Designation */}
              <h3 className="text-[30px] font-bold mb-2">
                {element.name.toUpperCase()}
              </h3>
              <p className="text-lg">{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
