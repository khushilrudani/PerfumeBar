import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const About = () => {
    return (
        <div>
            <div className='flex'>
                <span id='hk' >Our Categories</span>
                <span id='hk1'><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="" /></span>
                <span id='hk2' >Buy Perfume Online from Our Fine Collection
                    <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Get Discounts for Every Season..</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem', paddingTop: '50px', paddingLeft: '5px' }}>

                <div className='flec'>
                    <Card  sx={{ height: 300, width: 300 }} className='w-blue'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                display="block"
                                image='https://fragranceheaven.in/cdn/shop/files/59_0983591a-ddd2-4eea-b520-0bee05c99213_360x.png?v=1688395467'
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>


                    <Card  sx={{ height: 300, width: 300 }}className='w-blue'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                display="block"
                                image='https://fragranceheaven.in/cdn/shop/files/61_0b5bcf77-76a2-412d-873d-2b050bda3cde_360x.png?v=1688395732'
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>



                    <Card  sx={{ height: 300, width: 300 }}className='w-blue'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                display="block"
                                image='https://fragranceheaven.in/cdn/shop/files/57_360x.png?v=1688395189'
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>


                    <Card  sx={{ height: 300, width: 300 }}className='w-blue'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                display="block"
                                image='https://fragranceheaven.in/cdn/shop/files/60_b166045f-015c-479a-991d-82cc0b50ac15_360x.png?v=1688395570'
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>



                    {/* <Card  sx={{ height: 300, width: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                display="block"
                                image='https://fragranceheaven.in/cdn/shop/files/56_67c6697d-0428-4f14-bb30-56c813770658_360x.png?v=1688395041'
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card>



                    <Card  sx={{ height: 300, width: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                display="block"
                                image='https://fragranceheaven.in/cdn/shop/files/59_0983591a-ddd2-4eea-b520-0bee05c99213_360x.png?v=1688395467'
                                alt="green iguana"
                            />
                        </CardActionArea>
                    </Card> */}

                    
                    {/* Repeat the above Card component for additional cards if needed */}

                </div>
            </div>
        </div>

    )
}

export default About