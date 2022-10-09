import React, { useEffect, useState } from 'react';
import './Workout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';



const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])
    return (

        <div className='workouts-container container mx-auto'>
            <div className='header-name text-4xl'>
                <h1><FontAwesomeIcon icon={faDumbbell} />  ULTRA-ACTIVE-CLUB</h1>
            </div>
            <div>
                <h3>Select today's exercise</h3>
            </div>
            <div>
                {
                    workouts.map(workout => console.log(workout))
                }
            </div>
        </div>
    );
};

export default Workouts;