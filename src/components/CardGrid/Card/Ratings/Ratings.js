import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Ratings.css';

class Ratings extends Component {

    starsHandler = () => {
        let i = 0; 
        let stars = [];
        if ( this.props.ratings % 1 === 0 ) {
            while ( i < this.props.ratings ) {
                i++;
                stars.push(<FontAwesomeIcon icon={'star'} key={i}/>)
            }
            return stars;
        }
        else {
            let fullStars = this.props.ratings - .5;
            while ( i < fullStars ) {
                i++;
                stars.push(<FontAwesomeIcon icon={'star'} key={i} />)
            }

            stars.push(<FontAwesomeIcon icon={'star-half'} key={'half'} />)

            return stars;
        }

    }

    render () {
        return (
            <div className={classes.star} >
                { this.starsHandler() }
            </div>
        )
    }

}

export default Ratings;