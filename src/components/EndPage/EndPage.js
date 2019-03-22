import React from 'react';

import logo from '../../assets/images/end.png';
import classes from './EndPage.module.scss';

const EndPage = (props) => {
    return (
        <div className={classes.endPage}>
            <div className={classes.wrapper}>
                <div className={classes.endImg}>
                    <img src={logo} alt=""/>
                </div>
                <div className={classes.title}>
                    СПАСИБО ЗА ВАШИ ОТВЕТЫ!
                </div>
                <div className={classes.descr}>
                    Вместе мы сделаем жизнь в городе еще лучше!
                </div>
            </div>
        </div>
    )
};

export default EndPage;