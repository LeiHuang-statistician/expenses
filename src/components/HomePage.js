import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { ToastContainer } from "react-toastify";
import {React,useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { GetExpenses } from '../services/expenses';

const HomePage=()=>{
  const dispatch=useDispatch()
  //const expenses=useSelector(state=>state.expensesReducer.expenses)
  const expenses=useSelector(state=>state.expensesSlice.expenses)
  const token=sessionStorage.getItem('token')
  const costsum=expenses.reduce((n, {cost}) => n + cost, 0).toFixed(2)
 
  useEffect(()=>{
      GetExpenses(dispatch,{token})
  },[expenses])

    return   <div style={{wdith:'60%',marginLeft:'10%',marginRight:'10%'}}>
        <ToastContainer />
        <h3>New Expense</h3>
        <ExpenseForm />
        <hr style={{border: '1px solide grey'}}/>
        <h3>Your expenses</h3>
        <ExpenseList expenses={expenses}/>
        <b>Total: ${costsum}</b>
  </div>
}

export default HomePage;