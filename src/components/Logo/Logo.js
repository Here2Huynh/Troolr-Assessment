import React from 'react';
import classes from './Logo.css';

const logo = () => (
    <div> 
        <img 
            src={ require('../../assets/images/logo-small.png') } 
            alt='troolr logo'
            className={classes.Logo}
        />
    </div>
);

export default logo;
