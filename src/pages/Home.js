import '../App.css';
import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



const Home = (props) => {
   
    return (
        <div >
           
            {/* Slider...................... */}

            <div>
                <img src="https://images.unsplash.com/photo-1557828000-6e36a7baf9df?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" width={1350} height={500} />

            </div>


            {/* card................................................................ */}


            <div>
                <div className='flex'>
                    <span id='hk' >Featured Products</span>
                    <span id='hk1'><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="" /></span>
                    <span id='hk2' >Buy Perfume Online from Our Fine Collection
                        <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Get Discounts for Every Season..</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem', paddingTop: '50px', paddingLeft: '5px' }}>

                    <div className='flec'>
                        <Card sx={{ maxWidth: 380, maxHeight: 420 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    display="block"
                                    image='https://hips.hearstapps.com/hmg-prod/images/coco-mademoiselle-perfume-chanel-1675113242.png'
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Coco Chanel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Chanel are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                        <Card sx={{ maxWidth: 380, maxHeight: 420 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    display="block"
                                    image="https://delixirs.in/cdn/shop/products/ambercg.jpg?v=1682053561"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Amber
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Amber are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>



                        <Card sx={{ maxWidth: 380, maxHeight: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    display="block"
                                    image="https://beardo.in/cdn/shop/products/OriginPerfumeForMen100ml2160x216007.jpg?v=1708931788&width=1946"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Orgin
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Orgin are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>




                        <Card sx={{ maxWidth: 380, maxHeight: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    display="block"
                                    image="https://discoverpilgrim.com/cdn/shop/files/WebsiteListingImages_GREEKGOD.jpg?v=1685958038"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Greek God
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Greek God are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>




                        <Card sx={{ maxWidth: 380, maxHeight: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    display="block"
                                    image="https://secrettemptation.in/cdn/shop/files/BLISS_COLOR_IMAGE_grande.jpg?v=1685080394"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Blis
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Blis are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>





                        <Card sx={{ maxWidth: 380, maxHeight: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    display="block"
                                    image="https://www.bigbasket.com/media/uploads/p/m/40213312-3_2-villain-combo-perfume-eau-de-parfum-for-men.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Villain
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Villain are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* Repeat the above Card component for additional cards if needed */}

                    </div>
                </div>
            </div>



            {/* activity.................................................... */}


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
                    <div className='w-570 ' ><img src='https://perfumesquare.in/wp-content/uploads/2021/05/about1.jpg' alt=''></img></div>
                </div>
            </div>


            {/* offer................................................................ */}

            <div className='pi'>
                <div className='container'>
                    <div className='flex'>
                        <span id='hk' >Flash Sale Offers</span>
                        <span id='hk1'><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png" alt="" /></span>
                        <span id='hk2' >(OFFER VALID ONLY FOR THE UNBOXED & DAMAGED BOX CATEGORY)</span><br></br><br></br><br></br>
                    </div>
                    <div className='fx'>
                        <div className='w-380'>
                            <pre>EXTRA 5% DISCOUNT ON PURCHASE<br></br>ABOVE 5999<br></br><br></br>
                            </pre>
                            <p>
                                COUPON CODE- “FLASH5”

                            </p>

                        </div>
                        <div className='w-380'>
                            <pre>EXTRA 10% DISCOUNT ON PURCHASE<br></br>ABOVE 10999<br></br><br></br>
                            </pre>
                            <p>
                                COUPON CODE- “FLASH10”

                            </p>

                        </div>
                        <div className='w-380'>
                            <pre>EXTRA 15% DISCOUNT ON PURCHASE<br></br>ABOVE 15999<br></br><br></br>
                            </pre>
                            <p>
                                COUPON CODE- “FLASH15”

                            </p>

                        </div>
                    </div>
                </div>
            </div>


            {/* categories...................................................... */}

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
            </div>


        </div>




    );
};





export default Home