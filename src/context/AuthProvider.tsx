'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/check-auth', {
                    credentials: 'include', 
                });
                const data = await res.json();

                if (res.ok && data.user) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Auth check failed', error);
                setUser(null);
            } finally {
                setLoading(false); 
            }
        };

        checkAuth();
    }, []);

    if (loading) return null; // or show a spinner

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
