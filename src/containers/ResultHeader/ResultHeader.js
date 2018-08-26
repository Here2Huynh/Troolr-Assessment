import React, { Component } from 'react';
import Results from '../../components/Results/Results';
import Aux from '../../hoc/Aux';
import classes from './ResultHeader.css';

class ResultHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false
        }
    }
    
    showDropDownHandler = (event) => {
        event.preventDefault();
        
        this.setState({ showDropDown: true }, () => {
            document.addEventListener('click', this.closeDropDownHandler);
        });
    }

    closeDropDownHandler = (event) => {
        if (!this.dropDownMenu.contains(event.target)) {
            this.setState({ showDropDown: false }, () => {
                document.removeEventListener('click', this.closeDropDownHandler);
            });
        }
    }
    
    filterOptionClickedHandler = (event) => {
        this.props.filterOption(event.target.value);
    }

    render() {
        return(
            <Aux>  
                <Results 
                    location={'Santa Clara, Ca'}
                    resultCount={16}
                />
                <div className={classes.filterSelection}>
                    <button onClick={this.showDropDownHandler} >
                        Sort by (Best Match)
                    </button>
                

                { this.state.showDropDown 
                    ? 
                        <div 
                            className={classes.dropDown}
                            ref={(element) => {
                                this.dropDownMenu = element;
                            }}
                        >
                            <button 
                                className={classes.dropDownButton}
                                onClick={this.filterOptionClickedHandler}
                                value={'Top Rated'}
                            >Top Rated</button>
                            <button 
                                className={classes.dropDownButton}
                                onClick={this.filterOptionClickedHandler}
                                value={'Most Popular'}
                            >Most Popular</button>
                        </div>
                    :
                        null
                }

                </div>

            </Aux>
        )
    }
}

export default ResultHeader;