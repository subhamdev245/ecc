import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Error 404</h1>
                <p className="text-lg mb-4">Oops! Page not found.</p>
                <Link to="/"><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Go Back
                </button> </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
