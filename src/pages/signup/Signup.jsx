import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './signup.scss';
import { auth } from '../../firebase/config'
import toast from 'react-hot-toast';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [loading, setLoading] = useState(false);


    async function register(e) {
        e.preventDefault();


        const userEmail = emailRef.current.value;
        const userPassword = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        if (userPassword !== passwordConfirm){
            return toast.error('passwords do not match')
        }

        try{
            setLoading(true)
            const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            console.log(user);

        } catch (error){
            console.log(error.message)
            toast.error('failed to create an account');

        }

        setLoading(false)
        toast.success('New Account created! Welcome to WuwWug!')

    }
    const login = async () => {

    }
    const logout = async () => {

    }
    return (
        <div className='cardContainer'>
            
        <Card className='card'>
            <h2 className='text-center mb-4'>Sign Up</h2>
        <Form className='form' onSubmit={register}>
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
            <Button disabled ={loading} type="submit" className='w-100 mt-4 mb-2'>Sign Up!</Button>
        </Form>
        </Card>
        <div className="w-100 text-center mt-70 loginSection">
            Already have an account? <span>Login</span>
        </div>
        </div>
    )
}
