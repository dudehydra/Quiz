import React from 'react';

import Progress from '../Progress/Progress'
import classes from './Header.module.scss'

const Header = (props) => {
    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Пройди опрос и сделай Казань лучше!</h1>
            <div className={classes.current}>
                <span className={classes.currentTitle}>Вопрос:</span>
                <span className={classes.currentText}>{props.questionNumber + 1} / {props.totalQuestions + 1}</span>
            </div>
            <Progress questionNumber={props.questionNumber} totalQuestions={props.totalQuestions}/>
        </div>
    )
}

export default Header;


