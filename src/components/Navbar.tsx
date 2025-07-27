"use client";

import React, { useState } from "react";
import Link from "next/link";
import 'remixicon/fonts/remixicon.css';
import { useAuth } from "../context/AuthProvider";

const Navbar: React.FC = () => {
    const [isMenu, setIsMenu] = useState(false);
    const { user, setUser, loading } = useAuth();

    const closeMenu = () => setIsMenu(false);

    const handleLogout = async () => {
        try {
            await fetch('/api/signout', { method: 'POST' });
            setUser(null);
            alert("You have been logged out.");
        } catch {
            alert("Logout failed.");
        }
    };

    return (
        <header className="bg-[#0a000aff] fixed top-0 left-0 w-full z-50">
            <nav className="flex justify-between items-center h-16 sm:h-20 px-10">
                <div className="text-2xl sm:text-3xl text-white">Perfume.com</div>

                <div
                    className={`bg-[#330033ff] absolute top-0 ${isMenu ? "left-0" : "left-[-100%]"} w-full min-h-[80vh]
            transform transition-all duration-300 ease-in-out
            flex justify-center items-center
            md:static md:min-h-fit md:w-auto md:bg-transparent`}
                >
                    <ul className="flex md:flex-row flex-col items-center gap-6 text-white" onClick={closeMenu}>
                        <li><Link href="/" className="nav-links active">Home</Link></li>
                        <li><Link href="/product" className="nav-links">Products</Link></li>
                        <li><Link href="/mens" className="nav-links">Mens</Link></li>
                        <li><Link href="/womans" className="nav-links">Womens</Link></li>

                        {!loading && (
                            user ? (
                                <li>
                                    <button onClick={handleLogout} className="nav-links">Sign Out</button>
                                </li>
                            ) : (
                                <>
                                    <li><Link href="/Signup" className="nav-links">Sign Up</Link></li>
                                    <li><Link href="/Signin" className="nav-links">Sign In</Link></li>
                                </>
                            )
                        )}
                    </ul>
                </div>

                {/* Mobile menu icon */}
                <div
                    className="md:hidden text-white text-2xl cursor-pointer z-50"
                    onClick={() => setIsMenu(!isMenu)}
                >
                    <i className={isMenu ? "ri-close-line" : "ri-menu-line"}></i>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
