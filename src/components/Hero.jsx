import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
            <div
                className=" h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: 'url("/home.jpg")',
                }}

            >
                <div className="container text-white text-center">
                    <h1 className="text-4xl font-bold mb-4 text-amber-300">Welcome to <span className='text-white'>Chill</span>Ax</h1>
                    <p className="text-md mb-6">Staycation Nyaman, Aman, Dan Terjangkau</p>
                    <Link to="/booking" className="p-3 rounded-sm hover:bg-red-600 font-base bg-primary">Explore Now</Link>
                </div>
            </div>
        </>
    )
}
