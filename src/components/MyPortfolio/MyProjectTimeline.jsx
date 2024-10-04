import { School, Star, Work } from "@mui/icons-material";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../App';
import ImageTitlePara from "../ReuseableComponent/ImageTitlePara";
import ImageSection from "../ReuseableComponent/ImageSection";
import { isEven } from "../../services/functions";
import React from "react";
import { DarkThemeContext } from "../../views/WorkSpace";

const MyProjectTimeline = ({ data }) => {
    const isDarkTheme = React.useContext(DarkThemeContext);

    return (
        <div className=''>
            <div className="">
              
                <VerticalTimeline lineColor="#00000e">
                    {data && data.map((datum, index) => (
                      
                        <VerticalTimelineElement
                            key={index}
                            className="bg-transparent corners"
                            date={datum.projectDate}
                            iconStyle={{ border: '1px solid', background: '#00000e', color: '#fff', padding: '10px' }}
                            icon={<Work />}
                            contentStyle={{
                                background: 'transparent',
                                border: isEven(index) ? '2px solid #00000e' : '2px solid #00000e',
                                boxShadow: isDarkTheme ? '5px 3px 17px 1px #121220' : '5px 3px 17px 1px #D3D3D3',
                                borderRadius: '20px',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid #00000e' }}
                        >
                            <ImageTitlePara
                                timeline={true}
                                imageSection={<ImageSection img={datum.img} width={'100%'} />}
                                titleSection={datum.projectName}
                                subtitleSection={datum.role}
                                paraSection={datum.projectDescription}
                                action={datum.link}
                            />
                        </VerticalTimelineElement>
                    ))}

                    <VerticalTimelineElement
                        iconStyle={{ background: '#00000e', color: '#fff' }}
                        icon={<Star />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default MyProjectTimeline;
