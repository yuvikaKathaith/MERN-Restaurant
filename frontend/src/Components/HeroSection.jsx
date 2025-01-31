const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col lg:flex-row justify-between items-center p-10">
      {/* Left Section delicious*/}
      <div className="flex flex-col items-center lg:items-start">
        <div className="ml-32">
          {/* "Delicious" */}
          <h1 className="text-[140px] -mt-16">Delicious</h1>

          {/* Pancakes Image */}
          <div className="relative">
            <img
              src="/images/hero1.jpg"
              alt="Pancakes"
              className="rounded-xl shadow-lg w-[300px] h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Center Section food*/}
      <div className="flex flex-col items-center gap-4 mt-20 -ml-72">
        {/* "Food" */}
        <img 
            src='/images/threeLines.svg'
            alt="threelines"
            className="ml-96 h-16 w-16"
        />
        <h1 className="text-[140px]">Food</h1>

        {/* Logo */}
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-40 h-40 rounded-full -ml-24 -mt-5"
        />
      </div>

      {/* Right Section dishes*/}
      <div className="flex flex-col items-center gap-6 mr-32">
        {/* Burger Image */}
        
        <div className="relative flex">
          <img
            src="/images/hero2.jpg"
            alt="Burger"
            className="rounded-xl shadow-lg w-[300px] h-[400px] object-cover"
          />
        </div>

        {/* "Dishes" */}
        <h1 className="text-[140px] -ml-44">Dishes</h1>
      </div>
    </section>
  );
};

export default HeroSection;
