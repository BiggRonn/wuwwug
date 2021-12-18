import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './login.scss';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <div className='cardContainer'>
            
        <Card className='card'>
            <h2 className='text-center mb-4'>Sign Up</h2>
        <Form className='form'>
            <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id='passwordConfirm'>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
            </Form.Group>
            <Button type="submit" className='w-100 mt-4 mb-2'>Sign Up!</Button>
        </Form>
        </Card>
        <div className="w-100 text-center mt-70 loginSection">
            Already have an account? <span>Login</span>
        </div>
        </div>
    )
}
