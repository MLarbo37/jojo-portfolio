import { Mail, WhatsApp } from "@mui/icons-material";
import React from "react";
import ColorButton from "../components/ReuseableComponent/ColorButton";
import ColumnIconText from "../components/ReuseableComponent/ColumnIconText";
import CustomisedTextField from "../components/ReuseableComponent/CustomisedTextField";
import SectionTitle from "../components/ReuseableComponent/SectionTitle";
import TextSection from "../components/ReuseableComponent/TextSection";
import ImageSection from "../components/ReuseableComponent/ImageSection";
import Fade from 'react-reveal/Fade';

const ContactPage = () => {
    const img = require('../asset/contactUs1.svg').default;
    const contactInformation = {
        title: "Have a project/ product in mind?",
        info: 'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
        contactOptions: [
            {
                icon: <Mail sx={{ fontSize: 55 }}/>,
                opt: 'Mail Me',
                desc: 'abbiwjojo22@gmail.com'
            },
            {
                icon: <WhatsApp sx={{ fontSize: 55 }}/>,
                opt: "Let's Chat",
                desc: '(+233)248651322'
            }
        ]
    };

    return (
        <div className=" bg-gradient-to-br h-full from-transparent from-50% via-blue-100 to-transparent dark:bg-gradient-to-r dark:from-transparent  dark:to-transparent rounded-2xl p-8 ">
            <div className="container mx-auto">
            <div className="flex justify-center items-center mb-10">
                <SectionTitle firstWord="Get In" secondWord="Touch" title="Contact" />
            </div>

            <div className="flex justify-center mx-auto">
                

                {/* <div className="md:w-1/2 lg:w-1/3 flex flex-col items-center space-y-4">
                    <ImageSection contactpage={true} img={img} width="40vw" />

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <CustomisedTextField label="Name" />
                        <CustomisedTextField label="Email" />
                    </div>
                    <div className="w-full mt-4">
                        <CustomisedTextField label="Subject" />
                    </div>
                    <div className="w-full mt-4">
                        <textarea
                            name=""
                            id=""
                            className="w-full p-2 rounded-lg border border-gray-300"
                            rows="5"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="w-full mt-4">
                        <ColorButton name="Send Message" />
                    </div>
                </div> */}
                <div className="md:w-1/2 lg:w-2/3 mb-8 md:mb-0">
                    <div className="space-y-6">
                        <Fade bottom cascade duration={2000}>
                        <div className="text-xl font-semibold">{contactInformation.title}</div>
                        <p>{contactInformation.info}</p>

                        {contactInformation.contactOptions.map((option, index) => (
                            <ColumnIconText
                                key={index}
                                contactpage={true}
                                iconClass="text-primary dark:text-gray-100"
                                titleClass="font-semibold"
                                subtitleClass="text-lg"
                                icon={option.icon}
                                title={option.opt}
                                subtitle={option.desc}
                                iconSize={1.5}
                                textSide={10.5}
                            />
                        ))}
                       </Fade>
                    </div>
                    <div className="float-end">
                    <ImageSection contactpage={true} img={img} width="30vw" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactPage;
