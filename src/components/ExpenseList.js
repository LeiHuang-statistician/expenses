import {React,useState, useEffect} from 'react';
// import {useDispatch,useSelector} from 'react-redux'
// import { GetExpenses } from '../services/expenses';
import {Button, Row, Col} from 'react-bootstrap'
import ExpenseForm from './ExpenseForm';

export default ({expenses})=>{
  

    return expenses.map(e=>
        <div key={e._id} style={{marginBottom:'1rem'}}>
            <ListRow id={e._id} expense={e}/>
        </div>
        )
}

const ListRow=({expense,id})=>{
    const [isEditing,setIsEditing]=useState(false)
    return isEditing 
    ? <ExpenseForm id={id} expense={expense} setIsEditing={setIsEditing}/>
    :<div>
        <Row>
            <Col>{expense.item}</Col>
            <Col>${expense.cost.toFixed(2)}</Col>
            <Col><Button variant="warning" onClick={()=>setIsEditing(!isEditing)}>Edit</Button></Col> 
        </Row>
        <hr />
    </div>
}