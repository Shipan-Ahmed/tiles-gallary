'use client';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';


const SigninPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log("form data is submitted: ", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackUrl: "/tiles"
        })

        console.log("signin response: ", { data, error });
        if (error) {
            alert("Sign in failed: " + error.message);
        }
        if (data) {
            alert("Sign in successful! Redirecting...");
        }

    }
    return (
        <Card className='w-full max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign In</h2>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>
             
                    <Button type="submit" className="w-full bg-yellow-500 text-white px-4 py-2 rounded">
                        LOGIN
                    </Button>
                    <p className='text-center mt-4'>Don't have an account? <Link href="/signup" className='text-blue-500 hover:underline'>Sign Up Now</Link></p>
            </Form>
        </Card>
    );
};

export default SigninPage;