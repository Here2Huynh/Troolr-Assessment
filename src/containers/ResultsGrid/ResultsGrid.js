import React, { Component } from 'react';
import classes from './ResultsGrid.css';
import Aux from '../../hoc/Aux';
import CatagoryList from '../../components/CatagoryList/CatagoryList';
import CardGrid from '../../components/CardGrid/CardGrid';
import { dataListing } from '../../data/PROFILES DATA';

class ResultsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataListing
        }
    }

    sortingHandler = (data, key) => {
        return data.sort( (a,b) => {
            let x = a[key];
            let y = b[key];
            return ( (x < y) ? 1 : (x > y) ? -1 : 0) 
        })
    }

    render() {
        const key = (this.props.filterOption === 'Top Rated') 
                        ? 'averageRating'
                        : (this.props.filterOption === 'Most Popular')
                            ? 'views'
                            : null;
        const filteredData = this.sortingHandler(this.state.data, key); 
        return(
            <Aux>
                <div className={classes.ResultsGrid} >
                    <div className={classes.GridWrapper} >
                        <CardGrid data={filteredData} />
                        <CatagoryList />
                    </div>
                </div>
            </Aux>
        )
    }
}

export default ResultsGrid;
