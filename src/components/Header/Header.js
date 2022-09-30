import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fal, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1 className='header-name'>    <FontAwesomeIcon icon={['fab', 'apple']} />ULTRA-ACTIVE-CLUB</h1>
        </div>
    );
};

export default Header;