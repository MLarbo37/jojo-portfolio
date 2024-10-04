import * as React from 'react';
import SectionSubtitle from "../ReuseableComponent/SectionSubtitle";
import ColorButton from "../ReuseableComponent/ColorButton";
import { DarkThemeContext } from '../../views/WorkSpace';

const PersonalInformation = ({ personalInformation }) => {
  const isDarkTheme = React.useContext(DarkThemeContext);

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1AzhjpbE_JUJAtGZF-mk4TIEuGFiGzx2_/view?usp=drive_link', '_blank');
  };

  return (
    <div className="container mx-auto justify-center md:text-left">
      <div className={`py-6 ${isDarkTheme ? 'bg-gray-800 text-white' : 'text-gray-800'} rounded-lg`}>
        <div className="text-2xl font-semibold mb-4">
          Who Am <span className="text-primary dark:text-gray-100">I?</span>
        </div>
        <p>{personalInformation.description}</p>
      </div>

      <div className="my-6">
        <SectionSubtitle firstWord='Personal' secondWord='Information' />
      </div>

      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <ul className="list-none">
            <li className="mb-2">
              <p>First Name: <span className="font-semibold">{personalInformation.firstName}</span></p>
            </li>
            <li className="mb-2">
              <p>Last Name: <span className="font-semibold">{personalInformation.lastName}</span></p>
            </li>
            <li className="mb-2">
              <p>From: <span className="font-semibold">{personalInformation.from}</span></p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <ul className="list-none">
            <li className="mb-2">
              <p>E-Mail: <span className="font-semibold">{personalInformation.email}</span></p>
            </li>
            <li className="mb-2">
              <p>Phone: <span className="font-semibold">{personalInformation.phone}</span></p>
            </li>
            <li className="mb-2">
              <p>Language: <span className="font-semibold">{personalInformation.language}</span></p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <ColorButton name='Download CV' action={handleDownloadCV} />
      </div>
    </div>
  );
};

export default PersonalInformation;
