import React from 'react';


const OptionsItem = (props) => {

    return (
        (props.type == 'text') ? <label >
            <input value='' type={props.type} checked={props.checked} onChange={props.checkboxChange}/>
            <span>{props.text}</span>
        </label>
            : <label >
                <input value={props.text} type={props.type} checked={props.checked} onChange={props.checkboxChange}/>
                <span>{props.text}</span>
            </label>


    )
};

export default OptionsItem;
