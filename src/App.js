import React, { Component } from 'react';
// Enabled CSS Modules for easier CSS and media query handling
import classes from './App.css';
import HeaderComponent from './containers/HeaderComponent/HeaderComponent';
import Aux from './hoc/Aux';
import NavBar from './components/NavBar/NavBar';
import ResultWrapper from './containers/ResultContainer/ResultContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalf, faGlobeAmericas, faTh } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);
library.add(faStarHalf);
library.add(faGlobeAmericas);
library.add(faTh);

class App extends Component {
  render() {
    return (
      <div className={classes.App} >
        <Aux>
          <div className={classes.headerWrapper} >
            <HeaderComponent />
            <NavBar />
          </div>
          <div className={classes.resultsBody} >
            <ResultWrapper />
          </div>
        </Aux>
      </div>
    );
  }
}

export default App;
