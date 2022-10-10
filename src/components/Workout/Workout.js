import React from 'react';

const Workout = (props) => {
    const { name, img, time, age, text } = props.workout;
    // console.log(props);
    return (
        <div className="w-full rounded-xl shadow-lg lg:max-w-sm p-4 bg-white">
            <img
                className="object-cover w-full h-40 rounded-xl mb-2"
                src={img}
                alt=""
            />
            <div>
                <h4 className="text-xl font-semibold tracking-tight text-indigo-500 mb-2">
                    {name}
                </h4>
                <p className="mb-2 text-gray-600">
                    {text}
                </p>
                <p className='mb-2'>For age: <span className='font-semibold'>{age}</span></p>

                <p className='mb-4'>Time Required: <span className='font-semibold'>{time}s</span></p>
                <button onClick={() => props.handleAddToMyDetails(props.workout)} className="px-4 w-full py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg shadow">
                    Add to List
                </button>
            </div>
        </div>
    );
};

export default Workout;