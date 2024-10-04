
import {Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ColorButton from "./ColorButton";
import Headings from "./Heading";
import ParagraphDescription from "./ParagraphDescription";
import SectionSubtitle from "./SectionSubtitle";

const TextSection = ({ title, description, action }) => {

    let navigate = useNavigate()
    const truncateStatement = (statement) => {
        if (statement.length <= 200) {
          return statement;
        } else {
          return statement.substring(0, 200) + "...";
        }
      };

    return (<div className=" my-0">
        <Grid container spacing={0} >
            <Grid item md={12} xl={12}>
                {/* <SectionSubtitle firstWord={'d'} secondWord ={'a'}/> */}
                <Headings title={title}/>
            </Grid>
            
            <Grid item md={12} xl={12}>
                <ParagraphDescription description={description}/>
            </Grid>
            
            {action && <Grid item md={12} xl={12}>
                <ColorButton name='Read More' action={() =>navigate(action) } />
           </Grid>}
        </Grid>
    </div> );
}
 
export default TextSection;