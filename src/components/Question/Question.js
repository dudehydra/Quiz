import React from 'react';

import OptionsList from '../OptionsList/OptionsList'

const Question = (props) => {
    return (
        <div className={'QuestionCheckbox'}>
            <OptionsList optionsList={props.optionsList} questionIndex={props.questionIndex} handleRadioChange={props.handleRadioChange}/>
        </div>
    )
};

export default Question;
