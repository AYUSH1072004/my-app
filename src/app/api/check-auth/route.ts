import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDB } from '../lib/db';
import { User } from '../models/schema';

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        await connectDB();

        const user = await User.findById((decoded as any).id).select('-password');
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
}
