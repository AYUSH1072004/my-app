'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) {
                alert(data.message || 'Signup failed');
            } else {
                alert('Signup successful');
                setForm({ name: '', email: '', password: '' }); // Reset form

                router.push('/Signin');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert('Something went wrong');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                <div>
                    <label htmlFor="name" className="block mb-1">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1">
                        Email:
                    </label>
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
                    <label htmlFor="password" className="block mb-1">
                        Password:
                    </label>
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
                    className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded mt-2 font-semibold"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpPage;
