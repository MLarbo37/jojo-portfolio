import { Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";

const ReuseableGridMap = ({ItemLists}) => {
    return ( 
        <div>
            <Grid container spacing={0} >
                <Grid item md={12} className=' '>
                    <div className="row mx-4 justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <SectionTitle firstWord='My' secondWord='Services'/>
                        </div>
                        {ItemLists && ItemLists.map((ItemList) =>
                      <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                      {/* < MyServices service={ItemList} /> */}
                      </div>
                        ) }   
                      </div>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default ReuseableGridMap;