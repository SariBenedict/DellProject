import axios from "axios";
import {GET_ALL_SCANNERS_URL }from '../config/config'

export const getAllScannersFromServer=async()=>{
 return await axios.get<any[]>(GET_ALL_SCANNERS_URL);

}