'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiSettings, FiLogOut } from 'react-icons/fi';

const SettingsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        // Perform the necessary logout logic here
        // For example, clear the user's session, remove tokens, etc.

        // Redirect the user to the logout page
        router.push('/logout');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex rounded-md my-6 justify-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4"
            >
                Settings
                <FiSettings className="w-5 h-5 ml-3" />
            </button>
            {isOpen && (
                <div className="absolute top-10 right-0 bg-white shadow-md rounded-md py-2 px-4">
                    <button onClick={handleLogout} className="flex items-center space-x-2 cursor-pointer">
                        <FiLogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default SettingsDropdown;