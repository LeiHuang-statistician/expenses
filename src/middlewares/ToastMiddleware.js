import { newExpense, editExpense,deleteExpense, 
         setExpensesError, editExpenseError,newExpenseError, deleteExpenseError} from "../app/expensesSlice";
import {toast} from 'react-toastify'

const ToastMiddleware=()=>next=>action=>{
    switch(action.type){
        case newExpense.type:
            toast.success("New expense added sucessfully")
            break;
        case editExpense.type:
            toast.success("Expense edited sucessfully")
            break;
        case deleteExpense.type:
            toast.success("Expense deleted sucessfully")
            break;
        case setExpensesError.type:
            toast.error("Error loading expenses")
            break;
        case newExpenseError.type:
            toast.error("Error adding new expense")
            break;
        case editExpenseError.type:
            toast.error("Error editing expense")
            break;
        case deleteExpenseError.type:
            toast.error("Error deleting expense")
            break;
        default:
            break;
    }
    return next(action);

}

export default ToastMiddleware