import * as React from 'react';
// import 'animate.css'; // Ensure animate.css is imported if using animations

const SectionTitle = ({ firstWord, secondWord, title }) => {
    return (
        <div className="mt-4 lg:mt-6 xl:mt-8">
            <div className="text-4xl lg:text-5xl xl:text-6xl text-white py-2 md:py-3 lg:pt-5 animate__animated animate__fadeInDown animate__delay-1s">
                <span className="title-bg block text-4xl md:text-5xl lg:text-6xl  ">
                    {/* <span className='title-bg text-transparent font-poppins text-4xl font-extrabold mx-auto uppercase z-[-100] text-stroke-1 text-stroke-blue dark:text-stroke-white'> */}
                    {title}</span>
                
                {/* <div className="text-center mt-2">
                    <span className="text-white">{firstWord} </span>
                    <span className="text-primary">{secondWord}</span>
                </div> */}
                <div className="animated-bar text-white hidden lg:block my-0"></div>
            </div>
        </div>
    );
}

export default SectionTitle;
