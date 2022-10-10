import React from 'react';

const MyDetails = () => {
    return (
        <div className='pt-8'>
            <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3L0753BWEPrIZgAhA1kNTEyNOUxGTh0dPML1ewG3_HYcTBM5FGJctIMq009znwqMZy0&usqp=CAU" alt="" />
                <div className="font-bold text-xl  text-indigo-500">
                    <div>Steve Cook</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in September, 2022</div>
                </div>
            </div>

        </div>
    );
};

export default MyDetails;