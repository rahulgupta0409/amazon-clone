"use client"
import React, { FormEvent } from 'react';
import { baseUrl } from '@/constants/url';
import { useRouter } from 'next/navigation';
import { Button, FormControl, FormControlLabel, FormLabel, Input, TextField } from '@mui/material';
import "./style.scss";
import Footer from '../footer/page';
import Navbar from '@/components/navigator/navbar/page';

const LoginPage = () => {
    const router = useRouter()

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        try {
            await fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            }).then(res => res.json()).then((res: any) => {
                if (res?.token) {
                    localStorage.setItem("auth", res.token);
                    router.push("/lander")
                }
            });
        } catch (error) {
            console.error('Error setting data:', error);
        }
    };


    return (
        <>
        <Navbar />
        <div className="login-screen">
            <div className="first-portion"></div>
            <div className="main-portion">
                <React.Fragment>
                    <form onSubmit={login} className="login-field">
                        <FormControl className="container">
                            <FormLabel component="legend" className='label-container'>Email</FormLabel>
                            <TextField className="email-container" type="email" name="email" size="small" placeholder="Email" variant="outlined" required />
                            <FormLabel component="legend" className='label-container'>Password</FormLabel>
                            <TextField className="password-container" type="password" name="password" size="small" placeholder="Password" variant="outlined" required />
                            <Button className="submit-container" variant="outlined" size="small" type="submit">Login</Button>
                        </FormControl>
                    </form>
                </React.Fragment>
            </div>
            <div className="last-portion"></div>
        </div>
        <div className="create-account-container-div">
        <Button className="create-account-container" variant="outlined" size="small" type="submit">Create Your Amazon Account</Button>
        </div>
        <Footer/>
        </>
    )
}

export default LoginPage;