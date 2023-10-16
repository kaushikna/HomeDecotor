import React from 'react'
import { ProcessStyle } from './ProcessStyle'
import {Paper,Box,Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import maskGroup26 from '../../images/Mask Group 26.png'
import maskGroup60 from '../../images/Mask Group 60.png'
import maskGroup63 from '../../images/Mask Group 63.png'
import maskGroup62 from '../../images/Mask Group 62.png'
import maskGroup64 from '../../images/Mask Group 64.png'

const Item = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));


function Process() {
    return (
        <ProcessStyle>
            <Box className='main-process'>
                <Box className="inner-process">
                    <h2>
                        Why You should get HomeLane Pronto Wraps
                    </h2>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 1 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>01</h4>
                                    <Box className="process-1-txt">
                                        <h3>Cost-efficient designing process</h3>
                                        <p>For a house designed just 5 years back, replacing the entire furniture was always very expensive. With Wraps, now I can change just the look of the shutters, counters without spending a lot. it is almost 50-70% cheaper than replacing the entire furniture.</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 2 }}>
                                <Item className='process-1-img' >
                                    <img src={maskGroup26} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 2 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>02</h4>
                                    <Box className="process-1-txt">
                                        <h3>End to end finishing</h3>
                                        <p>We provide hardware upgrades along with wraps for select furnitures. Fittings like hinges, shutter alignment etc is covered as part of our services.</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 1 }}>
                                <Item className='process-1-img' style={{ justifyContent: "flex-start" }}>
                                    <img src={maskGroup60} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 1 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>03</h4>
                                    <Box className="process-1-txt">
                                        <h3>Easy installation</h3>
                                        <p>I got it done while I was living in my house. It was not a noisy installation and we all could carry on with our work as usual. I didnt have to leave the house to get these done.</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 2 }}>
                                <Item className='process-1-img'>
                                    <img src={maskGroup63} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 2 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>04</h4>
                                    <Box className="process-1-txt">
                                        <h3>Smooth process</h3>
                                        <p>It is a quick process. there were no hassels of long going carpentry work. It took just 2 days to get my kitchen done. and there was no mess of dust or dirt and thus I didnt have to do any deep cleaning etc.</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 1 }}>
                                <Item className='process-1-img' style={{ justifyContent: "flex-start" }}>
                                    <img src={maskGroup62} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 1 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>05</h4>
                                    <Box className="process-1-txt">
                                        <h3>Tested for quality</h3>
                                        <p>The change will still not change the basic features of the furniture as this is also water resistant, termite resistant and scratch resistant. It is also so easy to clean. It can be maintained without any special care.</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 2 }}>
                                <Item className='process-1-img'>
                                    <img src={maskGroup26} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 2 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>06</h4>
                                    <Box className="process-1-txt">
                                        <h3>1 year warranty</h3>
                                        <p>Also it comes with 1 years warranty. it just made the life of my furniture much longer!</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 1 }}>
                                <Item className='process-1-img' style={{ justifyContent: "flex-start" }}>
                                    <img src={maskGroup64} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="inner-process-sec">
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6} order={{ xs: 2, md: 1 }} className="main-process-1">
                                <Item className='process-1'>
                                    <h4>07</h4>
                                    <Box className="process-1-txt">
                                        <h3>Extensive design palette</h3>
                                        <p>Ugrading the looks and aesthetis is very easy as a lot of color and finish options are available</p>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item sm={12} md={6} order={{ xs: 1, md: 2 }}>
                                <Item className='process-1-img'>
                                    <img src={maskGroup60} alt="" />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </ProcessStyle>
    )
}

export default Process