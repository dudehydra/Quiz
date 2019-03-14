import React from 'react';


const help = (props) => {
    return (
        props.helpText.map(help => (
            <div dangerouslySetInnerHTML={{__html: help }}>

            </div>
        ))
    )
}

export default help;
