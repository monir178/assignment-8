import React from 'react';

const MyDetails = () => {
    return (
        <div className='pt-8'>
            <div className="flex items-center space-x-4">
                <img className="w-20 h-20 rounded-full" src="https://d3qi0qp55mx5f5.cloudfront.net/cpost/i/people/Ruby__Keven_2.jpg?mtime=1578076183" alt="" />
                <div className="font-bold text-3xl  text-indigo-500">
                    <div>Steve Cook</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in September, 2022</div>
                </div>
            </div>
            <div className="flex justify-around my-7 bg-slate-100 rounded-lg my-7 py-5 text-xl font-bold">
                <div >
                    <h4>75<small className='text-gray-500 text-sm'>kg</small></h4><p>Weight</p>
                </div>
                <div>
                    <h4 >6.5</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>75<small className='text-gray-500 text-sm'>yrs</small></h4> <p>Age</p>
                </div>
            </div>
            <h2 className='text-xl font-bold'>Add A Brake</h2>

            <div className="flex justify-around my-7 bg-slate-100 rounded-lg py-5 text-xl font-bold">
                <button className='bg-white rounded-full p-2'>10s</button>
                <button className='bg-white rounded-full p-2'>20s</button>
                <button className='bg-white rounded-full p-2'>30s</button>
                <button className='bg-white rounded-full p-2'>40s</button>
            </div>
            <h2 className='text-2xl font-semibold'>Exercise Details</h2>
            <div className="flex justify-around my-7 bg-slate-100 rounded-lg my-7 py-5 text-xl font-bold">
                <span className='text-lg font-bold'>Exercise Time:</span>
                <p className='text-gray-400 font-semibold'><span>0</span>seconds</p>
            </div>
            <div className="flex justify-around my-7 bg-slate-100 rounded-lg my-7 py-5 text-xl font-bold">
                <span className='text-lg font-bold'>Break Time:</span>
                <p className='text-gray-400 font-semibold'><span>0</span>seconds</p>
            </div>

            <button className='w-full px-4 py-4 rounded-lg text-2xl bg-indigo-500 text-white font-semibold'>
                Activity Completed
            </button>
        </div>
    );
};

export default MyDetails;