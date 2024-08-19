import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 p-8">
      {/* Left Div */}
      <div className="flex justify-center items-center mb-8 md:mb-0">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-48 h-48 md:w-64 md:h-64"
        />
      </div>

      {/* Right Div */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          John Doe
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mt-2">
          Front End Developer
        </h2>
        <p className="mt-4 text-gray-500 leading-relaxed">
          I’m a passionate front-end developer specializing in creating dynamic,
          responsive, and user-friendly web interfaces. My creativity and
          attention to detail allow me to craft visually appealing and highly
          functional designs, ensuring an exceptional user experience.
        </p>
      </div>
    </div>
  );
};

export default Home;
