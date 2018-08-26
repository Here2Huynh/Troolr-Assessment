import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Results.css';

const results = (props) => (
    <Aux>
        <h5 className={classes.ResultsHeader}>Newest Contractors in {props.location}
            <span className={classes.resultCount}> ({props.resultCount} Results)</span>
        </h5>
    </Aux>
)

export default results;