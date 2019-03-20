import React from 'react';
import CountUp from 'react-countup';

import classes from './Progress.module.scss'

const Progress = (props) => {
    let percentOld = () => {
        if (props.questionNumber === 0) {
            return 33
        }
        let currnetProcent = Math.round(100 / ((props.totalQuestions + 1)/(props.questionNumber -1 )));
        return currnetProcent;
    };
    let percent = () => {
        let currnetProcent = Math.round(100 / ((props.totalQuestions + 1)/props.questionNumber));
        let percentOld = currnetProcent;
        return currnetProcent;
    }
    return (
        <div className={classes.progressWrapper}>
            <span className={classes.title}>Прогресс:</span>
            <div className={classes.progress}>
                <div className={classes.progressActive} style={{width: percent() + '%'}}>
                    <span className={classes.progressDesc}>
                        <CountUp start={percentOld()} end={percent()} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Progress;
