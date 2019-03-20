import React from 'react';


const help = (props) => {
    return (
        props.helpText.map((help, index) => (
            <div key={index} dangerouslySetInnerHTML={{__html: help }}>

            </div>
        ))
    )
};

export default help;
