import {React, useState, useEffect} from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { DeleteExpense, EditExpense, NewExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';



export default ({expense, id,setIsEditing})=>{
    const items=['food','gas','water']
    const [cost,setCost]=useState(0);
    const [item,setItem]=useState(items[0]);
    const [isNewExpense, setIsNewExpense]=useState(true)
    const dispatch=useDispatch();

    useEffect(()=>{
        if(expense!==undefined){
            setIsNewExpense(false)
            setCost(expense.cost)
        }
        else{
            setIsNewExpense(true)
        }
    },[])
    return <Form
        onSubmit={event=>{
            event.preventDefault();
            if(isNewExpense){
                //create a new expense
                NewExpense(dispatch, {item:item,cost:Number(cost)});
            }
            else {
                EditExpense(dispatch,{id:id, item:item,cost:Number(cost)})
                setIsEditing(false)
            }
        }}
    >
        <Row>
            <Col >
                <Form.Label>Item</Form.Label>
                <Form.Select style={{width:'60%'}} as='select'
                    onChange={event=>setItem(event.target.value)}>
                    {items.map(d=><option>{d}</option>)}
                </Form.Select>
            </Col>
            <Col >
                <Form.Label>Cost</Form.Label>
                <Form.Control style={{width:'60%'}} type='number' step='0.01'
                    placeholder={cost}
                    onChange={event=>setCost(event.target.value)}/>
            </Col>
        
            <Col style={{marginTop:'auto'}}>
                {isNewExpense
                ?<Button variant='primary' type='submit'>Add</Button>
                :<div>
                   <Button style={{marginRight:'2px'}} variant='danger'
                   onClick={()=>DeleteExpense(dispatch,expense)}>Delete</Button>
                   <Button style={{marginRight:'2px'}} variant='success' type='submit'>Save</Button>
                   <Button style={{marginRight:'2px'}} variant='default' onClick={()=>setIsEditing(false)}>Cancel</Button> 
                </div>} 
            </Col>
 
        </Row>
    </Form>
}