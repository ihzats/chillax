import React from 'react';

export default function Expanding() {
    return (
        <div className='mt-20 mb-20 bg-gray-200'>
            <div className='container flex flex-col md:flex-row md:items-center gap-10'>
                <div className='w-full md:w-1/2'>
                    <img src="/orang.jpg" alt="" className="w-full" />
                </div>
                <div className='w-full md:w-1/2 pt-6'>
                    <h1 className='text-2xl font-bold font-chillax'>World's leading chain of hotels and homes</h1>
                    <p className='pt-2 text-gray-400'>More Destinations. More Ease. More Affordable.</p>

                    <div className=' flex pt-10 gap-8 pb-10'>
                        <div className="flex flex-col">
                            <div className="lg:text-3xl text-amber-400 font-bold">20+</div>
                            <div className="lg:text-lg font-medium text-gray-400">Country</div>
                        </div>
                        <div className='text-4xl text-gray-400'>/</div>
                        <div className="flex flex-col">
                            <div className="lg:text-3xl text-amber-400 font-bold">100.000+</div>
                            <div className="lg:text-lg font-medium text-gray-400">Hotels & Homes</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}