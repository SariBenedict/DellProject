import axios from 'axios';
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAllScanners } from '../../redux/thunks/scannersThunks';
import useStyles from './Dashboard.styles'

const Dashboard:React.FC = () => {

  const classes=useStyles();
  const dispatch = useAppDispatch();
  const scanners: any[] = useAppSelector(state => state.scannersReducer.scanners);
  useEffect(() => {
  
   
  }, []); 

  return (
    <>
      <p className={classes.P} >Dashboard component here</p>
    </>
  )
}

export default Dashboard
