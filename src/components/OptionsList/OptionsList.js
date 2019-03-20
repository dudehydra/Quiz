import React from 'react';
import OptionsItem from '../OptionsItem/OptionsItem'

const OptionsList = (props) => {
    return (
        props.optionsList.map((option,index) => (
            option.type === 'radio' ?
                <OptionsItem  text={option.text}
                              key={index}
                              checked={ option.text === props.selected}
                              type={option.type}
                              name={option.name} handleRadioChange={() => props.handleRadioChange(props.questionIndex, option.text)} />
            :
                <OptionsItem  text={option.text}
                              key={index}
                              checked={option.checked}
                              type={option.type} name={option.name}
                              handleRadioChange={() => props.handleRadioChange(props.questionIndex, index)} />
        ))
    )
};

export default OptionsList;
