import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Quiz from '../../containers/Quiz/Quiz'

class Layout extends Component {
    state = {
    }
    render () {
        return (
            <Aux>
                <Quiz/>
            </Aux>
        )
    }
}

export default Layout;
