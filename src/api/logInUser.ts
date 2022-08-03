import axios from "axios";
import {LOG_IN_URL }from '../config/config'
import { LogInDetails } from "../pages/Login/Model";


export const logInUser=async(body:LogInDetails)=>{
    return await axios.post<string>(LOG_IN_URL,body);

}