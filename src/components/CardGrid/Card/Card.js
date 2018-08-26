import React from 'react';
import classes from './Card.css';
import Ratings from './Ratings/Ratings';


const card = (props) => (
    <div className={classes.card} >
        <img 
            className={classes.profilePicture}
            alt={'Profile'}
            src={props.data.profile_picture}
        />
        <div className={classes.infoWrapper} >
            <p className={classes.name} >
                {props.data.name}
            </p>
            <p className={classes.views}>
                {props.data.views.length} views
            </p>
            <p className={classes.location}>
                {props.data.address.city}, {props.data.address.state}
            </p>
            <div className={classes.contactWrapper} >
                <div className={classes.ratingStars} >
                <Ratings ratings={props.data.averageRating} />
                </div>
                <button className={classes.viewProfile}>View Profile</button>
            </div>
        </div>
    </div>
)

export default card; 
