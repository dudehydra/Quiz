import React from 'react';

import logo from '../../assets/images/Group_4.png'
import green from '../../assets/images/green@2x.png'
import red from '../../assets/images/red@2x.png'
import line from '../../assets/images/line@2x.png'
import classes from './StartPage.module.scss'

const StartPage = (props) => {
    return (
        <div className={classes.startPage}>
            <div className={classes.wrapper}>
                <div className={classes.startImg}>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <div className={classes.startTitle}>
                        <span>Любишь Казань?  </span>
                        <span className={classes.lineImg}></span>
                        <img src={green} alt=""/>
                        <img src={red} alt=""/>
                    </div>
                    <span className={classes.startText}>Пройди опрос
                    и сделай ее лучше!</span>
                    <button className={classes.startBtn} onClick={()=> props.changePage('quiz')}>
                        <span>Пройти опрос</span>
                    </button>
                </div>
            </div>
        </div>
    )
};


export default StartPage;