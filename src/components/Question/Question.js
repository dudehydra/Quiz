import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Help from '../Help/help';
import OptionsList from '../QuestionList/OptionsList'

const Question = (props) => {
    return (
        <Aux>
            <h1>{props.title}</h1>
            <Help helpText={props.helpText}/>
            <OptionsList optionsList={props.optionsList} checkboxChange={props.checkboxChange}/>
            <button onClick={props.prevQuestion}>Предыдущий шаг</button>
            <button onClick={props.nextQuestion}>Следующий шаг</button>
        </Aux>
    )
};

export default Question;
