import React from "react";
import { Link } from "next/link";

const Button = () => {
    return (
        
         <div class="md:flex space-x-4">
                <Link href='../page/login' class="bg-transparent text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">Login</Link>
                <Link href="../page/signup" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Sign Up</Link>
         </div>
        
    );
};

export default Button;
