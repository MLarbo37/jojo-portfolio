import React from 'react';
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ImageSection from "../components/ReuseableComponent/ImageSection";
import SimpleCarousel from "../components/ReuseableComponent/SimpleCarousel";
import ColorButton from "../components/ReuseableComponent/ColorButton";

const HomePage = () => {
    const matches = window.matchMedia('(min-width: 900px)').matches;
    const navigate = useNavigate();

    const socialMediaIcons = [
        { icon: <Facebook className="text-blue-600 dark:text-blue-400" fontSize="large" />, link: "https://facebook.com" },
        { icon: <LinkedIn className="text-blue-700 dark:text-blue-500" fontSize="large" />, link: "https://linkedin.com" },
        { icon: <GitHub className="text-black dark:text-gray-300" fontSize="large" />, link: "https://github.com" },
        { icon: <Instagram className="text-pink-600 dark:text-pink-400" fontSize="large" />, link: "https://instagram.com" },
    ];

    return (
        <div className="container flex justify-center items-center bg-gradient-to-r from-transparent via-blue-100 to-transparent dark:bg-gradient-to-r dark:from-transparent  dark:to-transparent h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-800 dark:text-gray-200">
                <div className="flex justify-center items-center animate__animated animate__fadeInLeft animate__delay-1s">
                    <div className="w-8/12 lg:w-9/12 relative">
                        <div className="absolute hidden md:flex border border-primary rounded-xl h-[100%] w-[100%] top-10 left-10 dark:border-primary"></div>
                        <ImageSection
                            img={require('../asset/myPix/jojo.jpg')}
                            height="100%"
                            deco="flex justify-center"
                            lineBorder="grayscale-0 dark:grayscale-0"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-center container px-0">
                        <div className="md:mb-4 mb-2 animate__animated animate__fadeInDown animate__delay-1s">
                            <label className="text-lg text-primary dark:text-gray-400">Get To Know Me</label>
                        </div>
                        <div className="md:mb-4 mb-2 animate__animated animate__fadeInDown animate__delay-1s">
                            <h2 className="text-2xl dark:text-gray-100">ABBIW, Jojo Akwaah</h2>
                        </div>
                        <div className="md:mb-4 mb-2 text-primary dark:text-gray-400 animate__animated animate__fadeInDown animate__delay-2s">
                            <SimpleCarousel />
                        </div>
                        <div className="md:mb-4 mb-2 animate__animated animate__zoomIn animate__delay-2-5s">
                            <figure>
                                <blockquote className="blockquote dark:text-gray-300">
                                    <p>Innovation is the ability to see change as an opportunity - not a threat</p>
                                </blockquote>
                                <figcaption className="blockquote-footer dark:text-gray-400">
                                    <cite title="Source Title">Steve Jobs</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <div className="animate__animated animate__fadeInTopLeft animate__delay-2s">
                                <ColorButton
                                    name="My Portfolio"
                                    action={() => navigate('/portfolio')}
                                />
                            </div>
                            <div className="animate__animated animate__fadeInTopRight animate__delay-2s flex items-center">
                                <button
                                    onClick={() => navigate('/about')}
                                    className="h6 p-3 text-primary hover:text-gray-100 rounded-lg capitalize border border-primary-light  dark:text-gray-100 dark:border-primary hover:bg-primary-light dark:hover:bg-primary-light transition duration-300"
                                >
                                    About Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
