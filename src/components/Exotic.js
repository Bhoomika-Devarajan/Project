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
            Blueberry
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
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgYHBofGBwcHB4ZHRoYGRoaGhgYGRweIS4lHR8rIRgYJzgmKy8xNTU2HCQ7QDs0PzA0NTEBDAwMEA8QHxISHz0rJSs2PTQxNjQ0NDY+NDQ0NjQ0PTY0NzQ9NDU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADkQAAIBAgMFBQcDAwQDAAAAAAABAgMRBCExBRJBUWFxgZGhsQYTIjLB0fBCUuEUcvEVYpKyIzOC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACcRAAIDAAEEAgEEAwAAAAAAAAABAgMRIQQSMUFRcWEFEzKhFCKB/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAAAADXUmopyk0ktW3ZJc23oaaeMpyTcZxaTSbUk0pO1k2nq7rLqiHtRpToyl/64ybk/0xluv3c5cop3zeSbi+pG2tOlKM5wtOcXh3UcfitThWVSzaydl7yVtc+qALt1Emk2k3eyvm7a25mihj6U2lCpCTaulGUZXXNWeaINWvGpXpbklNRjUcnFqSipKKjdrJXztzs+TKXZE5PC7OjUShBww7jJSbkpQpRnGLvFbu9utN3eV1xuDjaXk6irioqcIZuU95qyuko6uT4LNLtZj/AFGjfd97T3uW9G+ttL88ikxk5tf1MadSUoSU4uO61Kgk1KKjvbz3oSnJK195x5FhTqKWKjKLTi6F01o05ppp9gCe8kxY+lfd95C99229G+8nZxtfW+Vj3SxMJNqM4ya1SabVtbpdqKXYde0ZJ1aSXv8AEfC18eeIq5X39X2F1Tw0Iyc4xipS+ZpZvjmwdJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhIyADCR4qU4yVmk1yauvBmwAGEjIABixkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAeJVEtWl2s42l5B7BFnjqa1kjzQ2jTm92Mk5crNeqIKyLeJo7hNABYcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGDJU7Z2zCgs85PRfVnG8WkoQlOXbFayyqVUleTSXUrp7Xi3aCc5dEcfhdoVsdW3Kb3YLOctd2PThd8Ed3gsHClHdirc3q2+bfFlDVs3w8X9l9tKp4ly/j4NEKVWXzPd6LN+WS8zbHZ8eN32v7EwE1TH3z9mfSNHBU1+iPer+puhTS0SXYrGKlWMVeTSXV2Ij2rTvaLcn/tTfnoRlOqt8tIY2Txchyxbeit2kKvV4yl5lFnX1x/jydUWWcsRFayXieP62n+5eZQTxsf0u/YQq+Idr3sYJ/q+PMJftl3ivaKlDJKcn0jb/ALWNWz9uSr1FGFK0FnOUpZpckkrXb68yowdCdfSK3f3O6iuql+ruLNYyFCG5Ts5fqlwb524+hbV1dsn3zeR+uX+DjivR0EppK7aS6mnDYyFTe3JqW67S3XdJ2va+mjRx8o1MVNRTcucn8sVzssu467Z+BjRgoQWS1fFt6t9Tb0/USubaji+X7ItYSzJgyazgAAAAAAMAj4zFRpQc5NJLnlnwRxtJawbzXUrxjrJI5mntmtLfUYqe7FWUV8SerlJ3to42Vk9ewp5Yubk3OVWMo6rKC6JqUG3ftMU+tUZJRi3vv0Wwr15p9Ap1FJXTTXQ9NnA7J2rPfnGMt1cXZOz4WT7yZVxMW/iqSnJc9F2JWSNXe9zC+XRTUsOr/q4Xa343WbzWhBqbcppySu3HsSfU5yrtGC5kGjiFOcpLLNZPirWv5ELbJQSa+efo6+kcVr8F/ifaCTXwpLzfj/ByG28PKu7ue69E2+PN55k2tNcMl0yImIpRnrmXHq9PTGrmKxneezOzqVChGNJqV85S4yk/mk+XZw0LhnzPB4+pS+WTS7fo8iXX25VmrObXYkvGyDkefb0Fjm3u77O3xOPhD5nnyWbKjF7ck8opR6tq5x39S4u8pOcuHBLuvmyLUx8nqzPOFk+G8X4L6v01Py9OhqYqEpqM6j3mrpK7bV7ZN9mhZ4WtHSCsvzU4Oc3NqV7OOnPt7jrsJjEoQdvimu7L5r+Oh5N1MYNxS5+fJXbXGuTjn0TsbtKNNZ5vglr/AAcbt7a05fO3FPSKyX8nUe4U053WfHjkc/W2BPETcpPchwuryt0jw7zz65PuyXCMVkWV2zMC5xVSNSUU+EW03Z2sdjgdjQp2lXnKtNfLBtbkeSaStOXV37OJ6wGzoUYKMc0uL1Pcp3dki6u3tk2lr9fgj28GzH41tfE8lpFZLpkQ8JgZ4iWXwwTzlb05stMLsRzalUbS/bxfbyL6lTUUkkklokb6Ojstl33Pj4IOXpGrBYONKKjFWXm3zb4skgHsRiorEQMgAkAAADABrrVVGMpPSKbfYldnG85YNhoxUIuLUrburvkss73NOzNoQrw34PK7TXFNap+veVntDi4tOje97OfZqodr9F1OJqS1ck4xblhEj7Q0knHDRjuptOdrQ3lrurWb66deBQ43GurKW9Jt2d39Oi10NOKxSS3YZdn0IVOSimm7X1z1Odnye10/RxT7s+jMayoxbV3KT7X2dh6/qnb16kWebTfDJfUS5HdPSyLNtSszOy6lqj6xflb+TXCDZ7oxam29FGXmrL1IzSlHCuyMWsJdCW8paOzV1zX4jYlYi4F7qb/d9CRElmHe3D293jkYjDVa9xpdbWyzI88U76tfn54DDnY2eMTa38kKc4RtvzjHlvPN9i1Z6nUvJ7yUv+UdeOTs/Al4XA4aUlKVG8uspNeF8+8qnPt9M7NyrjwivwuKlVmoYaDnK63pyi1CMeMra6X1t3nc1MJu0VFaws16PybPWBnThFRhGMVyilFeCN2Pn/45dd1Lvkr+Vzy7HKyxcYeNa5ynr+TOFofCrvsSJmSRXUMQlG7dkuJY7Ej72Tk18Mclf9Uvsl6oyx6dzs7N5Zmsfa2Zo4SVTTKPN/TmW2EwMKeiu+b+nIlJGT2qOkrp8LX8mdybMgA1kQAAAAAAAADyQtrVN2jN9LeORp2ltaFCUIy/Ve713Ulq1q7vI5X2j9pHUg4001G3HJyd1nblb1K5NSTSfJo6eiVk1i40pNhbbnhveJNbs5XSto1llw4+R7xG0lLealm83xavxd+LyK7D4fehZ2vJ3eV+N27eCJmF2MrWU5N8XZFMroVPtb/o9u1dNXJ7wzVCafPr38TRiZJyTXB59vD09Cwr7GcPi37Nc0vuVmJjBTlFO6svGyb9fQsrtU/BoptU/wCJ6jUPUaqutStr1ZQe6+jz5NZM20sRbXv6cOwsRco8FzKrFKyeiIzrXT4u1n3tZLwILrRz3Xa+tr3z7jXRk4xcpZdOOWl8ySjvk7Gtey72fFyb/wBqWXC/BdxPlG3Tn9yjwu09yKSd283dO6b4G2O2rpJbufDXy7wyucZOX4JFaObazXoV9WV00vzuJLxTava3arEN6vsy72EThq8niV3G6za80SaEn3mihd5FhgcP8VkQm8QsliLbZcJS4WRK2hXTagnlHOXbw8vU1VMbGlBpNNpXbWaj930K3Y1SVeeUXut5J6yk+LPOtlNbNL6PFtbcnL0i1w2ElWlFLR6LglxkzuMHhlTioR0S8ebNWz8CqS5yer+i6E0t6PpXUnOb2T/o8uc+5mQAbyAAAAAAAAABgAh7Vxio0alRuyhFvvSyXicbwI+ee2W1W60rJS3E0oq+dm7vq1d5dDnKWKvF1HLebjbW1k2sly/gjS2jJ705xvBS3t+DU4Zuz+KOju7WeeZW1azeUE1Ccr20s88stFqyMO3NPpunVUYR7X9lmsW04yjLNO7ty/b2aLuOr2JteFV7q+GazcOaWri+K8/U4aNRfKlZnuClCSlFtSVmpLg1o0VX0xtXPn0V9XD917nJ3G1JZ876f4KKqlvSa4SWfSKUZLz9T3tDau/QjNq0ndS/uWTt0+5QRxMtHos322+3qWUQfYk/Jq6SLda0ssbTckpRzabuunB+pBlKVs8n3flup5jOWvXLsyyeZeUIQnCLazXNrR2uWvg0v/VFNTjKLu+PnloR54nNK9o+duTsb9qQlGo89ePQr69O0ua+/DI7vyd1+S3w+Jp2tu3va923lnwRsWLS+SNuxW8+9FPRlbJPXNG+ctM8lp2ap27yPs4kmW3vr6tPszMqT4/naQMNK71J1uQItYSsLG93f85smVa+6t1fNPX/AGx4Ltfp2lZCbinLl5y4d3M3YFOUm27vj1ZBrXyZb3qwmVqEp0pRjrKy81fyudp7H7FdGClJK7zXPPi+71K/2bwKnON1eMPifVrKK8X5HchwTes8Xqb3zBf9BkAmYAAAAAAAAAAAADzY432k23Gblh0soyW9f9W7JZJclK3gdkz437UyqKrUeV3KSbTcZK7d7MjNNrEaukoVrafpcFf7S7SVSEqMLuzjvtZKNpXS6/L3FNO6hFW0d5dMrGzD0M5SaSc5WaT/AE3WXdmS6OH+HX5UuOVs7PN6NMQioxw93pao1x7SFhoLfz8fRk5wadvD0I9eUE47sXFvPNqz7LNqxu/qLTeV8l3cXcm+TRZFZp6x1VRjGnHVfFJv9N/rkV8I8eby69X+cTdXhvSb/dm/RGZw9F5HY8CuSXg8e+fP8/GyywGKWSds5LwKmpBrNlx7P7DqVJqU4uFKLu3JNb1v0xv6kbJxitbLLrIxjrZ72phnJu6W/HzS5lQp5Wt0/H1Oy2lTTnvJcTmto4VwndaS0/wIvuRZXNSiitVPdlbl/leRLhTv3EhU9611w4/mZ6jRjz7dfogVykZpUt387DbKduz88j04Wj/JEqV1z++pFyKJTem5zv2csrItdmU2+BS4KLnJJLvO79ntnb01l8MbOT4dIrq/QjHlmDqLlGLOo2BhNymr/NLN9nD86lwkaaSKjaeP3/8AxUm227Sa0tyT9WdnNQXJ4j2T0m4TG+8qzUXeEUlfnJt5p8smWJD2dg1SgorXWT5tkwR3OfJxmQATOAAAAAAAAAGDh/bPZWfvUvhfzPk+vbbU7g016cZRcZJNNWafFAtptdU1JHwrE4VqSSyzTtwtq/qTcHRfxZZR4uzylmlnrx8Cd7R4B0cRKELbrd4xb0UuT4avM94WFoSTi4tqN0+G6n99SqyxRR76ujkZfOHMY+F435Stb+632ZX0k1NN5qWX55F3Spb6qr+1rnfNXI8cJ8SuuPnp4F274Nlsk9F7Zm7DYZzluxV2/Tmep0LHqjNxkpRya0+pGXdj7fJl5x9vk6bZWxoQalJKc+b0j2L6lni3ZWRTYbbUVwku5NeT0JL23TeTv22f0PMirO/bE2Yo/ud2zTZoqL4XcgYxJtdCVj8VGycXdPP7ZMqatRyu2u787D04vUmb4zeaFBa6K3jzYbXD87TXdnpLod0kp6anm2tFLyfB2Kitg6imotWvfPhZal5Gk+BbYGDtZ6ctfUhJHZ2Lt/Jn2c2PvNJOyVt6T0XX+Dv6NenSgoxu7cIrV829CjwTlokvD7FvTgrfE0vIzynb4il9ng9Q9lyzXWrVKz3UrRf6Vx/uf4i12bs6NJX1k9X9EYw8baKxNpE6qcfdN6zI36RtABoIgAAAAAAAAAAAAiYlks11KdwDjfaLY8cQtd2aVk9U+kkVGB2LOnSUG4OSumk3azeWbSvkztcVhXyKbEU5LgRlVGXkujZLEt8HN4b2ejGMt+ectN3hyzevHkU+JoyoytNXV8pK9n9n0OoxFZoq8TVumnmnqmS8GuHU2N7J6VFk1k7eh4ceLSfYYxOGSzg93pqv4K7/AFDcl8Sy48VYaehXfGXDLdKNrvL85HiFWKzSz5v7Gmsmna9/zLyIGMxDgdNEko86Wjnd3bMJ35HOS2g+DZhbRmuBHgzu6tezpoxXM2xSRyf+q1uCXh/Jb7L95VVpwl6JnG8If5EC5pTV7XLCE0tJJvsuQsPsCrN/NCC75P6epf4D2ZUfmnKXgkZZu6XEViMV3VOXC4In9VUt8M34JHrDbKr138c5KHFvj2XOmw2zqcNIq/N5vxZYQgRj0evbHv4MLkb8DSUIRgm2oxSTbu7JWzfEsIshUyZA3ZhA9gAAAAAAAAAAAAAAAAA0V2V1ei3wLg87q5AHHY/ZspaJFJX2LV5LxPpfu1yRR7c2U6mcYwbX7t9Zf/MreKOSbzgsjY0fPMXsiql8vg7lI9mznNQUHvN8tOr5I7bF7GxK+SEV2Z/9maYYDG6bsI9d3P8A7WMsrrPCiWqz5KLbGHjTSzzSS7bKxy2IUpyvJ3+iPplD2X3nvVpObet/pwRYQ9mcMv0LvS+xoipdq002dUpRUX6PkMcKSaOAvwPrtPYVFaQj/wAUTaWzYLSEf+KJYUO6PwfLMHsl/sb7mdDgsDNWtB+B9Ao4FftXgTYYeK4IYVyu30cXhsLU6ruLGjg58Wzp1FckejpU5aUtHBS6k2ngnxZNAImqFBI2pGQAAAAAAAAAAAAAAAAAAAAAAAAADFjIAPO6uRjdXJHsAHjcXJeBndXI9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              Dragon Fruit
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
              Strawberry
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
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lychee
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XulDbMMs3WqBL0Pp2JnpPwjM34eU5IypFg&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Avacado
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5FCxXbeyi7NsphxWB0C_3X1b0A5tS8IsYIbIeYpxEWv7BJjbNhoeTxG6pYDacdvZQzQ&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rambutan
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