import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ResultHeader from '../ResultHeader/ResultHeader';
import ResultsGrid from '../ResultsGrid/ResultsGrid';

class ResultContainer extends Component {
    constructor() {
        super();
        this.state = {
            filterOption: ''
        }
    }

    filterOptionHandler = (option) => {
        this.setState({ filterOption: option})
    }

    render() {
        return(
            <Aux>
                <ResultHeader filterOption={this.filterOptionHandler} />
                <ResultsGrid filterOption={this.state.filterOption} />
                {/* { console.log(this.state.filterOption) } */}
            </Aux>
        );
    }
}

export default ResultContainer;