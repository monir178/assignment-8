import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Workout from '../Workout/Workout';
import MyDetails from '../MyDetails/MyDetails';



const Workouts = () => {
    //state for all cards to load
    const [workouts, setWorkouts] = useState([]);

    //state for getting time and calculate total
    const [time, setTime] = useState(0);

    //here data loaded from data.json
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, []);


    //total workout time calculation
    const handleAddToMyDetails = (workout) => {
        const newTime = time + workout.time;
        setTime(newTime);
    }


    return (
        <div className='container mx-auto grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-5'>

            <div className='px-5 col-span-4 mt-20'>
                <h1 className='text-5xl font-bold text-indigo-500'><FontAwesomeIcon icon={faDumbbell} />  FIT-TO-BE</h1>
                <div>

                    <h3 className="text-2xl font-semibold mt-8 mb-4">Select Today's Exercise</h3>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        {
                            workouts.map(workout => <Workout
                                key={workout.id}
                                workout={workout}
                                handleAddToMyDetails={handleAddToMyDetails}
                            ></Workout>)
                        }
                    </div>
                </div>
            </div>
            <div className='details-container px-4 ml-8 md:ml-8 lg:ml-0 col-span-2 bg-white rounded-xl'>
                <MyDetails time={time}></MyDetails>
            </div>
        </div>

    );
};

export default Workouts;