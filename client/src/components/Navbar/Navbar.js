import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import "./styles";
import useStyles from "./styles";
import logo from "../../images/m-logo.png"
import {Link, useNavigate} from 'react-router-dom';
import {useState } from 'react';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = useStyles();
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
      dispatch({ type: 'LOGOUT'});
      navigate.push('/');
      setUser(null);
    }

    // useEffect(() => {
    //   const token = user?.token;
    
    //   //JWT...
    //   setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [])
    
  return (
    <div>
      <AppBar className={classes.appBar} position="static" backgroundcolor="#0F98BE">
          <div className={classes.brandContainer}>
            <div className={classes.logo}><img className={classes.image} src={logo} alt="memories" height="60"/></div>
            <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">Memorizz</Typography>
          </div>
        <Toolbar>
        {
          user? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
            </div>
          )
          :
          (
            <h2>login</h2>
          )
        }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar