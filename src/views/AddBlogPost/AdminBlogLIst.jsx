import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import CustomizedButtons from '../../components/ReuseableComponent/CustomButton';
import CustomizedTables from '../../components/ReuseableComponent/CustomizedTables';
import SearchField from '../../components/ReuseableComponent/SearchField';
// import { Pagination } from 'antd';

const AdminBlogList = () => {
const navigate = useNavigate()
const [blogposts, setBlogposts] = useState([]);
// const [pagination, setPagination] = useState({
// currentPage: 1,
// totalPages: 0,
// });

const fetchBlogposts = async (page = 1) => {
    try {
        const response = await fetch(`http://localhost:4000/api/blog/all-blog?page=${page}&limit=10`);
        const data = await response.json();
        setBlogposts(data.blogposts);
        // setPagination({
        //     currentPage: data.currentPage,
        //     totalPages: data.totalPages,
        // });
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    fetchBlogposts();
}, []);

const handlePageChange = (page) => {
    fetchBlogposts(page);
};

return ( 
    <div className='mx-lg-4'>
        <Grid container spacing={0}>
            <Grid container lg={12} className='my-3' direction="row" justifyContent="space-between" alignItems="center">
                <Grid item lg={6}>
                    <SearchField />
                </Grid>
                <Grid item lg={1.1} className='d-flex float-end text-capitalize'> 
                    <CustomizedButtons action={() => navigate('/add-post')} name='Create Post' className='float-end text-capitalize' />
                </Grid>
            </Grid>
            <Grid item lg={12} className='my-2'>
                {/* <Pagination
                    current={pagination.currentPage}
                    total={pagination.totalPages}
                    onChange={handlePageChange}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={20}
                /> */}
            </Grid>
            <Grid item lg={12}>
                <CustomizedTables list={blogposts} />
            </Grid>
            <Grid item lg={12} className='my-2'>
                {/* <Pagination
                    current={pagination.currentPage}
                    total={pagination.totalPages}
                    onChange={handlePageChange}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={20}
                /> */}
            </Grid>
        </Grid>
    </div>
 );
}

export default AdminBlogList;