import React from 'react';
import classes from './CardGrid.css';
import CardList from './CardList/CardList';

const CardGrid = (props) => (
    <div className={classes.cardGrid} >   
        <div className={classes.gridWrapper}>
            <CardList data={props.data} />
        </div>
    </div>
)

export default CardGrid;