import React from 'react';
import MyProjectTimeline from "../components/MyPortfolio/MyProjectTimeline";
import SectionTitle from "../components/ReuseableComponent/SectionTitle";
import { portfolioData } from "../services/data";
import MyProjectCards from '../components/MyPortfolio/MyProjectCards';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    
    return (
        <div className="h-full bg-gradient-to-l from-transparent via-blue-100 via-50% dark:bg-gradient-to-r dark:from-transparent  dark:to-transparent intro pb-5">
            <div className="flex justify-center items-center">
                <SectionTitle firstWord='My' secondWord='Works' title='Portfolio' />
            </div>
            <div className="mt-8">
                <Fade delay={500} top bottom duration={2000}>
                <MyProjectCards data ={portfolioData}/>
                {/* <MyProjectTimeline data={portfolioData} /> */}
                </Fade>
                
            </div>
        </div>
    );
}

export default Portfolio;
