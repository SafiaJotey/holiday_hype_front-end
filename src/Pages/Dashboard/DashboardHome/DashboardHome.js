import React from 'react';
import { Grid } from '@mui/material';

import login from '../../../Images/dashboard.jpg';

const DashboardHome = () => {
    return (
        <div>
            <h2>welcome</h2>
            <Grid item xs={12} md={12} style={{textAlign:"center"}}>
                    <img style={{ width: '40%' }} src={login} alt="" />
                </Grid>
        </div>
    );
};

export default DashboardHome;