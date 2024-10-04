import React from 'react';
import MyResume from "../components/AboutMe/MyResume";
import MyServices from "../components/AboutMe/MyServices";
import MyWorkProcess from "../components/AboutMe/MyWorkProcess";
import MySkill from "../components/AboutMe/MySkills";
import MyTestimonial from "../components/AboutMe/MyTestimonial";
import PersonalInformation from "../components/AboutMe/PersonalInformation";
import SectionSubtitle from "../components/ReuseableComponent/SectionSubtitle";
import SectionTitle from "../components/ReuseableComponent/SectionTitle";
import ImageSection from "../components/ReuseableComponent/ImageSection";
import ReuseableGrid from "../components/ReuseableComponent/ReuseableGrid";
import MyProjectTimeline from "../components/MyPortfolio/MyProjectTimeline";
import MyProcessProto from "../components/AboutMe/MyProcessProto";
import { overlayCode } from "../services/screens";
import ProfessionalExperience from '../components/AboutMe/MyProfessionalExperience';
import { personalInformation, educationInformation, experienceInformation } from '../services/data';

import Fade from 'react-reveal/Fade'; // Importing the Fade animation from react-reveal

const AboutMePage = () => {
    return (
        <div className="pb-5 bg-gradient-to-br from-transparent from-50% via-blue-100 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:to-transparent">
            <div className="p-4">
                <Fade right>
                    <ReuseableGrid
                        firstWord='About' secondWord='Me' s1lg={5} s2lg={7}
                        section1={<ImageSection deco='flex mx-auto w-[50%] md:w-[95%] lg:w-[70%] 2xl:w-[52%] 2xl:mt-5' img={personalInformation.img} overlay={overlayCode} width={''}/>}
                        section2={<PersonalInformation personalInformation={personalInformation} />}
                        title='Introduction'
                    />
                </Fade >
                <div className="p-">
                    <Fade left>
                        <ReuseableGrid
                            section1={<MyResume resumeInfo={experienceInformation} />}
                            section2={<MyResume resumeInfo={educationInformation} />}
                            firstWord='My' secondWord='Resume' title='Qualification' contain='container' s1lg={6} s2lg={6}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;
