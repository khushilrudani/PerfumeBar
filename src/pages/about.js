import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import '../App.css';



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
                    <Card sx={{ height: 300, width: 300 }} className='w-blue'>
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


                    <Card sx={{ height: 300, width: 300 }} className='w-blue'>
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



                    <Card sx={{ height: 300, width: 300 }} className='w-blue'>
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


                    <Card sx={{ height: 300, width: 300 }} className='w-blue'>
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

                </div>
            </div>

            <div className='w-1140'>
                <div className='round'>
                    <div className='w-570' >
                        <p>Online Perfume Store in India: Choose from Your Favourite Perfumes & Cologne Collection</p>
                        <pre className='text'>If you are looking for an online perfume store in India that offers unlimited discounts<br />
                            on branded cologne and fragrances, then Perfume Square is the best choice for you! <br />
                            We have a stock of more than a thousand men’s and women’s perfume to deliver you<br />
                            at your doorsteps. Now, you may have doubts about making the first purchase from <br />
                            an online perfume shop.<br /><br /></pre>
                        <pre className='text'>
                            But our online perfume store has colognes that include celebrity fragrances, <br />
                            best-sellers, and specially fragrance samples for you to try. Explore and find <br />
                            original perfume online with us, and buy the next bottle upto 70% discount!<br /><br /><br />
                        </pre>

                        <button>Shop Now!!!</button>
                    </div>
                    <div className='w-570' ><img src='https://media.istockphoto.com/id/1143220850/photo/man-spaying-perfume-on-dark-background.jpg?s=612x612&w=0&k=20&c=perRo8LqQSN7So9DmvJHYoCq5LPgv-Zslcp0iTmuXvY=' alt=''></img></div>
                </div>
            </div>


            <div className='w-1140'>
                <div className='round'>
                <div className='w-570' ><img id='photo' src='https://media.istockphoto.com/id/1316117134/photo/beautiful-masculine-bearded-young-man-holding-a-bottle-of-fragrance.jpg?s=612x612&w=0&k=20&c=ju8M6LVJOccDx486UNSuSTc7qtEzzZpgI4dEfYDsai4=' alt=''></img></div>
                    <div className='w-570' >
                        <p>Online Perfume Store in India: Choose from Your Favourite Perfumes & Cologne Collection</p>
                        <pre className='text'>If you are looking for an online perfume store in India that offers unlimited discounts<br />
                            on branded cologne and fragrances, then Perfume Square is the best choice for you! <br />
                            We have a stock of more than a thousand men’s and women’s perfume to deliver you<br />
                            at your doorsteps. Now, you may have doubts about making the first purchase from <br />
                            an online perfume shop.<br /><br /></pre>
                        <pre className='text'>
                            But our online perfume store has colognes that include celebrity fragrances, <br />
                            best-sellers, and specially fragrance samples for you to try. Explore and find <br />
                            original perfume online with us, and buy the next bottle upto 70% discount!<br /><br /><br />
                        </pre>

                        <button>Shop Now!!!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;