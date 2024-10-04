import React from "react";
import { useNavigate } from "react-router-dom";
import ColorButton from "./ColorButton";

const ImageTitlePara = ({ imageSection, titleSection, subtitleSection, paraSection, iconSection, timeline, action }) => {
    let navigate = useNavigate();

    return (
        <div className={`relative ${timeline ? "container mx-auto" : "text-center container mx-auto"}`}>
            <div className="flex justify-center">
                {imageSection}
            </div>
            {/* <div className="">
                <div className="mb-2">
                    <span className="text-lg font-bold">{titleSection}</span>
                </div>
                <div className="mb-2">
                    <div className="text-md text-gray-600">{subtitleSection}</div>
                </div>
                <div className="mb-2">
                    <p className="animate__animated animate__fadeInDown animate__delay-1s">{paraSection}</p>
                </div>
                <div className="mb-2">
                    {iconSection}
                </div>
                {action && (
                    <div className="mt-4">
                        <ColorButton name="Read More" action={() => navigate(action)} />
                    </div>
                )}
            </div> */}
        </div>
    );
}

export default ImageTitlePara;
