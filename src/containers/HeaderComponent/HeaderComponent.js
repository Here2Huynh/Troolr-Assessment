import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Logo from '../../components/Logo/Logo';

class HeaderComponent extends Component {

    render() {
        return(
            <Aux>
            <Logo />
            {/* Search Bar Component */}
            {/* User profile component */}
            </Aux>
        );
    }
}

export default HeaderComponent;