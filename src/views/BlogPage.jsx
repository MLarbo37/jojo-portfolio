import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import '../App'
import Blogs from "../components/MyBlogs/Blogs";
import SectionTitle from "../components/ReuseableComponent/SectionTitle";

const BlogPage = () => {

    const blogLists = [
        {
            title: 'CREATE A WORDPRESS THEME FROM SCRATCH',
            description: 'Amalifair is a web based platform that allows businesses and individuals to host and attend live events and network. This platform has auditoriums for live conference sessions, exhibition halls and a chat section for networking.',
            img: 'http://slimhamdi.net/istanbul/demos/img/blog/blog-post-4.jpg',
            link: ''
        },
        {
            title: 'EFFECTIVE MARKETING STRATEGY TIPS',
            description: 'SafetyNet is an app that alerts family and friends of the user when in danger. The app sends GPS coordinates of the user to family and friends whose details have been saved in the app’s database. ',
            img: 'http://slimhamdi.net/istanbul/demos/img/blog/blog-post-3.jpg',
            link: ''
        },
        {
            title: 'FREE PSD AND SKETCH RESSOUCES',
            description: 'Sikafutru is a platform that gives funds to farmers to help cater for their farming expenses and tracks their spending. The app allows farmers to log their expenses and check how much funds have been spent and how much is left.',
            img: 'http://slimhamdi.net/istanbul/demos/img/blog/blog-post-1.jpg',
            link: ''
        },
        {
            title: 'FREE PSD AND SKETCH RESSOUCES',
            description: 'Sikafutru is a platform that gives funds to farmers to help cater for their farming expenses and tracks their spending. The app allows farmers to log their expenses and check how much funds have been spent and how much is left.',
            img: 'http://slimhamdi.net/istanbul/demos/img/blog/blog-post-2.jpg',
            link: ''
        }
    ]

    const [blogposts, setBlogposts] = useState([]);

    useEffect(() => {
      const fetchBlogposts = async () => {
        try {
        //   const response = await fetch("https://countryice-backend.onrender.com/api/blog");
          const response = await fetch("http://localhost:4000/api/blog");
          const data = await response.json();
          setBlogposts(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBlogposts();
    }, []);
  

    return ( 
        <div className="mx-lg-4">
            <Grid container spacing={0} >
                <Grid item xs={12} md={12} xl={12} className="d-flex justify-content-center align-items-center">
                    <SectionTitle firstWord='My' secondWord='Blog' title='Stories'/>
                </Grid>

                <Grid container item md={12} xl={12} className="" spacing={3}>
                    {blogposts && blogposts.map((blogList) => (<Grid item md={6} xl={6} className="pt-0">
                            { <Blogs blogList={blogList} />}
                    </Grid>))}
                </Grid>
                    
            </Grid>
        </div>
     );
}
 
export default BlogPage;