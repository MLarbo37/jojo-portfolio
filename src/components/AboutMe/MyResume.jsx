import { DoubleArrow } from '@mui/icons-material';
import * as React from 'react';
import SectionSubtitle from '../ReuseableComponent/SectionSubtitle';
import ColumnIconText from '../ReuseableComponent/ColumnIconText';
import { DarkThemeContext } from '../../views/WorkSpace';

const MyResume = ({ resumeInfo }) => {
    const isDarkTheme = React.useContext(DarkThemeContext);

    return (
        <div className='flex flex-wrap'>
            <div className="w-full flex justify-center items-center mb-4">
                <SectionSubtitle firstWord={resumeInfo.title} />
            </div>
            {resumeInfo.info && resumeInfo.info.map((data, index) => (
                <div className="w-full my-3" key={index}>
                    <div className={`min-h-32 p-4 rounded-xl ${isDarkTheme ? 'shadow-lg bg-gray-800' : 'hover:shadow-2xl'} border border-gray-300`}>
                        <ColumnIconText
                            isDarkTheme={isDarkTheme}
                            iconClass={'text-primary dark:text-gray-100'}
                            titleClass={'text-lg font-semibold text-primary dark:text-gray-100'}
                            subtitleClass={'text-md text-primary-dark dark:text-gray-100'}
                            icon={<DoubleArrow />}
                            title={data.programme}
                            subtitle={data.institution}
                            para={data.description}
                            iconSize={0.5}
                            textSide={11.5}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyResume;
