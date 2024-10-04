import { Grid } from "@mui/material";
import ImageSection from "../ReuseableComponent/ImageSection";
import TextSection from "../ReuseableComponent/TextSection";

const Porfolio = ({ portfolioLists }) => {
    const isEvent = (index) => {
        return index%2 ===0
    }
    return (<div className=" mb-5">
        {portfolioLists && portfolioLists.map((portfolio, index) => (
            <Grid key={index} container className="mb-5 pb-5" columnSpacing={0} spacing={0} direction={isEvent(index) ? "row" : "row-reverse"}>
                <Grid md={6} className='animate__animated animate__fadeInUp animate__delay-1s'>
                    {<ImageSection img={portfolio.img} width={'100%'} />}
                </Grid>
                <Grid md={6}>
                    <div className="container animate__animated animate__fadeInDown animate__delay-1s">
                        {<TextSection title={portfolio.title} description={portfolio.description} action={portfolio.link } />}
                    </div>
                    
                </Grid>
            </Grid>
        ))
        }
    </div> );
}
 
export default Porfolio;