import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/perfume';

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI');
}

const cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'perfume',
            bufferCommands: false,
        }).then((mongoose) => {
            return mongoose;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
