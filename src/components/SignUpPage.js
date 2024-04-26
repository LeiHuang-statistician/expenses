import { useState } from "react"
import { Form,InputGroup,FormControl, Button } from "react-bootstrap"
import { SignUp } from "../services/authentication"
import { useDispatch } from "react-redux"

const SignUpPage=()=>{
    const [name,setName]=useState()
    const [description,setDescription]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassowrd, setConfirmPassword]=useState('')
    const dispatch=useDispatch()
    return <div style={{width:'30rem',margin:'auto', paddingTop:'8px'}}>
        <Form onSubmit={event=>{
            event.preventDefault()
            SignUp(dispatch,{name,email,password,description})
        }}>
            <h4 style={{textAlign:'center'}}>Welcome back</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Email'
                onChange={event=>setEmail(event.target.value)}></FormControl>
            </InputGroup>

            <InputGroup className='mb-3'>
                <FormControl placeholder='Name'
                onChange={event=>setName(event.target.value)}></FormControl>
            </InputGroup>

            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                onChange={event=>setPassword(event.target.value)}></FormControl>
            </InputGroup>

            <InputGroup className='mb-3'>
                <FormControl placeholder='Comfirm Password' type='password'
                onChange={event=>setConfirmPassword(event.target.value)}></FormControl>
            </InputGroup>

            <InputGroup className='mb-3'>
                <FormControl placeholder='Description' 
                onChange={event=>setDescription(event.target.value)}></FormControl>
            </InputGroup>

            <Button type='submit' variant='success' style={{margin:'auto', display:'block',width:'10rem'}}
            disabled={password!==confirmPassowrd || password.length<=0}>
                Sign Up
            </Button>
        </Form>
    </div>
}

export default SignUpPage;