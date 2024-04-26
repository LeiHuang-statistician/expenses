import axios from 'axios';
import { userAuthenticated } from '../app/authenticationSlice';

const axiosInstance=axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}`
})

export const SignUp=async(dispatch,credentials) =>{
    try {
        const {data}=await axiosInstance.post('/register',credentials);
        dispatch(userAuthenticated(data))
    } catch {
        console.log('Error!');
    }
}

export const SignIn=async(dispatch,credentials) =>{
    try {
        const {data}=await axiosInstance.post('/auth',credentials,{
            withCredentials:true
        });
        dispatch(userAuthenticated(data))
    } catch {
        console.log('Error!');
    }
}