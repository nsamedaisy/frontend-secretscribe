'use client'

import { useEffect, useRef } from "react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { API_URL, FRONT_END_URL } from "../_components/constant";
import axios from "axios";

interface Props {
    onLogout: () => void;
}

const SettingsDropdown = ({ onLogout }: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                closeDropdown();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const closeDropdown = () => {
        // Close the dropdown
    };

    const handleLogout = async () => {
        try {
            await axios.post(API_URL + "/logout");
            onLogout();
            router.push("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            ref={dropdownRef}
            className="absolute right-40 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10"
        >
            <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
                <FiLogOut className="w-5 h-5 mr-2" />
                Logout
            </button>
        </div>
    );
};

export default SettingsDropdown;
