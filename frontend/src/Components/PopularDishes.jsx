import React from 'react';
import { data } from '../restApi.json';

const PopularDishes = () => {
  return (
    <section className="py-12 mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-[70px] mb-4">POPULAR DISHES</h1>
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! 
            Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. 
            Quasi, et molestias!
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data[0].dishes.map((element) => (
            <div 
              className="card bg-[#C0D7BB] rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300" 
              key={element.id}
            >
              {/* Image Section */}
              <img 
                src={element.image} 
                alt={element.title} 
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Content Section */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {element.title}
                </h3>
                <button 
                  className="px-4 py-2 bg-[#1b2837] text-white text-md font-medium rounded-full hover:bg-green-600 transition-colors duration-300"
                >
                  {element.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
