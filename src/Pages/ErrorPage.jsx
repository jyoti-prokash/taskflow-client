import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-6xl text-red-600'>404</h1>
            <Link to="/"><button className='m-5 p-2 text-white bg-green-400'>Home</button></Link>
        </div>
    );
};

export default ErrorPage;