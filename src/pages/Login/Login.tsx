import React from 'react'
import useStyles from './Login.styles';

const Login:React.FC = () => {
    const classes=useStyles();
  return (
     <>
      <p className={classes.P}>login component here</p>
    </>
  )
}

export default Login;