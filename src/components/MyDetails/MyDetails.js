
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyDetails = ({ time }) => {

    //get from local storage
    const getItemsFromLS = () => {
        const keys = localStorage.getItem('break-time');
        if (keys) {
            return JSON.parse(localStorage.getItem('break-time'));
        }
        else {
            return 0;
        }
    }

    // Toast Function
    const activityToast = () => {
        toast("Exercise is labor without weariness.");
    }

    const [breakTime, setBreakTime] = useState(getItemsFromLS());


    const handleToBreakTime = (value) => {
        setBreakTime(value);
    }

    // set to local storage
    useEffect(() => {
        localStorage.setItem('break-time', JSON.stringify(breakTime))
    }, [breakTime]);



    return (
        <div className='pt-8'>
            <div className="flex items-center space-x-4">
                <img className="w-20 h-20 rounded-full" src="https://d3qi0qp55mx5f5.cloudfront.net/cpost/i/people/Ruby__Keven_2.jpg?mtime=1578076183" alt="" />
                <div className="font-bold text-3xl  text-indigo-500">
                    <div>Steve Cook</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in September, 2022</div>
                </div>
            </div>
            <div className="flex justify-around my-7 bg-slate-100 rounded-lg py-5 text-xl font-bold">
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
                <button onClick={() => handleToBreakTime(10)} className='bg-white rounded-full p-2'><span>10</span>s</button>
                <button onClick={() => handleToBreakTime(20)} className='bg-white rounded-full p-2'><span>20</span>s</button>
                <button onClick={() => handleToBreakTime(30)} className='bg-white rounded-full p-2'><span>30</span>s</button>
                <button onClick={() => handleToBreakTime(40)} className='bg-white rounded-full p-2'><span>40</span>s</button>
            </div>
            <h2 className='text-2xl font-semibold'>Exercise Details</h2>
            <div className="flex justify-around my-7 bg-slate-100 rounded-lg  py-5 text-xl font-bold">
                <span className='text-lg font-bold'>Exercise Time:</span>
                <p className='text-gray-400 font-semibold'><span>{time}</span> seconds</p>
            </div>
            <div className="flex justify-around my-7 bg-slate-100 rounded-lg py-5 text-xl font-bold">
                <span className='text-lg font-bold'>Break Time:</span>
                <p className='text-gray-400 font-semibold'><span>{breakTime}</span> seconds</p>
            </div>

            <button onClick={activityToast} className='w-full px-4 py-4 rounded-lg text-2xl bg-indigo-500 text-white font-semibold'>
                Activity Completed
            </button>
            <ToastContainer />
        </div>
    );
};

export default MyDetails;