import React, { useEffect, useState } from 'react';
import './Workout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Workout from '../Workout/Workout';
import MyDetails from '../MyDetails/MyDetails';



const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])
    return (

        <div className='container mx-auto grid grid-cols-6 gap-5'>

            <div className='px-5 col-span-4 mt-20'>
                <h1 className='text-5xl font-bold text-indigo-500'><FontAwesomeIcon icon={faDumbbell} />  ULTRA-ACTIVE-CLUB</h1>
                <div>

                    <h3 className="text-2xl font-semibold mt-8 mb-4">Select Today's Exercise</h3>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            workouts.map(workout => <Workout
                                key={workout.id}
                                workout={workout}
                            ></Workout>)
                        }
                    </div>
                </div>
            </div>
            <div className='px-4 col-span-2 bg-white'>
                <MyDetails></MyDetails>
            </div>
        </div>

    );
};

export default Workouts;