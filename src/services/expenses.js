//import { ActionCreators } from "../app/expensesReducer";
import { setExpenses,newExpense,editExpense,deleteExpense,
         setExpensesError,newExpenseError,editExpenseError,deleteExpenseError} from '../app/expensesSlice';
import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}/items`,
    withCredentials:"true"
})

// axiosInstance.interceptors.request.use(config=>{
//     config.headers={authorization:'Bearer '+sessionStorage.getItem('token')};
//     return config
// })
export const GetExpenses=async(dispatch,token)=>{
    try{
        //api call
        // const expenses=[
        //     {_id:1, item:"food",cost:"5.6"},
        //     {_id:2, item:"gas",cost:"1.6"},
        //     {_id:3, item:"water",cost:"7.6"}
        // ];
        const {data}=await axiosInstance.get(' ')
        //console.log(data)
        //dispatch(ActionCreators.setExpenses(data))
        dispatch(setExpenses(data))
      
    } catch {
        //console.log('Error')
        dispatch(setExpensesError())
    }
}

export const NewExpense = async (dispatch, expense) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', expense);
        dispatch(newExpense(data));
    } catch {
        dispatch(newExpenseError());
    }
}

export const EditExpense=async (dispatch, expense)=>{
    try {
        //api call
        await axiosInstance.put('', expense);
        dispatch(editExpense(expense));
    } catch {
        //console.log('Error!')
        dispatch(editExpenseError())
    }
}

export const DeleteExpense=async (dispatch, expense)=>{
    try {
        //api call
        await axiosInstance.delete('', { data:{id:expense._id}});
        dispatch(deleteExpense(expense));
    } catch {
        //console.log('Error!')
        dispatch(deleteExpenseError())
    }
}