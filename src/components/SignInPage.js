import { useState } from "react"
import { Form,InputGroup,FormControl, Button } from "react-bootstrap"
import { SignIn } from "../services/authentication"
import { useDispatch } from "react-redux"

const SignInPage=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    return <div style={{width:'30rem',margin:'auto', paddingTop:'8px'}}>
        <Form onSubmit={event=>{
            event.preventDefault()
            SignIn(dispatch,{email,password})
        }}>
            <h4 style={{textAlign:'center'}}>Welcome back</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Email'
                onChange={event=>setEmail(event.target.value)}></FormControl>
            </InputGroup>

            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                onChange={event=>setPassword(event.target.value)}></FormControl>
            </InputGroup>
            <Button type='submit' variant='primary' style={{margin:'auto', display:'block',width:'10rem'}}>
                Sign In
            </Button>
        </Form>
    </div>
}

export default SignInPage