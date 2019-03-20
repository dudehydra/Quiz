import React from 'react';

import classes from './OptionsItem.module.scss';

const OptionsItem = (props) => {
    return (
        (props.type == 'text') ?
            <div>
                <label className={classes.container}>
                    <input value='' type='checkbox'  onChange={props.handleRadioChange}/>
                    <span className={classes.text} >{props.text}</span>
                    <span className={classes.checkmarkCheckbox}></span>
                        <input type="text"/>
                </label>

            </div>
            :
            <label className={classes.container}>
                <input value={props.text} type={props.type} onChange={props.handleRadioChange} name={props.name} checked ={props.checked} required={true}/>
                <span className={classes.text}>{props.text}</span>
                <span className={props.type === 'radio' ? classes.checkmark : classes.checkmarkCheckbox}></span>
             </label>
    )
};

export default OptionsItem;
