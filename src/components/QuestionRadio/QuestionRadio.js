import React from 'react';

import OptionsList from '../OptionsList/OptionsList'
import classes from './QuestionRadio.module.scss'

const QuestionRadio = (props) => {
    return (
        <div className={'radioBlock'}>
            <div className={classes.title}>{props.questionDescr}</div>
            <div className={classes[props.designType]}>
                <OptionsList optionsList={props.optionsList} questionIndex={props.questionIndex} handleRadioChange={props.handleRadioChange} index={props.index} selected={props.selected}/>
            </div>
        </div>
    )
};

export default QuestionRadio;
