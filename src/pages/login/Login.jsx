
import './login.scss';


import React, { useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuthContext();


    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();


        const userEmail = emailRef.current.value;
        const userPassword = passwordRef.current.value;


        try {
            setLoading(true)
            const user = await login(userEmail, userPassword);
            console.log(user);
            if (user) {
                 navigate("/", { replace: true })
            }

        } catch (error) {
            console.log(error.message)
            toast.error('failed to sign in');

        }

        setLoading(false)



    }

    return (
        <div className='cardContainer'>

            <Card className='card'>
                <h2 className='text-center mb-4'>Log In</h2>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Button disabled={loading} type="submit" className='w-100 mt-4 mb-2'>Login</Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-70 loginSection">
                New here? <Link to="/signup">Create an Account</Link>
            </div>
        </div>
    )
}

