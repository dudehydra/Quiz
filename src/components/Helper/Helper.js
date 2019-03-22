import React from 'react';

import classes from './Helper.module.scss'

const Helper = (props) => {
    return (
        <div className={classes.helper}>
            <div className={classes.helperImg}>
                <img  src={props.img} alt=""/>
            </div>
            <p>
                {props.text}
            </p>
        </div>
    )
};

export default Helper;