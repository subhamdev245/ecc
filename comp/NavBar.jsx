import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">My Website</div>
                <ul className="flex space-x-4">
                    <Link to = "/"><li className="text-white hover:text-gray-300">Home</li></Link>
                    <Link to = "/about"><li className="text-white hover:text-gray-300">About</li></Link>
                    <Link to ="/products" ><li className="text-white hover:text-gray-300">Product</li></Link>
                    <Link to ="/cart" ><li className="text-white hover:text-gray-300">Cart</li></Link>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
