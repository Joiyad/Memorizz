import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#00000',
  },
  subHeading: {
    color: '#EEF2F3',
    textAlign:'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
  }
}))