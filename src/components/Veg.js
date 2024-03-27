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
import { CardActionArea } from '@mui/material';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'



import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



export default function CustomizedInputBase() {
  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);
  const [count2, setCount2] = React.useState(1);
  const [count3, setCount3] = React.useState(1);
  const [count4, setCount4] = React.useState(1);
  const [count5, setCount5] = React.useState(1);
  
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
           ECOGROVE
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


    <div class="overall">
      <div class="o1">
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
            Tomato
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsmNG31D3zc0PY6pEZQt-DdIQLohjhl5WwA&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Carrot
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhFJh_QaVgSAP-6zaoTggzbMbOIc1SG2vVg&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Potato
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQd3TU_VV-7FWDtSxDdTogrVqoR0I_Syblw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ladies Finger
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjKqJC_rG8Jo7kEPtrg-b75kbDBWz3LN4pg&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Onion
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
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Beans
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
              We are Ecogrove company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              Email: Ecogrove@example.com
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