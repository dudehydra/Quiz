import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Quiz from '../../containers/Quiz/Quiz'
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
    }
    render () {
        return (
            <div className={classes.container}>
                <Quiz />
            </div>
        )
    }
}

export default Layout;
