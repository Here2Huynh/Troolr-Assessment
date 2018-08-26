import React from 'react';
import classes from './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = () => (
            <div className={classes.NavBar}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={'th'} className={classes.icon} />
                        <a href={''}>Locations</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={'globe-americas'} className={classes.icon} />
                        <a href={''}>Catagories</a>
                    </li>
                </ul>
            </div>
);

export default NavBar;