import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-name'>
            <h1><FontAwesomeIcon icon={faDumbbell} />  ULTRA-ACTIVE-CLUB</h1>
        </div>
    );
};

export default Header;