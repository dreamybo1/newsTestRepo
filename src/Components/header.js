import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ExitToApp, Face, Home, Newspaper } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedSetter } from '../Redux-Toolkit/slice';



export default function ButtonAppBar({pageName}) {
    const logged = useSelector(store=>store.login.logged)
    const dispatch = useDispatch()
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color='secondary' position="static">
          <Toolbar>

            <Link style={{textDecoration:"none", color:"white"}} to={"/newsTest"}>
                <Button color="inherit">
                    На главную 
                    <Home/>
                </Button>
            </Link>
          
            <Link style={{textDecoration:"none", color:"white"}} to={"/newsTest/news"}>
                <Button color="inherit">
                    Новости 
                    <Newspaper/>
                </Button>
            </Link>

            {logged || localStorage.getItem("logged") === "true"

            ?

            <Link style={{textDecoration:"none", color:"white"}} to={"/newsTest/profile"}>
                <Button color="inherit">
                    Профиль 
                    <Face/>
                </Button>
            </Link>

            :

            <Link style={{textDecoration:"none", color:"white"}} to={"/newsTest/login"}>
                <Button color="inherit">
                    Профиль 
                    <Face/>
                </Button>
            </Link>

            
            }

            



            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {pageName}
            </Typography>

            <Link to={"/newsTest"}>
                <IconButton onClick={()=>{dispatch(loggedSetter(false))}}>
                    <ExitToApp/>
                </IconButton>
            </Link>
        </Toolbar>
        </AppBar>
      </Box>
    );
  }