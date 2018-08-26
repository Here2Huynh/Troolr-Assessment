import React from 'react';
import Card from '../Card/Card';

const cardList = (props) => {
    return props.data.map( (personData, index) => {
        // { console.log(personData) }
        return <Card 
                    key={index}
                    data={personData}
                />
    })
}

export default cardList;