'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider'; 

const SignInPage = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();
    const { setUser } = useAuth(); // ✅ Set user after login

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', // Important for cookie to be saved
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Login failed');
            } else {
                setForm({ email: '', password: '' });
                alert('Sign-in successful');

                setUser(data.user); // Set user in context

                router.push('/');
            }
        } catch (err) {
            console.error('Sign-in error:', err);
            alert('Something went wrong');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

                <div>
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-1">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded mt-2 font-semibold"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInPage;
