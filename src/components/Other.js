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


import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


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
        <li><Button color="inherit"component={RouterLink} to="/pro">About Us</Button></li>
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
            Ghee
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
      <div class="o2">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HX6fCP0-xHaXQFJzn0o4uUu7fnRQz6nFKw&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Honey
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
      <div class="o3">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTa4GZV6IZzBJeG1yTPU37CO0yrjXYFhQpavtm5oCb1zUuOWYVrV6NmGY6Dwrzq8v0LxM&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cashew
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
   </div>
   <br></br>
    <div class="overall1">
      <div class="o1">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGRgaHB4eGhwcHCUkHh8eIR4hIR4eHx4cIS4lJR4rIR4hJzgoKy8xNTU1HiU7QDs0Py40NTEBDAwMEA8QHxISHzQsJSs0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAADBAUCAAEG/8QAPBAAAgEBBgMGBQMEAQQCAwAAAQIRAAMEEiExQVFhcQUigZGhsTLB0eHwE0JSFGJy8YIGFSOSorIWM8L/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAD/8QAJREAAwADAAMBAAIBBQAAAAAAAAERAiExEkFRYSJxMgNSgZGh/9oADAMBAAIRAxEAPwD6e0Iyo90u4IViJE59AaUtrraBC5UCCDAMnDOvlRrGzclVRzhfYRGepmJ8jxre+B6LGOyEZz/x+tK3q0JWUsnfoqj/AOzU1/2zEAS2GNgJnby3o1kkd1mPI/I1Ub6QmkTbC7KG76k9dJ+lPs4AzCgdBXW10tBLAhxtGo8zr08qk2tkxORxHgxg9J09qzfjwUvIctLwuy4ugEeZpG8I7ZKUTiYxNHkBS2JwYK4f8j7RVO5WSn4jJ5D61Kfl0r/ETu9mbMjVwTmAuY56kR1iri/puMoB4x7gUZLsuGJKjPMnj1NQXsmmcef9n1OdZ/xD/Iu3RMIwuLM8CBt0O/jS15slSRkVJkZaTt70CyvDIBjEjiNfEaUO8X5HVsB5AHY6z04UeWI+LHbQqCvdGZO3KlWeHyAwkcBkR9QfTnQr1bd0NwYHwg0ylgrpIPeB8CI+lPlWEgp/Uw8JgaILrvB4GIneqtneLM/tA8PcVMtez1BxoIJ+KBnzPOsWhOjeDCj+SLiaKd5uqONAJ3Gh8Kg3m4FDlp6ef1rnvDowAPxGBwk8Rsaea1GQfuscpGYJ96LemjQLsawR3ZXVT3DIIzzIz48c6MlxRXaNuJJidNaqCyRXxgd4pgPQGR8/Oo95tm/VYKYGU5AzyHDXM/gpqIFWxm1RF/u6jLy3/Mqm3pnJUKozIBJ1A4gcaqWCYj3jhnlJ8q9OBMTzP8Z1AjM9ZqpSfYC83UhQAQGJzy0G/jHvSv6ffRAP3CegMn6Uut8tLS0wrEE5f2j2k1QuFlLu2pQASeJ+woqfB8Z0J2iglRHMZcKKjqFRoGueXGl7vdVfG8nEWOc5DgANhEaUjbW7KzJHPpxHpPjS3NhLoZ7cADo4IAIIMZRwNO9nWQNmJhjnnrOtSbRi4YE92AOhkn6eVPdkXoCzAnNTHmZ+dSmnlRkxgj+nzFdTeHpXlXSTu0rx3cC7gYj4afWmuz7mgwOrAwdRowIIyjmZoJuKsBqO768c6YuFmEREmcIw+W9bd2HrQ72palEJBIyOnPL3NfNILQwWdp1zMnxn519Df8LiMyN4IH1qZa2C6DFnzoarpWOkAHazIZxeO1PLf0tVlomMiMjU2y7FVnBcsdyJyjhTPbF1wpJOeIYSNtf9RQm1WzNK6BW1oQ0CWWYy+hyot3umJjJYKNgTmTtrpvS/ZNiS/fJORKjnv4xVmyusk5mNCAdTz5VMuxbmhK3TCMgABsPrRLndWwF23+EcB9/pXjsHfAuag94jQAbDntyp6835FADMFP7V3I5AVklazNviJXaTswKxA4bnqfl+DrK7Iiqjfu+LxrKvL4zkq7cTtWrEhyzt0FSkrottwot2ajKEJYLxBEgjQnLT6ihLYPYMgyZNGY6jgek+9BuHaPeKHbQ9MiKq/wBQDkdDtVae0TtaYK07pkaHWlrZQM8sJyM6Z1trM4WUHaVM8Bl4g/LnU+xtLRlg97H8K4RI6R86fIyR1pZILWzUENib4ZkqRmDI2kaGi39RjswY+ORzK50a69hmzdbRyC0HIaLloPPWsdpWUsjbiY8QR8qI4ytXRq1vGfgfl9KnG0UOzHX2rg7FyFjQDPxM+ZNSiz48JEviiP7p+tDyYpFcXzECVyXSePHwrrKxNowU76DgONVLSz/SssK5kjD1Jy8pz6Ct9l3bDic7DCOpzPyq0o9kN/BC5XVEtsAPxHIbwFkzG2ufSq9rZIiuRCgmY5xl4172fYriLn4jMchUntJwbxJaAOJMTG+28TWbhPQqHA6r/IE+Ij5Gl+1brjOLkfMR8vatdpN/5EIPwAHLmYNFtbb4VicRAHzPgKatpmm6a7GuX6dlLnExliTw2FKdophsjggEYcPWRTPbF9VECyAWyA6Zn5DxpW+2wCZ8R7+1ZSNfDbexL+ub+B866vIHEV1cqV/wW7FiVHSan362ezJaJGo58utO2al1OHUIABxyoNjj/TX9RYaATI14HroetdstojFQSv5LugQmczlrnGpB2GtUrpdcA1LOdSST4AUpccndnKqAYXiRx5zwFUHvYSW8uX3rmmulP4FdAi5ZsT6b1q1VXWCcjp+RStgjs6s57rr3eW9UbdAw5j5VaybTBoVXs2JZXgxly8RXrWhIwFcIAAEHUb5ih3kvkVzz3+1BW2dWh7J3Xion3y9RXNtCkEs7NE+HIARFZ/pUc4475EEyco2E5RVJLayiShHJk+k0pb3qxzwgqeRgeI3qqjbJt57PcKQjKxknvZf79KZvFmLNYkSBAjduQ65+FKX2+qoJk+AOfDMCK1c0YgO4hj8IJkgcevyqVLEVv2L2RCBySBAEknQf79q1dL9jETDaq2xjr+GhX26/qvpiwiIHuTwG3jxqh2f2Pg71oJAGS8v7jRMroqpLYxdrwLRCQcJ0PI8Ryp7s+xWxsy7nvAZngOAqV2iyxOSgaCNqza342kFwFXUJ8z9PetZ0JeG7ftJy4bDqpCrwB0JHHSaP2cuNbMsxOIkyf8T96Ru7kWoOsqT0OkeRB8aPcrb/AMqIDkrHLhkcvWnFx7NktDPaViqOCo0EnpvkOY9aB/SYrVLTLDni5mO54RP/AKih/wDUV+aztbPCAxYEQRrEacMjRP8Ap61Z1OIwgY5Eab4QeFN3AScpbSyEh22+EcJ361PvNsFXCOPqc/b2rPaF7Z2wJoBnyH1Pt4VIe9YrYByIBPQE5Z00IXEfDkDoKhkvaWjKomTlwjryA1pq9Xgo4AOZGfjn5jKt2MIsfuIz6bCl70Za2KpdQr6ySIPVeHhPlRbjZtjzjCs4TvntUrtm0L2lkEOFkbEM8p0g8Qc5HOm7vfyp7x7zAjKYk7THKfnUVWFRwJ2tY42mcxkAeOvn9KWtrdWESJkSDt+Gm7yMAUtuR60xYFFbGVGIgd6Ov54VcIpH/R/tHnXVR/qV4nyrqNGrO7Lv5LmBCREk5kj0iPcUze7zOXlSVtcnsUxlSREgrnrmJjTqaw741VlzmPWqT1AitOu7qTOr7ZTA+9HtrqTmwz2HDrzp+4XVUSQJZjrz0k88qJbWJeVH/KPYH50eOjeWzkhrujKfhy8iR8qy96z1+IetFu9jgQpAA2Ar5682v/kdJIZSPUSCPOoyfjsrFUspeJBHAzRu0bU4A6wRkYz3r56xvUww31otrfnRWQJiDqYzjC3E8RvGuRo8lB8WFNuTrhUc2P0oi3dW1bLjGXrUpEcCXbPgoAjxifWspYu5JIZo0mY8zlUrL8KhRu91XGxx40U5bAnWMtY4/WjWtqWbAvxHU/xH1NZFm+BVskxPGcmFB3zgz9KZudzay7xfv6mMySdZq8f6BscsroVWFVjHLU+O9Za4XhxLkTssjCvlqeZmg3r/AKhezAlFJJ4xlxzmlf8A8ktWUsFUAafmVZ5J6MsX0HeOxrfECxSAZjETPM92h3qzOFssJkhs504cuftXXy/W7qBjwlgZCiCMuOZ32ihtZCzuyIDmUkScyWzPMxijwqYilfYbsxwXHMD1/wBUaztFS2PM/wD81FuN4wugP8Y8oHzp28qzWoUZEx3uEZnLjtrVYvQPHYftZDaWtkR+0MT0j56eNEs+0HMWaqs6AwfM5xxOlHul3wlgczGtTDavZ2zBFDF5VZnU5nTl6TWyXv6C+FFHwJgWSx+Jjqx3NKrclwszZlgT8vlTF6ZkSCcT79TtA2+lHtbIkBBMwF+vpNUwQhYDMu0wPEnYVh7YmdzPejQH+I5DTmZp1rMo2BRqC2LcRA+fpSVld1R3AjUZQcsthzqIygNl2cHfGyEts0kdN6pv2ZEMoOKRlIjnR7J2GxjnlRhejsB4yfYiumKxmyG2B7XuyuoRpGY05UG73cKMJY5DInPzgVm82pxA4sQLLoBqTECOVEvchh+cftS2nsJNCn6R/kldWMPSuo0aB7p2y6ZN3l6ZgcOf5rTVvZo8PZ5GZI2PHxz1qbYXQRxbeN6w6OhlFYdAYrKroNIt3c4BLnDyLd0fU0wl5DCV02yjymvkRaF3x2oChYicgarC9FhCtA6Z+GeXrSsqZ4j1teyHCohdv3KPmanN2TalTIUFpJxHc66TJrb3gpGBxz3+Vd/3S0OUr/6ifnUNJ9KVXBROxynxOpG6hTmOEzkPCqth2doWWP4qOWk/SjXZmUYnMsdBAhfLU1L7VvDNGe+nHrRFijV5MqvYoDLgTxIHoo+VeLeBOSFgOYHjH1pKzQnUYeR+1e29zcrFm5VjOcd3TKfzwreXxGn0t/rWYzZh0+wFK2/aNlopX/1P0pIJhUB2DFR33iATvA2mouJy4OEBZGsyc+uQrPJoccUyjfHQtBCljthzPjpS9uFACjQfLP3p++3YYkI3EH6+9LXi6YmULlIOZ0yE1LTpSFFtMbH+2PWh21mFGI6BoPIH7mi3KwKlgdd/AkH3r29kEuhRiWRSp2ktDAnoPWtNbG70Au9ijWmKMSrw0JMZTw0npVWwdMeEEYhmQNpA+opXs26FEAbMkx4+H5rTTIqGQBiY5nc8p4DIVeOkD2em8f8AmInLD66+1bS1SzdnbNiO6Brpr6UjjJdiNftSzW4te8uIBcSkHLOdOcZ+dDyZoPC1DlXbJcQieEjXqcvKqt2eGLHb/X1r5m+K1oEQQqj4t5j5Ttxz2qpde0RhOLNyZgdNOmp8ahf6m4U8dUfu3etH5Io8yT9Km3lHY2jIBKmM5ggATpBmZ8qPd3AZ2ZgsxOfoOPSleyr/AP8AkdTObEgHgatNNxktTaJn69o+RMHlx/PenrtZh0GISRkZOc+Pn40PtJAlpIHdbPnH2PpRrAweo8+HvQlHGZ7Wgd1ssDlmYyrgqP24IjSNcyZ5cjVa3zEjakHaa9sbY6bj8/PCqUWiXvYLEeHpXV74V1IDtt2rgVQCdBlFI2t8tX2aOcD3Nbe9WaQMSBoGQ7znwGdL2lvOxPWq8r7JS/BC93W2tHRVIUTLEwfQGnr3Y4bJhOgGc5kyPXWmbBIHPcgenOsi7u7jH3Enup+7mTGhNR4/+lU32bdVezDx3lziSPaipboGyALbAEfk07eL0iNic4VPdyGQyMZDPbao93sVNo7pmGYkHSFOe+lU9aQdKOInXX0HL6mg21sln3m+Lbj0UfOlrzesIyI5tsPOpt3x2rHCpK7u2QnLc/7rm27C1ifRXRy3fPdHD81pi8X9UXPurpzJ4ADU1Je8OgAxAgCB3RH1NS7e9NjDs2YIjlnoOFLy8dGWNPoL28DvZAbH3NQL9fC5gMVHEDPw4e9O2d4S1gscfI5EeFMv2bYMNHXoT7HKjJPLg4zHo4z4kR+U+n3rIfNfGtWAGBlmYmD4VOs7c4l/yjzy94qrDdDC0VbQqTEjU6Z89sxQe0nIKFAGyM57TXnarhDiO4jISTnkANznpRrvcJy/cBJ68PDjvUuupDpbM9mWzuC7MCBkoGk76bxHnQrS84nPBRA+Z8/Sm1s1s0CLlEmObZn39qnXi742gGO6M/E5fnKs6kOqMdiWodnB4yOh+ketYva4JRRmWJXhLHXzJo/Z/ZbowMggyDB46a9BT3aF1jCxHwzJ9p8a0fjsKqI2NhE8lAFBZAHXgIn1J9DTdk+Rnc01YhXVlOkn/f5wrmlWU3EA7Ru5w92Jyj2+dS7zaOmEPBw6NGfPPWOVXnPdz/iKQ7QuitEthzyPGetdssfa6Qn6YRgtogmDGY+xoS9nOBKEld13HyPvTNz7GYAAOY4MB7gTWrC629hqQ6DcfEPqORrNXbQLXGT2u7KJ1A14jrS9g8lWXSftX01leUfPKdyNfGh213slzwqqxJIyFbx+MG50lYenlXV7+vZfzHr9K6mBQidjg99FUFhmeJ8dq8sOybQvDCFjUZ55ZTtlNG7NvTxBRjwIAHnMVULMRofGPkavxT4c3k0J2l2CCFCrzJE+tI3fH+ophcIkkzLaHbQZxuaethtI86QYsjnEUwlcsM4syNQaWoKYHtW82Uj9V4AMgGcz4dfWlmvYiFB5CMIH/HXzpK9OWtwygthEZbE756H70e7sA2c6ZACST/quTdZ1SiDC6g95zJ1jYUWyvZClUAwjVuE7DnS5VnOED/j9Tuab7JsVALmSZPd2BHEcfaqWO9Gb0e2VxLd+0JE6D9x+gpW93ZnOCzTENGzAUcs9W6aeIpy83tnbAgLMdx8vrW7G5tYjEz5/x/b40tJ6Rk2tsDdri6qAQB0PvTBsmFIXu+27MMBUJ+4kZnoKVtb3afz8gPkK51IY2NXy0CRiMTpzjpWLAh0JRpZWyJ4jQGdpBzpe4KMcuMU6Ys8/Gmv6RbJyyzhtIynIHM5DaZqbsr8GHdHazbLEAzYTquggjiDl/umLnfAHYcFH/wAp+gpGxsAHdx+4L9/YV67CyIYiTaaxrA+H096ybTponoJbOZJY7nwG318qBcLK0ksxnEe6kaDbPWs3S3D2hGDGc+7iiCdJjl8qvqEsVxMQXOvXYCqSuzNzQst6dZxKMs9fPWjXHtlLRmGBwBq2RXoCSPalbs/6iurlZLEggZgEQBJzyg+dL3UhUI0w+/T1obd/DRD14REVnmAJKpud4/NhStlawFM6gzU+5WrWhLOZM5DgOFMqcOR0Bj1gfKjFLqF/Dr3fWGUiD58Yp68WhgYBiP8AE6HYjympt5gBmP7V9/8AVbu/aBCK6xLDTad/I1Sy202Q8WWbK94MnRrONmiI2gqYA6xTNpaBxkddCDtUFXZ+8+57oHDid+NeIyoQqQpO05dTOXiavyfvhMXo1ebPAxdSRxM+p41lgzgS5KzMQInTVRrBptWxHCQjCO8waAOWhDeEUolnBAAwkbjL/Y61M+cG/Qf6C8q6i4vyK6nxCmn7bKiAgy3n6AUlee2LciVgdBPuaXtgcUAZnY7888qWW8YXwt3eE6Gs2/bJxxQ5dxeXEs5WeeH/AOop+63FVzZy3GBSDXsgDuDFl+7KeGlat71agLBAZjEKMhkTmzTw9RWiX6LrKN5s7NFJwEgnLPU8dSKn3axyyJJbUnU/2iNuQ60dDhzY432nMTwGtHu2GzL2mFf1G1IAyHARlJ1Jp9mM2d2ZGRy0CYwxn3shiPU6Dzot67NdnBRyqtmwBOvGBr+TXNaF7Mk6n5GR7Uw6l7MiSGjUGD4VtPRuDNngsFhVhiN/iqTfL1ux/Om5pO0vSIvc7x2BkSf7iRNR7veHZ8bnWR/aByG2lS8/RSx9ltHdtQscTt5HWiNZquneY7n5UvdLd2ChEBxaEjbbeOeY4VUF2wDM4nOp4n5AUrYvRCvqMpEkZ5wNfGqVzvAtEwPr+QfnRLxZBgUGZMFugPtlHiam368BSAv7dY9qjLGbFO6KV0ANoLMgyT4ADMz4aULtYY7UKqsxXQDQSN8xsPWidnEYsYmSsDLOD88ooL9qlCUwAkkti01OhG8RGugFKnjs0d0MdmWeBXxQveyA1yGeQ6+9JXq627Wi2jKSoJjCZABEZjUkjeKYut7ssRe0ZAx3LwI5CY/3Va07QQAYCGJ/jsOJNMxalNWnYQltCpngfeiYlFk7aky3iBAA6x61VtbyjiGRT1H2qJ2gyqYQELlsY9dsqnLHx30U6HlERVEYjqeJ1NCtnZw6KjFssMKTOnDhFS3vOWLUifTaentTXZfar4sCI7tE90TGe52qVldFNexiz7IvDgh0czEg5TGh4Za0Kz7Jt7KAtnizjMgSCZJOc1c/7haAd6V5SCfQmlbW/sdCVO7E5+EaVXjikT5OmbOwKLLuWb+Ow4DieFZvTuygkQo2+2tcb2iCTE7sfXOllv2MAgELMid+YHCnXCZ7KCWgRPU0GwtS0sdz6afKki+NXgzhMf8AKJg+BHnTyJhSOA9dPem/9A1DP6w411D/AEn4V7WoA7PG4UnbOANB/qsWl0Dss7NPhuPSqV33jlQrZ4cf4/OK6NKbOafwWtkErx1+X1pa2cs3dPdXKeJ5ca8tL1idsOcSBHL71UulzBVWdO9HwzkOuQ8vep/yZfOilzs5aYJygH5DnVUXXKN6Yu7g5JBjLLY7jKiXl1AI2HxGqiSJbZNtSqBlBJ+pE5cs61fLw9mgdVxZwVO8jL860AOXOMQQYAXcAEiTxO9FvtqzKmkAkNzJGR9D/wC1cm6WtMl9l3VbRCzEhsRGR0AAiQR19azfbkEATjkDy+sVTsrMAyog6NGh6116sw6wfA8PzPzpig+To32aFCYhAiQTwjWkr7fok76D7Dian3ZimMO8AQcM5E7GNzHuPAq2WJpI+HT89K1bQyEz+qtcbIO6XgMdwonQ7a61u4WGIliO6DhReMak8py8K3f7IjMZORGLgCcz4DOm+ybo7ksWKodBJGXHpXNL+UOl0EN4YMYYr0PDTTfOllsC7gaKFknzyjwr29WJW1IHwjIDc5eVVbhd4Vy2oFVLpk2bRESyZmKgAwTrHzpg3a0QZoyiMjlh5caHYMcTEjKZ14mmXdnylkQcNWO8kg5DhxmeAiFUBZW9oNWU+H3+VGS/2hygQNTH3olhcv01GMY3InMemEZAdZMbmvLLs9wkEhBsBmfIfWrSyJbQVOzbBQHdhBzw4oWSIMnx0nWtpbg5JCpsACF6gD3pS1uSSCAXIOjQYPGAKxebN4AAYEnI6eZjSqX9Evfs9t3l8OMR85oouLHQjxOdCFigkOsxlpI/PCnbsndlB3RwGXgKySfQbnDK3TCJZA3/ABxV7YdoWOYwLIyINmQfJgKOJPwsPEfQil7bHIDoI2YEn3GW9VJwG/pv9RHWLKywmdv3NppPKqncsVEjFaHbUKT7mp1wP6QZ4liTh5D60O7y5LkySfL8+dZAwv6z8BXUPDXtUAtc+0Vc4QpBGbTxGWXEfWhXwsXGE7GaPaWSppEnU7mm7rdZQsdSYoxTy0GlsBcLqApZEAJGfLcx+bUmt9tXdlchBMYEyJPU58vlT3ZV8wW7ow7hhVbbHElepHtzpntG62QtMbDbLKQDOsClqrRk49hblYLZJCwo1Y7c6SvNqzkYSQu3PmfpS96vzWhgSRqJ06xR7C1myVd1n3oqYybPLIAaeXPf1961briRgNdR1GdKW9tBmus73DzORGcbEb1D+FoYs3ORGc7fLrTN4sSuZB5/goFphHwkHLEQpmPL8FG7K7QDqFZxjjvA6HmCeXQzSmuMH9EHuoZ1Y/t9eHrn507YIBtT73WzIMdw6kbTUy9I65+R26mlqGTor2hYS4P7Tr4Rl0386sWCgKNpGfIUjaMp10BBy4UVbyHyVsU5mOGw/OFCiZTdROe0NpbYhkAZ8h3R1gSapI8I3+J+dJWp/wDKOnrhPyr21tBKpPeYGOYnPyn1qVlKU1QY+FVA13qpcLupOI5Igy5mpd4JBVRlPoB/v0o1r2hhUICBsOf3rVWsHzQa/wB6IMKCxJkkRl5mlbO/ie+YjzrVhdHnEjjHrDCQcuMb85Fa/wCokf8ASSQMbYZwrEAZ7eXjTX0NcG7Htu7plInx+lFvHaiMswSpIGSnc5H71Ha4nCHQCGUTp89s6Gjv+mVZlhfhyMwBofrwqlm+MHiuj9zsVOIlZQlozJIE8szTd3IT4QI3E5HxpO5W8FVjIgwR4mvL88HIwdqdQl9HbXA+cQ3EZGpl5NqoILB1kEd2G10IHhQlvWLuvkdmGnnsaLcbd/1AjwyjvBjAMA+RgkUNpjGhkp+lZy5xORnnMcAKW7Osnf4EIGpciF89T4elNNZh2xPoNFn1Ndee2FRcKkE7AHIdSPlWi+k09/pm/mPI/WupL+rfgvrXVqhjJ6O7uWaQA0LzG8Abe9fW3f4FHAZ9d5pRVSyXGYBjU6+FS37XfEVCwrg946gDIxtJJA5Z1k1iS15cC25BgASS8g8DmZ8KPebSUbOTEAb4jko8TQ7sMsR8PnU+z71qG1gwvt96Hpf2KHbOxCLAzO54miXEfEPGsX21CDPXYfT6/wCqxd7Zg2J1wKRBzz64YkCiqjG0LXjJmnQFp6cPKKVsbF8OLMToN/H6VTSy7zMZ7xkKeG084ot4aANsvIfWjx9spMno8NhYQSBrpJ6dKK9ifjX4hqOIpK3liYEnbpTlzVxZ4nOmprY70zP6MXLtIERM/wBp22IjUVQF4Q7kcoxD0+lfO3274ziXuuN9jW7vaMgGIzPnFUm1pmaXoba9DEwAgA5bZcY6zT3ZVmERm4n0/JqVbXlIzaZ4AyPT0NGe9BUgZkqIjTnl5/go4aNoHZXsM5YrBkkTqVPtAyqrhVgjgggAgdPrIiOtfP3O8sBJIhoJEaHUb86+gvjhLMLvkPKhfov4hIozvkuuS89yeQ58q683QKCTmw9KQvt6tFZSjkYZwRtyOWesZ0W7Nb2pV7d4A0QALPNo/wB9Kyasgvlp5dnLZOhABGcyI8Ko3q/4nDDMAQBp+fat2l7VBhGsaD3P0pNcH8S3QSfp7VnrSZNo496/VRyiBCn7Z1HHlNRr33hBkH1phL3gtJKFUIgqdSOPWlb52gXVAAJs2kPoSJGR8BS3UZJp6Gbk8KknMGD7V1+BZ0g6Bp/+Nd2haALj2kac9D028RWrmmNhHnwHGh/7TfoK7XV3YqAMI+JuH3rd7tBZsMIltM9Y3z51avFoqKEQfc7kxXzt5PxMc+dW14gsqw96tg6AgnLOPz8yoC3cHNdfQ9OdT7pbEsEAJLTAGtVTYGyXvESTkv341Cd2LU0Gw/511dj5ev2r2nRJi2m2tESZM5nhx9PlW+1EVGVB+aACi9iXfAXtGOZ7qjgNT4kx5UtZEWluzsckGXNvtn50z+P6wux20bCgXw+tTbpbEWpCgZDU7TqfKPOsJblyXmVkhf8AEb+5pzsg2SKzuYdjJkZADTTlnQ9tDwcsbDPFgZnP78tB1I9KHe7KM2y96Pa9rSIQhhxUiPE6e9R7zaO+rhR/bmfParyeKWgVY0t6JkmIXYaknSTtxoN5tSxwDU6/nLKhoVSzhAzHM6E5k5sfzamOyLk7mVGI7sfhHU1CTyZTaSp6+GyTixrNlaG0sjZLOLIuYyAnWeegHWqbdjorF7Ry7RBIMADgB160jdrB7NX75EmSNo28RVuolQn3m0VITMgRKztz5mtWodhOBgDnpnT927Rs7KSFUsdSI9xQrz22zaZAZ9PH71Gptl7ukTWujswUgri8+Zp8xZsuEQBoOWlDuDu2N3OQyT/HUnxyHhQ/1Vd8JJGLIR6fnE1kkLbD3lEcq6nUiY3E1u/3iSBS1hcGQ91pTgdRWjdSzE4ljKNfXLj8q2/gVGrCCcRzgwOWUz6+lbe95wPMfL60BOzXkkOme0n1yphbk5XvIs8my9h7UJsXD2yKjPD4saMe0AP3Dooz8/vU9LA2bS6EJoSRIHOdKavHZYOaMJjJZ7p4Z/7pVmgcEra0DEs5k7SfbgKCt1Lfujwp+5dlSAXaCZlRseu/HSk71dmVwpkqTkdss8/CpacsFZKxD11IazwOQ0CJjXgfzhW+zHwKcu8T4cPekQ5U8jPyo9wwqXd37oJYAzludN5mOFZbaBj9uColjLHjv9vapz2RtDgBgasdgK1dZcFjOf7jnltnRrxCgBZ0knbh8vWr6ieB7N0sRhQDEwzaO8Y9l+tS767E5CTIypq7pgknNzryH2pu6XXFJ4a0dUDmwEP/AB9vrXtN/p8z+eFdW8GbyEr5esKBAR8/Gg3WxtXQqid1jJYiPInbzoNn3XGMMRJ0E9JAzq5adpADJWPWAPSae9F/gFOy4TC7a64eHCTWL5cLJlwFWAPBsyOGYM+FAftFmMAhegz8zQ7ojKzsXxYoy3EcGMk/6pUekgjW2wQ7PtBkiEKMhoctsq8a7Mmbhj1BjyGVUv68IfgYc/8ARrm7YQ6mOv1NPgvpvJ/CfYX2ToQo3Op8Nh9aNeO3MICIIHkBRrXBaKRK57hgfGpBumH4nDEfxED3NZ1cZlH0N+o5OPFJGx0+3Wq3Zfatm/ccQw2Py4ioH6xWYkr+aVtylok7z4ihZNcKeKfSv2j2ehUum2bAaRx5H86zrKwRlJYKVBGueYNeXe1tIayxShGZIzA4TrnpnzqrcuzgySx/TQDKNTHCduZ9a2snYFaUZMtLR3GBIInM89lnjvArdtc8AWDLTrz1qxdsBTuKFVCVQDj+49c9TnJM1Ody1o8ZhBE8zqfT0oeOqKyFH7WZHCRi5jXx29qop2rZuYLYTw2y4UqlilmjuQMbctBsOtSrvchaFnI0yk7clHGpeWS4VMWj6Blx/A+fAAHxg/KkP6q1V8D4dY0PhOeRpm7XpLuYHDTidppZr7jJLwSxznTiPUVm/wBBBLzaMnddgocHPPPiNYGvrWLG+oEXA0HQzpi002nWctaHfLsriWDQMg0mOPSpt17JDEhXjLMNoep+dZ+V0KeM2OL2uS0aN/E6Hoap3s4cGKAWBMcIifeoN0uJW1XFJCGRPoD018Naq3tg7zmSogcvyR5UqwMpdBbCzDzGy+5qclkSSG0xHu8ROU/Sm7haQzDQlRGfM/apru/6mHLKdN9I886HOmVPoSmFgh3EiNBET7ihX9yuECCSeggfemezbUO/fgSuU8dY9KX7Rsyz4hmNFGmQ+utdGv46OaewChzkVA45z405Z2oRTBmp4RwwLKygTMZg5GJI1pOyvRIdjICmAPDI9TXNOFNUtfrNyrqS/Ub+NdVeRvE5L2qYi7AEE5EyQByA/MqSte0TafBIHE6+A2rV6UrbOYyIH3pu520d1EiMsh860r6Nghd7s8khWB4kET4nWjhrUasoHCJPpAqs1k7ZuVXqZPkJpO1s10lmPLIfM+1V4wPK9EbW9tprQLEsxyBy46USwCNaHAvdAILTMkHUe3jT9reEs0G3Ab/nOhb3RbS9CLWbEhdzp+Gm7t2a2rsFz3MwOgy8q9srCzLB2YnhBgDp9ada9oBks9TNaIGzFpdrADvO78hCjzOdTUs7MNKoQN+8TPXSnP8AuCTAAngYFe3e7IZPeEmYBy8Adq3eGutgjY2hbEmEKYy5cJNM27WjwiDCP3MTJA3gD80ph7uoHdcjqPoai3u82iNGh2Ktr6UuJAnWWb+BdrNUXIxlnpOZY8/rU3s5wqO7GNgs5neY9PA0OzuzP338J3+1FtrMakQBp9ahu7K1w9IW0jFPIBvXrzpyxuQGQJC/5fak+yr0rkkqJGjRqPcGn7W7I+YyPEfkGqxxUpLfoUt+zkxTLmdWJBPtpQLx2dgCqrhiwJkajjI9vtRrVTZnvCV4x750MX2xzKsQ8EDCD5QRHGpipVZlrJksSonLbnP+6UuDNIYE6QwMTn9D7UZ73hC4jkcKg84PpkKcsrnKlxEgZiaVvhm/oK2syhLnXQ/L86UC5ByYUySSfyaaDyIPQ8xSlxtP07V50wjCep98qz6C4LfotZ24R2BM6jMEkc+R96sXV1W1LFZkCDwg55eI8qRv6B1LjJ5DDntHlWbW3gBuH4RQtC9n0TPZsdjPgfI515e0EAqQYGhOfn9ahXqzx2eIDvDPn040O53gsqkMSCM5P4avz9NEePsr2vaSIO+Sg0nUeY+lYY2JXvlWO2WdJWtnK5qWGuRG3lQXIYe0jQ8CKKaL0WYXh+eddSMPwFdRSoGvHxnoPejXfQdK6urY9N6N2lZs/lXV1dMiRS4/D4H3rN9+LwFdXVyXCjy66eJphq6upMAttB4+9HsNBXV1bHpsuDBpK0+Lwr2urZBiNftHSsvoa6uoMBuOh/NzTF1+H8411dTiLCWuh6VHsdTXV1Tn0ceBrTUf5D50V/8A9h6N7V1dTiDCCgXjbp8zXV1LBBP2CsN8P5xrq6hlIb3ekLnvXV1D6jDy79KFa79K6uq3wlBK6urqkT//2Q=="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Basmati Rice
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
      <div class="o2">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://5.imimg.com/data5/CC/MS/SJ/SELLER-83357789/java-peanuts-500x500.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Peanuts
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
      <div class="o3">
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMTExYTExMYFhYZGBoWGhYaGhoZGhoaGRYaGhkaGhsaISsiGiEoHyAbIzQjKCwwMTEyGiE3PDcwOyswMi4BCwsLDw4PHBERHTIoIikyMDAwMDAwMjIwMDAwMDAyLjAwMDAwMDAwMC4wMDAyMDAuMDAyMDAwMDAuMDAwMDAwMP/AABEIANgA6QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EADsQAAICAQIFAwMDAgUDAgcAAAECAxESACEEEyIxQQVRYQYjMkJxgVKRFDNiobHR4fBDwQcVNHKSsvH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgICAgICAwAAAAAAAAAAAQIRITEDQRJRYXEEIhOBkf/aAAwDAQACEQMRAD8A+yMdRqSNFaYiujRWgjQBWtT40VqdMVFSNWGjRpDSJ1GjWXiPUokIVpFBIsD379vc7dhvpOSQzVovXim+s2gaSOdkL5M0ZGylFC2uxsGyKuzvv2ocj6r+pXnQAfaABJHUzochWVfgwHjze2snzRrA/Fnv/VPVYoApkNBjjdXXyfjt/caRD63GZuS3SxJCbgh8Rd7dtrI/bXgPUPVHaJZOILE5dIZq5YGNBiO0nQSL36lJHnXM4L1WdI5JIlYMUUICLoblm3OS5d7Bo7+Ttn/O3KivDB9a4v1aGKw0i2o3Wxl/bWSL6m4ZnVBJu65qcWphV7GtfL+JgducSclxUM5cueoktKABZBOJ8WRpnE8RaLjGVrkpSAl1AagL2AsUdr+ST2Jc7TF4H1Z/V4FIBmQFu3UN96/jfbWmGZWFqwYdrBBFjuNtfGlwIlEj4lZNyWsuzAFEPYnbAUB3999avR/UJIObBGSrPIQ9HMKMQTagENanxWw+L01+R7Q/A+vBgex0Xr47wXGMIXjLFUkeRgwChWYEVJXe6UgChWN2dek4v1BORw8fPk4d405mRqQsBQZry2IO++29auPMmS4Ue/0Vrjj6l4cRLIXNEDuMWHyVNVrp8LxCyIsiG1YBlO4sEWDvrVST0TQ3Ro0aYBqRo1OgCurjUDRoACdGWoJ1GgCzHUXqp0LoAnRoA0aYBoGgaNAyK15/6u4viIwhgljU3+DsAW7/AKSCWFe2+39ut6h6nFCrM7DpFlRu1eKUb76+W+r+vSTyc1qaP/LC7AtISBsNiMb7Htlrn5eSlgqKs9N9V/VQMeMEpsxlhgpcMSwGPb9xv8+2vM+n8QWKdTsDIGkYZKocLmaH5DFqoDv/ACdKfiOWqIzWoYZlupEorWKbbFtttyRZsdmcFwqiRlkDSk07NfLxJyEcdMcTvkL37DftrllyXmzTwp0xM4ErSPv1FQXLdpAceYT3APT0jfb51HEOA08cIaVGIxMZVI/IYKbskFSDvWw8g6RwfBsyhpVAV5CrR5WHcuFHNsHKlABAPcDxq3DZDlpjiv3G5aIy4mR2VI6/pNkj9gdtLWhXey87RdKFjIXyEuG4vC1dWY0OyjL2/wBs3COcDKEXZKYMdjZARY/cihffc3rHJmoYqiCOQqvIsqN2IZpCosKD3O4BU/IOnEAuCub8vA470UJxdb/SdqryP7VSSCxXESkRcPzc5GzKNCjBHIFKU2F7f6q2r99a3/EcnFOWqTvGpVSCGWlKn2ArYePnenGy5rLOioURlQFu6yiy7LiLFWu5q7+Tq/C8dHJ2dnEUgzoDNyUbdioBN0Bj4/2A9BizbHNh1GIHNmcTOv3OYOto3TEYL+m9u4286w8NxErBYygDSO4lSwXBxyJQg+y4j2se2k8Zw8gWwsmckmEqLuWJ6Y1ORO7WpLbABdqoDWv1CUROJQFSS+SHWgiqqvbO3eibFV/T+2oSXY6Ls7ozOjqsiSGRwKLCJlCBEoEEtR7AVvpw2BBEhhh2K9ILMRbFiSGci/fydY/VHieXMYoWHNVC4KkKArMSFyF9FDt7jVeGjGFTSBVYFWQkEK5VmklBBrayuPgd/bRmkGGbxxpPY2rAZ9BeyGtI2NbNR3I71fc3rf6H6uwni5s4yiyGNs7CPBft79wf6j7a5/A8TNkIqVHlBoSWVW43+6VNdWN18oBpvpcvD5gkBGEQKAAkopHWTQ87Dz/zq1Pxdk1eD6f6T6lHxEYkjurIIPcEdwf/ADzrYDrw30N6mEDFpqiC9KU5JJa1aiNmx2KjuT8a9lwHGJNGsqG0YWDRHY12O43Gu2E/JGbVGi9Go1YasRAOpOo0XoAjU46g6NAypOpGqnUrpiLaNGjSGGsfqnqsXDrlIwHstiz+wJ1T1X1dICgdXOZoFVyo2O/9+w32OvA/Xnr0M8jRGiqHEm2U/iSCSdu5NbD99Y8nJ4oaVmf1zj0llMtti2TwoB1NJiS2RJvGgdjQq9+2uXIULKwlCwrJzTkKILBjYZvYge9X8abwR52E0gjFmMKWBUBklAobV1kigPBH7apxjyB+JdAlowwxK8tMlAkaS96rcmjW9fHHLJpG0y/AcSrGfNftREMsgvKxiyE/6RuLH9P7nSk3oT4xCSOQOTIzBmU5RgBdgFDNsD/fbS+MhUgJJJItKjOBRdq35Z/SVGwI83W51biOBmaVRMwVYShRVU0UdSpVnAxH6l28EfvpJRSKbbMycOjhcmBKPdYcovKWxR7H6SSp+R+9at6qjCSaTMxtEEY9TMcVPYJddieo1Wt68RFyllHUJOYAAQXjZnoKx70SSf3rtrPwjyGHIEI4EUchJDdYZDlIreKG9bUTot7EE8iRxKWl3aGUqqOUNMQws98u5N72ze2my8Ov+I6gzCUOihmwsdGG2wBXE9xdHx2GORXb8hgkbu05EbWzUB00bCm9j2Aq71f1fjV6zeAkRI1QEtKjNuJC36Achdb7A341ST6FYvhQ3/0wxdrwCoSeWyMzAuqnrat7Pe7O16niJ2RMDGqycwNJE1lkqz1AbEt4o1dEXvrSjm88SnLjVXEbYrzVQNzQdiQA2wG5yNjXKgeXKSZjJzDyVNFZDJIXYR9tgMqP8apILHeqTIsSSHmLYUSWSWaUYgXGaof9rBo63RcOocQgxtiITLuxy6iDIABYA3Y3/veqcH6enMi5rLOxiaWRbVWWV3RAL33G6CiKpu96IpTFIVeQSO0aSGPNQFSOUAozdzs9Hf8ASfbSddArJgWFOexplNSh12KsA45aHYsOomj8/FNMTsm5dnU86WIgAIhV1rFeoWL6gaOO1an1SMFTCIzEkhcLVFY3RuiQbWiBQP8AbteohOBmYSSSNzAjsCCjRkClaQDahv4NG/O+dXnsr4Zn4eVzOVKdcwVlXLmKIypPdtgQM/G91pU/DnMmWRoyyubyLZRoAEi2/EmQnqA37XuKqskZblxlUhQKspi2Z6ZzGobucD5sEA+PD6foBXBpLfnl2WMRLvFsOkHJg9GsmDXrSmsk3eBkMToqH8Y1xYxI5yYODywNhuG6u9b15Oup9N+rPDOoRrIWOIrTLHcjjLK2rLbZj7n31zIY1AplcQyJuGADNHHHd2KIbIbnuRv7UiOVxzFEccZEsThBWbDEGNmXcdx3PhdVxv8AaxPR9tilVhasGHuCD/xpoOvPfTPHQvJKq2JaUtv0OBsXjF7LmWG+/b416DXZGVozoDo1J0HVCI0aNGgZWtW0agaYUTqRqBrlfU/GvDAzo4Vh2FEltrxFdifev+uplKlYHJ+v/UeWka83EM4VgKvdlG5okbE1t3I14P1HiYpqkvFebg6qMsyoIykNeDRG4r2310o4pJBJLIWdiCqS0qjG+p6BIvOxuPG3nXA4huawRSOVFIDKiUU2U7kbk2wGQA8/OvPclOTZslSOnwHMMfMCt9qW3En48oR7MBZJNeBuKHm7wcNI3REiAvJHIvKEhRvNlx5BAsA3t8jZMpfLsyqvDh2yZzzD0lSQneifJOx3804cCzSJK6VIZbLpspw9lGVKpsfNn32ElWQ2y07PmxRkZGTEgISRy6AKg7gkmq+B3vTuG4+pGiaRgpQT7ksVKCgJHPYGkobDobS/SWEcssjuWfDmEYkrijDlKLPT+pje5z+Na+PgjQMygGQyZSsq8sSIRkylyDvy7AAN0R2y3h4eQRzOIiiJVCjRmzKxNEJsMyxXY9QXb/SDvWzhC03KkYInNdiZVB+4keZjtVGykEd9tr8jWnjI+GV6KEc37Q5TkmztQN2VFE/F3p0QG07yMrUYXDYoAC4VStCh2Q3/AB+zUgo5fDyBnnhYlCZVt3BMYjQAnNQwsEiq2JzGm+peptPnMDGVlwgYRKxbESPGJAx82WAHgadCK52VdGbOznoa0UAptuf0mq7G9++bgYCyRwqxW+XxISMAYqJA7/mKJTJRX+2mnb16F0WhhY5FbOUglVD+PKVAoLC7/SP+PgZ/TCiyHBUmydoioUjqdlwNknsLN1/V286pYmlWMKAiJzeUB+TALuzn+ksWba8uk9jq3AwgnlQr0rGjoWUDGSUmqUC2vegT5vwKbaSthl4MkSkTAgiQuVgKOwRFYtVgV1MtsAT7k7XrXy3VhykZoUd47cqqIha3Be+slrqvjtqeF4YxFRFgyiPJ2kNNIDu2OVkHM37EGv2WFZocBeLFmt0ZQtDExrEx3fc9VA2AdNtvIaKy+oRENMZzIOaqWCoBBx6St71SC7Nkb+dRxCSS08hMYeIyIrA04Vm5RAU3nTd/9VV41r+nqeVZDkgJkRLpnAQVjRFKathVbDfudK9N4tpspxGyNApiUM+IctQ2VbtiAuxGx/uJ1roZQ+nRrYWDHm4yRAN+OTDJWO2BBAO3v5rSeKDhU5kKq5kdajf8goxVgtUVWyCew399ao0bl9bg24jPLtgeqiXB6mYWaIAFkmvZXHTKz5mWRY4jgLoK4dlYkWLobi730Nt6D7Hen8PnIBPLmyqZVK2Qr7Kkbb4kN1Cx3ojWSZlzlCYNJGCzugKGmBARRRoLQ8//ALa0mLNziGjyQKkS3S81WcS2vsUsDIVROxNhX/yxokjOagOCSzUXagQxNEFuokhPO+40Jiao0cL6tDJFGoUxuAS74vaxpIadeYdzuCAO9D219N+nvU3meVcgyIRTbBjldbDxXv5B18w4/iSWEjKmRGKyV0cssNjHZIO5bv4HbtrrejepchkU9PLczPRFtagUWFKb6gPa9a8c6YpRwfVNB0ng+JWVEkX8XUML22IsacTrtMwGjLRovTAL0aNRegCdeO+spDI8Zi4gFQGuNGBJZVPzRHv52/t6rjJsEJtQewyNAn2+b18q4qUSSSoiIpaXlhUJicUAWkJskjJ6uzfb41y88sUXBWzDE5jhUUrDJzL1PioOayZe4DUaA7g7dtP4MGLlR5R7iSEnDEMigFTl2IokCrN/udcqCVeZKqwIsbSYlmW/uEYuTQNqdtvgHbc663C8Spk5bDmJEBgSCI4+YRQoiy1V80T2B1ySXwaRZhjSjIIi+TskIOIxeIAMzKX3bFct7qx51rkWJXhfh8opIkYKlseYWx2Kk9Vgg2e9340ng/UrniWUkisY7W4lhqupVAILVV9tx8jUiVY3kjaRbbrVFBZhGsgGAYtYIB6Se1D2084oTZz/AFApIGZyvMkDNxClRmmJFKAp8j573ru8NOojkiRECyBZkOJP+WQWcK2ymwnnvWsCcOo4hw6KcXldVzIZyStlyNiAbGNm9vbWf1TjwyiR3Z22WNEtTbEM8PuO43J3se2rlbpIS9m8xxhi78QsltFcTdKODgcgCSRbWNrsJR+G8FxUXJmadTk7fbxtkVX3VVat2stYHvXbVeKQDiETlty3VWrty9sUUvdCqIAPlmq9Y/8AF/YEChfzDRgqeWixyYnsvUQw7jazes3G17KTSF8TC78NFGY0ZlG+TAgjP7iqAKDNvt4N76vxkLMceYGwiEY5o5ZXEBmFWCcgFv27edTFwoYYSTShIpWOUaBUU0JBRIOQysV329tU4SUscHRkV3sSlg7BGBY8sAE0xUEg9gTfYa0ukTtmyVkLRy9aZxIzuQcF5mICBRsLAG9bCM331n9Q9TZEy3LjlxDl+eWxykcA+LJ+L1okm/8AULSRhVWKUtQAdTkhVSKxBsE+z7k1WsnAkmONlIUk4yMoUNLzXOxBGIonK/Pir1KWLBsvPxhWIQOoxlXKKQBnZUAFWFFXfbU8Oh4crLTLJSGUS2xDvjjID2XdDdeNu+n8cnLiYZZGMRKKTZiv4KWogGyCar9JOxrWSThWmrnGMxSswCZXawoxU2wyXqsd/K9tKK/wbYrgJTNPYVS8kjNHsQoZ1EgdgdqxDi/JNDzT04ZlmfkU0jZySBxShVcqFUja7Hcex8atCW4gUsWyxYAjFgxiqjiT4yHz41XhoHQSSSxq0xcPGkdBAJbRScj1Anc7batiQzg+GZUIJezM3LYgKuRNNYJJOIyBu+x9tI4qldUjDM7ygFwoJUqhZirVj4oCtro9jrWqrFHBH1WznmqVEpjYk1s3YF6IG43HbWOXimNM6sLdo1N8tUUNy+Yg73Y3sG+o7XoW7YieOVpVCLIVYSqSqVzaaqAI/E0Cfah5GlNxrqJRDEFkWNYydmOdHEUbsnY0O9i9bOCQM6dkjA5rlAWIcqEVcm6jZDtf8azRI3D0JmkMmTWqqGwdwCpL70fwGx2B+L0otfZTLpLEhkQ8oFENnEszllJxNi1q67+L+NafR54nlhjklARmVpAsYcZIqmgBdKwG93WWkMWhCOZlWVWVZZQQQ7SmMMysRQxqtwe47a2+geniTiFgRoxGi4kfoLEEDJu5ZgQNt73383BftZLeD67w7KVBWsSARXaiNq+K0zWP0jh3jhRJGyZRRP8AOws96FC/Na2HXatGZAOp0ai9MCTqp1atUc6APKf/ABE4uIQhTKFlshFvclhY273YFH5GvBl2DKIpOUVKBppBZzcDK1PeyN9wO3tr131xwkTTZlHyAxDgBgJCgKOiXd/iL7d9eZfhHZkAeRCwMnXhiHDrRyUUwNMK7H+Brg5GvNs1isCEgWpjH+A6hKrWzSAEPKuQrwFxo0QRpvp7PM4mcrGsoAjjZy4bpwydT+LkAGrJFfvqnKMaoZYjK8jGKRg1qrEE2gvpBceAB776TGnLXlrKGbFHNiwuTAOgUUAQD+R3sn+M3VDTNwLw8UM5QaUJZUYEK3SrEE4nfbfcg6w8TEGhktgzBpVIUcvEyOHByDDmDHtpKozB+SMUklXHGgxRR9x8GG4KDIEbkbjwTaSmkkgVy4KgdKkqFYMxZPAa9ivYgDTUaC7NLRKskBcCPnBQygmS2EWTDHewWBG3zpP+EqYNisgcgCMLQgYGyxyIKmwPFqf50+XhBJHsoXMBY+ZT9XKAXIjdR+QxHm7FnT9lEnEs4SR1BROWVewCAAoJvI0TXexfbRYryY4YFSOYTzHrOZWMmQOMyQjPXQQCFO47XY30mThpGAiNhgzZohFCORy2ERJ37OLO1qfBGnR8OkmEckoJHMeSIAhkP5A7AX1FQL75D4BOFjVvuERx0rSMu7tIEpUVrplYjciz33HkGg2aeG47NytEh5aF0Y8IlKHmjYKxYNe/UCKvtrHws8ZynXHMFoxGinqKuf8ALa92FEgjbq37aygxCHNpHhjYplkOjnWzBMSSVUUB4Bq/OtfDxNErrbyrkjqAAA5lo4An9WVjvVkfOn4rYWRxXBrypJHYCJjTNKzBg6klso+7gXQ38H+W8JxIeQ8QzJksAu1K1IuJKRi7N7KTuab5Oo4wPI2IdS+camKusjMkq5/Vsdz5v503hI3DqzSbm5jdWqKpiKV37dQPfv321LbSorYmbiY6lbHCNEV4i20mzlnpBuxvsWu8vI1l4jgyi5kVzAz/AJgNJEFUIWFbKDQoCzV1ZrXTMLiPqUl44+SpLBV+664Mewo0uxuqOsUkTP8AbdIlVmkksNlXKbEJGaHneu1KRtenfoSLempKgMaIitG0alzaMCzjKONW2xNAHcCsdzQ02aU1Jw8rhWiQxtghYfcdXGchHcjHcAXZ/jm+p8WSruXWpmVQ7i3AiLWypt2JO/fawddWGdCJreklCnFY+8SoxMtAk2SSBfjHb3KrLE8iIJEkAq+U+5LkiUtEpoCQnbZTRq9rvqFOhjlZjEgjjUskkcuXM/MMVDY7NbZdyR1DWKOb8XjUmSQMXoAMvMYsl+N9hR//AJRJXWECRFaYE/bW6aRmJjeQ1j0+24A02tlGjiYGHDh1xlknlEbkOFKkXGVoC6BuvN6twctNy448yebIA72IypCE9W7Hdv2G3bfTpuLSDNEIIkDF35YZg2JyIxoKA3jsO47b4+BgVTBFgryPHgGzYSYuyghgOzZd9rO/nTTuJMlTI/8ASAlTMsZD92QBbAIVjiOkqFHfYUSd9bUheH7nMMrI8bShOmI8vqUX3y7WAdrB7VrnsLVIi6KsTAZsetmAJAkAospVR3/ID+TplnV/uAxIjlHlBO5MlbqtVaiwbsbAUdO3eBNUfVPpj1WTiEZ3QKA9IwDBXX3GW+x2v412Dr599J+qTGdOFhdSiFnY71yywJHbcmyQx8kb99e84SRmRWYYsQCV32J8b767OOVozY6tRWranWgBWlyDfTdKJ0gPDf8AxCkJljXG1TA2fBLFj2N0VBH/AIdeWaTdsThCgWN03BlbLpVQwAURsDfjv2GvcfV3DcOpkkkJMrxmOMNZVaUsca/FsQTv7fJvxcshj5YGZj5JVDgFsgoQDnRNqWY/AN+defyr97NYPBm9aD5SyFAN4wVQFuV7uoO4f8j099rJ1RJHWLmEEXKFShS4S11jM3dsxrcHYadxJXh+ZI8ZWJCpDlsmKiLoZCCbXMbg+573qvoaxcgGUlnJWXlyBkRcgDWNb7kkDfcgjvpY8begzdD54TG4CB3uKJAZFTYcxaLMKKFVyINedZUyHEToC6SFFZJXvAdRGJP67var7Hftq/BcXGIeqFWVclaLcWCWWNJSRSjcVYII308Gn5E7sGdRje+EYIYR+Q/asiCSA3nUtVljWcEcJJDyZHkiCSR2I9sleV2LWSAAd2A+N9+x1i43h5cZXJZ5mwQEPUUIeqxZjuL7+dlNVqBwaNw/L5pzlkYuxBKcu2AyNdLFFAAv8jVDtq/EukcUcQCBjKPskXs8qhiAdmo/i3gY6q0ngWQm4g5sKIPSvNNHFwxNoQQSFpmNjx8GmSceVkkeNnJolOjINFKyBsR2B6V337jwTpsYEcgamjhzCxxgBvuSrX3N9gc1Ha7JJ221lXhTzYCVsiORuosoGLEGON17lWpTt+n53EDLPAgO7LhGqCIshsGOQkgnszFiPHaz76IIwqtG0hCMtSPVcuYoCqqLyBbJd7I2XRPw5LPJw8wkASOV2NAKSxWowBsWTNS/fYD9mSccAXPLAjgKhcGYmSXxkKuVl6QL8/xRbHWC/p6Hnsi5tIYiHxZQGkJVkPVv2G++1Dxo4eZIwZ5FH21EMkJ3bMKc3x/VeVg1Zs+dW4ObHiJGcyS0SBtgeawQJhdYWLHfb9zvk4dMGZ5crLMJZqZu4ODEG1DgjAfIPvqVlZBv0VThluVZZLVZUcuykyfb6jHGWP4IMRVb2aonR6rwaMDAFUEqS3SxbFrYPsOijj033YXW9s4OnYSBWZuXJIyMQBIx2U0dlbFVsGiL3Gr8LgkaHmB1YyMJSpZWbqLI1G3Rb/il9q1bwJFOMlLKZftsP8qK4wGkWQKcl7b3iPbp1kXgXWEOK5bSWsrd1ERpslHYgqxF+L0zguGHMEcpyk5rYrQZkQLmMVFhUyHe7qr7Vq8fDuyzSSYEWw6hSRR3QcAE5EDM0K9r7aWsDTwaZIx1TKC8qoq8wuOXJnWTKDR2C1a2QQR+6VV3BGD8kkToSyNZ6QqyAmxdN2PgaZxEQeQHpRUiaMOEPUMR/l1VfiLI7fyayQkTskjgcvlorVSAiyFU+7A03awD4s2lqwzZqnTCGZw3LZkxRCtGNiCQgF9QOW49wNL9FnCgSyKXjWNhHISqyEtgGABFOtr+Vnxq3EcAyzSSTIgBUr91y9K9BWNAgU9Ka7B+/tzppJVigDMlI7YAb5jFkKC9gCuXYUNj41UUmqE7TBQq8oy8tZmH29zJi6dJdv8A7R3Hbp7jWwxKXfEOZJIsrVF3KscjG9YhWuvgjv51HE9LokYWogMUY/cJYFcO+TEj3/76dirTQqGly/FJAG6VUAtF0gA5FdyO2/YjVWI7X0v6xLDLJIQ+FgSKwFKighLYL0nKx84nX0rgeI5kaviVyUNTbEWOx18k4eIKVjViJDcktOTRkY2krNeIAIF73VgCqP1ngOFWKNYkvFBiLNmh8nW347tY0TLZr0aqura6SS7aWRq7arpAea+q/SC7pOBnywxKYlsjgV7C9yD3xNUNeHfhyrwIj00b3FGxJp5QdyNiApJHbwRW+vp3rXDyPEyxNTeOor/GQ3H/AG181+puGmQshZXk5eDMD1M6dQYvQN5Ua3N/31xc0KdmkWZPWuIWR1kclihKSHHYEOuyL3PUB2u6rzqq83NccC8k6GQ2CExQkIL2DCzvfc+dtYfUYllCmJEXN4xZdhUquLGLC1Cjeq/TtrZx8inmojIRK5+4xHWUjBxtTtRyvYd9ZeNIpuxvFRR9ccpdVlXrLFcWfIKoOP4qFs38gnSJfVeYZAX7MsZKJlYUZiiewysH99U49xPM8ZQMLzAiYnExZAvICBYboGJsUo/isvCsREvEFojnzWaOgAr0Rk3eqpaB73uAL0ks5B6Gf4QVagKrGmCOCSDGWlYqdmNNeXghqGl8dxOJWUiR8pSwDYdQQLy0BAtt7bH5O431qHErCpRgkKRuYlNG3C7gqDuQxJW7NlT/ACsu+UsexLGUlXULhaq+ZZbB6mC14DeTozYx84QySK4pbEpaU7tsQrFRuSrBfYAUe93z/UONlK2g2GcIYMxDh8S8gYChVMxF7Y+fDPp9rQiVubiVkJYAKcWeMgud2cYhv+e+lzSuicM7qnJzBYUxwsubZCASSGuxW6+exrTpIRZpgZTEUUkcsK1EKI13wHgdgdzvY9tWghkweU5OyREIO3Kydj4IsgY7gNtY+NU4rZhHESHJeVnJyQupRQAOrEkAUPYE760PwasJJGaV5rhBCGxI7OSBHttvsC3bIWe+i+gpbKepOv6pWaTmxgo64kLWSkFa3/PfwRrQ0uMbMsZigYCdhmCzMGtcLvswGW2+1Dc6ytCgeaUyhmJRAkmTctSwxoYjN/zsCxVb6oeHMaF5gY3SILHEoDWiGg1n8C9Ltt3F9jRXQHSPC3Ky2pXpkXNrZrbJ8sekWdvGzD21zXlXB5FKHlJIzL1DdyQyLW1rV2KPY1vrXxEDScRyYgAZKBdtyBHKATYurVmHkW3tdoeECYQVy+Sxks44PG7nPI3bMQXFUO3ttpRxjsHb2XjMAYIEXNI4rJdgzgEEqHYDIP49qJ2va/GyKhDQw/lKqlY90AAPwMzuP9Pb2vTEEsiLH0hGdplcKEdo1YMCN6U7qO24Hi9kcQ3LIDL0MbpFCf5vTG5xFKarbY/lpdiRDsqxRyHm4ozizlkXcspCLuMLY1e9Lt824b1I8jkOiugdSRIAOWFpY7KjrNqDtuL30nhuEZ0mUuz0QsaKA0Wa2WFAedlJ7/l2On+mHrXiExQrIYSo6ms2FzVtj+Q38d9Ox0cwIMVSRg/MloOzEI6glwtMxpAtgeLH99XB8BGzcPzHjRlVnjIDMFFh0Yq3ZqrfzXb2vwVpJOVI56BzzHI5aLQyAUGxWSn5o6J+LkaKIQsrtGndFxGTDKUvldGiCF/fVtt6JEeneotZnkaNjMcTGQY2EUYbKr/qGIP7j+F8Pk+UqZooW4wZPwMrtVUe/wDJ01eqRnRSkbRqFRgHLBz1uN6R96tu9i/NK4SmdXdaUlViVTTOqZUCewNk71fSPbQ+xo6Pp0eEhU1+SLuTTblmWQ11WOxNmyBr6x6PxDSQo79239tr2v5r229tfOF4FjiUJDmsepiRIpyugLLAAHa72o0Br6lEtAAmzXf3+da/j9smYxdTqupy11mZfVG1bVW0hiuIhDqyN2YFT+xFHXyj1cSxzEYlHSRFMj274bgjAdxvQK1YPmt/rROvHfX3oaFBPbDEmxkAMpOkGz2FsfIokaw54vaLgzwR4KnEhvEFo5GIprlbAsq99qU3+4HfRw0NSRtBSRxArI5NOws2FBHckA3XnWscKTPnIKAiXNVsOZNiXTyTanttRPcHSfUuDsHmkpIIWaIEI0kgdyG/H8qXAe/V87c1+2Ui82c54ZlWSSNrEmJQNRQMbZa6bIBH7edtV4AI4RyQCuYxke/tRsVwC33AA38H9t54biHpGcSRl+pog2KrG1RnNl2AX8v/AGsVqkHpSqQGlxjQSYPGxYnJipLt3rc9vcWdLWLDo0QxN/iFmpxtyyHpnzYBlABJIB2Jbtt+9KljZo1ouXZmLdS5IyvnLYU7x7Y2SfGx200QZzhnYLNJFYeRlDEAEdBAAx8ncHqU72dK4fmRpBI8qvDsgdRu2xoAD/MN7qe3QT51L9jXoVHCTM2ZZo6eGOsJM/xAJvzsaO13dWd38LOTnlavy4vvMSSpdGYhEaydlIu+7Lf4650MQmkyZSGkEgEa2pjaNiEkN7AsL/jXTg4hY0haUArIqR98iHxVXa+5I3FXQIY6p6BIQjHFA0dgmWR1ZWV8MmIZm/FupgaIBA8++7hOKd5YmembBkZT0qoKllawMT+IAPc9VDSDDC2MhpsuYuRbYLHkHYK143QF+9DYa5/DeiO6ubQ84rI0TDE8uJrUGuxdSfar7aXinlhY7jmEEQjYtkZVK4UFkYY7ZfkWoDq72PjfT6jDGZJomywpC6KQaQq2VueoCgAB8kj4yJMzGMWiFo5DHmc+pqYEAHZqZh3vpPvuTHLh5Gk2xjCyIWbKQ+ZCDV/jQ8H4G4qtAM9JlkjxJQrypGQCNSZWjYAqzFdjjkpK77AaFe3QyFxzXaNpWPRIsYcqQoFqBZHYEtfjRwsaxiUDmqkTRyZgqzNmKdLUnoxA2oDbuNRLxAHESSSE4BGMNDIXIQKbGxZ3r3y9wNLbdC0UgkkeJQyZBy0pVWABht0S23CrvkqADInz4nj+L5EbTlY0bFMOokOyZqSvz2FEXq/AcKftlVbqaxI2CGl+4wHegGDAWO9fvrKYJFZJDZxSXiAXZWtWJwP+mgx/gH50Kmxs6Po6PKwDK5DIZ5gGXANahQF2asVPbuV876z8DGoBePGOO5JTJJ0s6E4kFm7sRdG9sd61KxMxzmZiDHlLQ5bpuCMQTQB3Pc/jXvrKOH5sbcmUtHSmFJQa5fLp963NX5JBPua00ssTfReTiFhjH5SxBTkCqruDlHbV+dgHfv3Py3h5ArvBMkjMbdIlIAGxLMpBBa8iu589heo4viYZeHVzaKzZsQ1hQSwAIJo49I+ANu+m8TCOGm5MbNJIQZYygCAApy7vf8SD077EbaSz0DtIn1Fngimmz+8Y1C4AMrq5bFW2rO6G3/vrL6PwxgQBSQ9ESKWVmiW92sfjtQ2o0KGoHEpE7BSWOaKEegQ+CWRv10pU7na7vvW7gODZylFbUO7FmYK0lmwvjIbdjQoew1eUqCzq/T3Bl2EYUBjISoUGowKUyKSQLFFtgfg6+oKNeS+i/TDkeIZDTAGNmfJrbLmkgbCzVH5PjXrV108Uajkzlsk6rqb1F62EM1B1OqnQAazepRl4mC7NVg12I3/8OtOoOpkrVAfI4uFZWYtbusrIGV+nejQewcQh7V3J7+VoxxYm0cRKA2Jkc4sw6GNqFJx2reh7a9Z9YegtEiy8OGbFy/KxLiytfiPGw8d971431tZQZRGCjNjgXYjFgpZkIQ9Irx7k64JRlF0zVNNGaDiv8OIiImCSx5EKQaJOQklYgkBSW7dr7X20+ncN9hMmMzZtI2BZs1aQ0tbL5AvYA+2+mcKTIkuKGKIgLzm5efKCFOlex6gSL9731T02blxxiUMOHRpaVVaORtqzNkEgdV/Ne1aT16Y8Ey8YhcScuTmozRpag9GQZlQdhSjx8i/GqTcVmzpEhsASJ5ZgHJcLRxivpF9+rsa2tLIhfKi56uVEm6iTHYIx992yPnYfN/TZ2iIZciXYKOlBUwoybf0gefJH76loafsxcVxQcxT2zxRjAxqwD58sjJqAtV3sbb+DqvOMsUBjMgwCyRxOgCt9yyi2L6Rfx2PjWmcoI5cOnDNCzMBIDzswygWMjStdV223OrrOV4h1NhYQ8pLSflC9ZqCNrzJr4oX72tfQrYshoXkfJY1JUHIUSzNg8eYvEDagL3ax30ensS0sQyWEJy1L0FCODhj4NUVyPlj71o4yPl5hMHR35rxrlkzsEEcQYDdhQcnY71v31ZXSOHiGkfOVIyQwXNVjOyZCtgK33s34rU70H2Z4uCYwidRHERMMgScEV8THgp/AboWArcN7a1JJhJAY06chkzK0myA3kFIGF2QboEj9jm9TiKK7csRx/bETtVFkZvxBJFscTR7EHvpvHzVzGldIqydmr8gwUcoNsQCPIH6Rtqm7AbxjM8iEK0bZyyMzWqMqthiEVthZVv3U+Tvnk4wUJYSSSFnRBCwU4bHI+f0gAeBq/ErmZEWNGdrQU+KjENJm19wx/Ku5FVpUXEMQJYwxVfsyKtIqsXXpRBdflff41KS2J2bhwzNJNJipijt6BIWXIEyRU10AQpPgk9tYOH4wSo4L0JZQUjNnKPpyDkfhsCL8CxfgX4OQhiijlI0pYkSZNGxUDlsGtSzm27k9XudZuIkEUMMSMCGdtwCzks5bIMR3YHYeCRvXa4rNBZt4tFEUkjuhcxCQhiSlF2sZdxiuw8HqNXesPprvyurqZUblQutks4bYr3ugxI8WRvp/HQKYU4ZC6pJJKlMTmuCsAHf2OJHbsa1oWUB4pVZi0hYwx0pIIRrd8dq7jG/b30m6QITwLLEkbhULKycOUi3AIUiR2Xz371sR/OqcPLgZmZs6WRVBsvHeBA7AbUT37Fe1DTOKaNokmzUSySyI6soXENKQTR3HZSd/H986cAxiPDx4mNmFTOd3YACQoQNxgLr9+9GmmgongeDAkeORCOZHkoe2ayDk37tQ79gP416L6b4XiZI4pIbbEoyA44qGTHqy3sbnax1V3Gs/ofCyySNToDktOWwDCORiy5nd8aAsVsTQ717X6Y9HnjkeSdgatY8WsYscmJNAnsKv5+NaccXJp9ENo9GBo0aNdhFEnUaNFaALnUak6jQMNRq1aitAGP1fLkuVYKQpNm+w79t+2vl3EyYiGTiHVlLOcmFsyMrKCcvxUE1kOwF6+scRArqUcZKe4PY73v765fq/0vDxBtxWx2pSLK43uL9vPga5+TjbdoqMqPl0U1MFlK89TWzGQcoykhaF2RVZDsFu960cXO8rHFWChaWNSHy6yZLIJ2YAE/x2vXouJ9KSFmiacnGMqzcsK/LyNlfyyIJ7mjXg1rhqRYx+yXUuJEoAQoQqqQTQLdO9ee+2uOWJUarKM7cUgySKMExGJ1Kd1VmLOVVgerZtqr8Rq6wRySMYmLIMnSMqSw5ijOXLvjZ9tsa/pAfw8snMfIKrytgSCFYRRRkqCtUpJs77kMPPbHBOoAlkZoVkjaF9gtRRkhacbZPX7+3vqugLtwRWBBHiyMBHLJJ+StIynoJFyN3uz+le2qRRBzJMmRdyqpzKIcbgArWKBvBqrW/A1T1fiFl5KtvzF3DK0g3IVBgx6WIK187a0cQXfmxqQrRFqk3KhVWxEgsHpDbAbdjo0sk9i0dcXQEO0ZPM6VDRiiLD3uaORqzv81qvEcQ0IlIZWYnlqoFhiCaYK1KlbgX3sn2pqMtK6sFXY8qih6UDb4khstxY9j31om4p2UMq80FZWcWF5ZR+rDte573fSPnU9lGH1GWbBYuaCiqRGsoNxBErmt/UbIAvsRZ37Rx865czeV4p1OKAEObD5bigQrGh26d/i4hPEyqksociMtdFcTgQbU97s7mv2320x8bgkaFwFpZZHVN7KletjdDdADXZfAB1TdbEr6FjjWcycU/LzJosFYlRbhVYHpGIIZj8HY1tZ40UxRY5IqKZGLY/jWBjx75MpJBPYLo5ACSSYnlM4ADHJbEZtyB1FrIrbEWO1EhfHyc1XRgxmLRKh6irFUtlpRsotjW5O/fbSVWF4JWRXYNEinlIrRhySTzaIJ3piVzrI7Egn31P+BJ4clnKBpldXJS7VkVV3sAkqMQNqI393rY50XLjXh3xV1jUAM+LAqzXYNKoqvYeTWNJUmR8IyxBUFWokuiXIAbBxIxI9ifcaa+PgTZaGRVIV2yZm6nx5gsvRkjPmjsCRVNoeQxqohxMjky2FGStFgMCxOwaPck7kE+41HqMRX77NmY1XHFWCSV1nAjYihTfNEjpGtHDDCaNiqXKmdOCSsrLgCrGvy/HFdhQ8nSwhu2E/FRMtiUh6cI+IYSZbyBqBonEDYbb9+wXw3Du6QvhgEwOANhe4klCm7tWYWARvpfCcSASoSuWXkBIexIFxc7AqykEsB7ke+u96P6c/ES42Qywxqoc4gpY5nSg3FYXve+3w0m5UhNqhX07wYlxCdw55ZZhHkhiayikmySxBodx/Ovo3osbrBEsi4uqKrKDdECu/nWVPprh1aNlTER0VQGlBHZq732Pfet9datdnHDxM5OwGjRoOtiQvUak6i9ADdGoOo0Ai2q6tqK0DKnU6NGgDkfVHoh4uHlCXlEkEsFDEjyvcbH99eJ4v0sxSSQxHItaxrhywGRCCDkxYJS2DsPI7jX0zWX1XhGljZEfBiNn8jyP96Oufl4lJXRUZNHybibxaF1EoUB8RuGUowt7skcyjt8bVY0ScQDAvLfOGGSKnUKVbdSSxJBYDa68eb7ey+qPSYeHgWQRZFYxG9L+aqOzEWQGbxvZO/m/I8eyKplCRBImIxChowD1oVXIM5G1EUBf7a5ZQadM0TsrCioyRWFUmWSz9tmVacOG32DHHEb7g3rLxZR5g/K5jp0qB+EmTEGSj7Ei2oHvXtpssoMls+cfLicG1L7dxFj2F4Xe5r3A06RBFMCf/UeVGorm6MhdVYqSuFjuPjzekrsGYPT05c6BlMmayYAqEFkhmXJj1KAKH/TV+AnGD4ozkLGgkKtjzA3TH37BibIu7G+2qSQtIrHLbh5DMjFma1yDGNATRIFrvY2H8MiAIxQqOXIzurMSaDKxWSiOou/SRRGxA8CnnaF9CZIuJePiFKBJHGZHSbWOrRiDsGZtiL2Pxp0/FRASq0cRLKoel6MSSErbrPUdvG/xbIONbOIiMis5HO46Gyxdix6wCfxuqK+RrNxHDtzETNVl5bTpIQVXdmahex2YAgDezpX0Ohs0ONVI/MaOOM2bJkDWrEHYR31E1QG2/YWKiNcTbtE+crKaAlOOJSvHUDX7X86uMl55VeIUVKiAF8ScRZbpUdwSCR/02XA/XJIxRSXLDY4PihAYLfwgF/07XpWFZECbot0sASBi5FM67h0put63oD+rcVRljcTkyKCjE5BAGyCqEjRBuQVvI37+9CnESkxpKTy8VINgbCMsvSo6a7jL2H866UcQjsx7SBFhVVAxxdgXt6G/jt2rydGUJmBpjHAYZAXUEqkbEUpc9Nr+TBQa6vf+zuCibnnNaEbfbBBZi1HNS+W+zF+/x413fp7gYZjIk2TSTH7V2qsIk84nZrDX8Lrv/T30+yOTMihUZWiAIsEXbNhSsdxRNnbWkeNv+xORxeA+l5HRZInDRszClcqDm55hNgEAdQob3Xet+v6J9NSwzLJkqKLFA5MyeFO1AXvd+B7beprReumPEouyHIk6jUXqDrYhsteoOgaDoGB1FanRoAbo1U6NAIkaK0DU6BlTq2q6toAro1bVdACuM4VJUKOLU9xZH+4315f659DBgjMEQLoyIBiWAjGx6ezECqB2Na9bovUSgmOz5h656e3DlziArgMhK7KDahpBQrEd1HYD31h5IVJMi3LyTrxti2KL0jYohoqoAoDffcD6X6/6LHxMeD9x2P7ggg13B9vgaxei/SyRRkTHmucuo2QobGsQexGI6u+2uaXA3LBSnR8v4fhGLwotKzSvlmQFxD5MiiukkLdgd6Pva+K4BTG8SoobJ6KdeSNKc+a5FkKKF9xv7DX0b1v6JVo2SDEZ2HDk9ZPktRI9v+NZ4vomQLKM7JjVUogAEfoussQAN9jZP8Q4TTqivJdHjeN4Nsiz7gRq8WDXgrE0ZB5IIvsbA8nVvUz2Mls5jEWVLaJI4Kuq+7ACh/o3qxe1vS5oCqyxEhFZGCqWVAcTGHdbz6bof3OliNTFHJdWpK4r2Zm/ymIvbtWVAYjb2zaaQ7yHEceWkmMaqqnl70WOY25iNtj7XvRq9Zp4VUs+3MjDqI8aDsFV7yHdi3j9/J1t4LgzPMkS9QMjJiWGI6cy1jvQ3K7A4it99eq9L+go4mizfNYxeNEZPjWRN/t/+I1cOJySaE5JM8f6ZwbyFWiiJ+2w5eJe7YYsSdlB6jdjXQ4X0SXMQC86ciN6XpidQhNj8CAB33u732+hcB6ZFDkYkxyIJ7nsKA37Ae3yffWkKLuhfa/Nd6v21uuD2yfM5PoXoghAeSmlO90OjIAFAdyRt3/412G0VqDreMaVENho1GpOqJZUnUgag6L0DJOitF6DoAi9TqmprQA3UXo0aBIkaNGjQUBOjRo0AGraNGgCujRo0AF6Do0aAK3ovRo0ADqGBU9iKOuXB9N8KgxEQIyypizb7d8jv2H9tGjUyirA1J6bCGRliRTGCEIUDEEbgV4/661aNGiIEg6NGjVAQTo0aNAiCdRlo0aADRo0aBIjzqSdGjQMjRo0aAP/2Q=="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pearl Millet
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
              Email: Ecogrove @example.com
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