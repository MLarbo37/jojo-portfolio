import React, { useEffect, useState } from 'react';
import ColorThief from 'colorthief';
import ImageSection from "../ReuseableComponent/ImageSection";
import ImageTitlePara from "../ReuseableComponent/ImageTitlePara";
import CallMadeIcon from '@mui/icons-material/CallMade';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useTheme, styled } from '@mui/material/styles';
import {Zoom } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const MyProjectCards = ({ data }) => {
    const navigate = useNavigate()
    const [colorData, setColorData] = useState([]);

    const getLuminance = (rgb) => {
        const [r, g, b] = rgb.map(value => value / 255.0);
        const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
        return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    };

    const getTextColor = (rgb) => {
        const luminance = getLuminance(rgb);
        return luminance > 0.5 ? 'text-black' : 'text-white';
    };

    useEffect(() => {
        const colorThief = new ColorThief();
        const imageElements = document.querySelectorAll('.project-image');

        imageElements.forEach((img, index) => {
            img.onload = () => {
                const color = colorThief.getColor(img);
                const textColor = getTextColor(color);
                setColorData((prevData) => {
                    const newData = [...prevData];
                    newData[index] = {
                        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                        textColor: textColor
                    };
                    return newData;
                });
            };
        });
    }, [data]);

    const CustomisedTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(15),
          border: '1px solid #dadde9',
        },
        [`& .${tooltipClasses.arrow}`]: {
          color: '#f5f5f9',
        },
      }));

    return (
        <div className="container  p-5  mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data && data.map((datum, index) => (
                
                <div
                    key={index}
                    className="hover:drop-shadow-2xl  group flex justify-center relative border rounded-xl p-4 overflow-hidden ease-in duration-300 drop-s"
                    style={{ backgroundColor: colorData[index]?.backgroundColor || '#00000e80' }}
                >
                    <Fade cascade right duration={3000}>
                    <ImageTitlePara
                        timeline={true}
                        imageSection={
                            <img
                                src={datum.img}
                                alt={datum.projectName}
                                className="project-image rounded-xl hover:backdrop-blur-sm"
                                crossOrigin="anonymous"
                            />
                        }
                        action={datum.link}
                    />
                    <div className={` gap-3 productDetails  absolute w-[80%] bottom-0 p-4 rounded-xl drop-shadow-2xl  transition-transform duration-700 ease-in-out transform translate-y-full group-hover:-translate-y-5 ${colorData[index]?.textColor || 'text-white'}`}
                        style={{ backgroundColor: colorData[index]?.backgroundColor || '#00000e30' }}
                    >
                        <div className="grid grid-cols-9 gap-2">
                            <div className="mb-2 col-span-8">
                                <span className="text-base font-medium ">{datum.projectName}</span>
                            </div>
                            {/* <div onClick={()=> navigate(datum.link)} className={`flex items-center justify-center rounded-lg max-h-8 w-full rounded text-center border border-current ${colorData[index]?.textColor || 'text-white'}`}>
                                <CustomisedTooltip TransitionComponent={Zoom} title={'View more'} placement="left" arrow className='primaryColo'>
                                    <div className="animate-bounce duration-300">
                                        <CallMadeIcon/>
                                    </div>
                                </CustomisedTooltip>
                            </div> */}
                            
                        </div  > 
                        

                        <div className="mb-2 ">
                                <p className='text-xs'>{datum.projectDescription}</p>
                            </div>
                    </div>
                    </Fade>
                </div>
               
            ))}
        </div>
    );
};

export default MyProjectCards;
