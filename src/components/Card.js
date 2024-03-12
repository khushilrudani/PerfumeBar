import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Gallary() {
  return (
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
  );
}
