import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAllScanners } from '../../redux/thunks/scannersThunks';
import useStyles from './Dashboard.styles'

const Dashboard:React.FC = () => {
  const classes=useStyles();
  const dispatch = useAppDispatch();
  const scanners: any[] = useAppSelector(state => state.scannersReducer.scanners);
  useEffect(() => {
    //once you have a backend url in the env you can call this action 
    //dispatch(getAllScanners());
   
  }, []); 
  return (
    <>
      <p className={classes.P} >Dashboard component here</p>
    </>
  )
}

export default Dashboard
