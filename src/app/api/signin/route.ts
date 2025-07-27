import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDB } from '../lib/db';
import { User } from '../models/schema';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

    const response = NextResponse.json(
        { message: 'Login successful', user: { name: user.name, email: user.email } },
        { status: 200 }
    );

    response.cookies.set('token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
}
