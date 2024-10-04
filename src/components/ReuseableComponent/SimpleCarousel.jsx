import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const SimpleCarousel = () => {
  const roles = ['Product Manager', 'Frontend Developer', 'Product Owner', 'UI/UX Enthusiast'];

  return (
    <div className="flex justify-center items-center   dark:text-gray-100">
      <h4 className="md:text-4xl text-lg font-semibold text-primary  dark:text-gray-100">
        <Typewriter
          words={roles}
          loop={0} // 0 means infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h4>
    </div>
  );
};

export default SimpleCarousel;
