import IconButton from '@mui/material/IconButton';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';



import Container from "@mui/material/Container";

import Link from "@mui/material/Link";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';




import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'



import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import { CardActionArea } from '@mui/material';


import { useContext } from 'react';
import { Context } from '../App';

export default function CustomizedInputBase() {
  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);
  const [count2, setCount2] = React.useState(1);
  const [count3, setCount3] = React.useState(1);
  const [count4, setCount4] = React.useState(1);
  const [count5, setCount5] = React.useState(1);
  const hello=useContext(Context);
  return (
<div class="all">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="success">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            
          </IconButton>

          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ECOGROVE {hello} 
          </Typography>
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <ul className='grid' style={{listStyle:"none"}}>
        <li><Button color="inherit" component={RouterLink} to="/h">Home</Button></li>
        <li><Button color="inherit" component={RouterLink} to="/pro">About Us</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/ab">Premium</Button></li>
        <li><Button color="inherit"component={RouterLink} to="/con">Contact</Button></li>
    </ul>
  
            <br></br>


      <div class="overall">
      <div class="o1">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://m.media-amazon.com/images/I/611a1wD9ZGL.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Pomegranate
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1KG<br></br>
            Rs.100.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      <div class="o2">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdM0qlrbosdfqf_MlDn4HPGjYWycjUeOg7w&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Banana
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1KG<br></br>
            Rs.100.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count1}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount1(Math.max(count1 - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount1(count1 + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      <div class="o3">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Guava
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1KG<br></br>
            Rs.100.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count2}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount2(Math.max(count2 - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount2(count2 + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   </div>
   <br></br>
    <div class="overall1">
      <div class="o1">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25hylr2MkjOHbQDTDKPK5BDjMKJqZ3Jb5_Q&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Papaya
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1KG<br></br>
            Rs.100.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count3}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount3(Math.max(count3 - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount3(count3 + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      <div class="o2">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZo0XV1AWKyv96rUNVnhqQjq83cqktTrxOpQ&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Grapes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1KG<br></br>
            Rs.100.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count4}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount4(Math.max(count4 - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount4(count4 + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      <div class="o3">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgM-voIMpHFdwjpJ9uJ5nPuIFph35LPixklg&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Watermelon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1KG<br></br>
            Rs.100.00
          </Typography>
          <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="success" badgeContent={count5}>
        <ShoppingCartIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount5(Math.max(count5 - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount5(count5 + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   </div>      
<br></br>
            
   <div class="bo">
   <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
   
      <Container maxWidth="lg" color="success">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are EcoGrove company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Email: EcoGrove@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    
   </div>
   
      </div>
  );
}