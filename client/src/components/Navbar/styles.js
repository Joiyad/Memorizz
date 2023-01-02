import { makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@mui/styles';
import { deepPurple } from '@material-ui/core/colors';
// import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    padding: '10px 50px',
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    width: '400px',
  },
  profile: {
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundcolor: deepPurple[500],
  },
}));