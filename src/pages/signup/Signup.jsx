
import React, { useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './signup.scss';

import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuthContext()

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        const userEmail = emailRef.current.value;
        const userPassword = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        if (userPassword !== passwordConfirm) {
            return toast.error('passwords do not match')
        }

        try {
            setLoading(true)
            await signup(userEmail, userPassword)
            navigate("/", { replace: true})

        } catch (error) {
            console.log(error.message)
            toast.error('Failed to create an account')

        }
        setLoading(false)
     
    }

    return (
        <div className='cardContainer'>

            <Card className='card'>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form className='form' onSubmit={handleSubmit}>
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
                    <Button disabled={loading} type="submit" className='w-100 mt-4 mb-2'>Sign Up!</Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-70 loginSection">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
