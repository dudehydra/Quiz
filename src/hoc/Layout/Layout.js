import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Quiz from '../../containers/Quiz/Quiz'
import classes from './Layout.module.css'

import StartPage from '../../components/StartPage/StartPage'
import EndPage from '../../components/EndPage/EndPage'

class Layout extends Component {
    state = {
        renderPage: 'StartPage'
    }

    renderPage = () => {
        switch (this.state.renderPage) {
            case 'StartPage':
                return <StartPage changePage={this.changePage}/>
            case 'quiz':
                return <Quiz changePage={this.changePage}/>
            case 'end':
                return <EndPage/>
        }
    }

    changePage = (page) => {
        this.setState({
            renderPage: page
        })
    }

    render () {
        return (
            <div className={classes.container}>
                {this.renderPage()}
            </div>
        )
    }
}

export default Layout;
