import React from 'react'
import { Grid, Typography } from '@mui/material'

import './Form.css'
import upload from '../../assets/upload.jpg'
import UploadImg from '../UploadImg';

const Form = () => {
    return (
        <div className='layer1'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className='heading'>
                        <Typography variant="h3">Please Drop Image Here</Typography>
                    </div>
                    <div className='upload'>
                        <img src={upload} alt="" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <UploadImg />
                </Grid>
            </Grid>
        </div>
    )
}

export default Form