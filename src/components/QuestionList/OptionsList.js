import React from 'react';
import OptionsItem from '../QuestionItem/OptionsItem'

const OptionsList = (props) => {
    return (
        props.optionsList.map((help,index) => (
            <OptionsItem text={help.text} key={index} checked={help.checked} type={help.type} checkboxChange={() => props.checkboxChange(index)} />
        ))
    )
};

export default OptionsList;
