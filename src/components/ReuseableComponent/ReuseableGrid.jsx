import Fade from 'react-reveal/Fade';
import SectionTitle from "./SectionTitle";

const ReuseableGrid = ({ section1, s1lg, s2lg, section2, firstWord, secondWord, title, contain }) => {
    return (
        
        <div className="container mx-auto px-4">
            <Fade cascade left duration={2000}>
            <div className="flex justify-center items-center mb-6">
                <SectionTitle firstWord={firstWord} secondWord={secondWord} title={title} />
            </div>
            <div className="flex grid md:grid-cols-2 gap-8">
                <div className={`w-full lg:w-${s1lg}/12 ${contain}`}>
                    {section1}
                </div>
                <div className={`w-full lg:w-${s2lg}/12 ${contain}`}>
                    {section2}
                </div>
            </div>
            </Fade>
        </div>
       
    );
}

export default ReuseableGrid;
