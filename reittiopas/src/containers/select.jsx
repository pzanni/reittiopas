import React from 'react';

function Select(props) {
    const getOptions = (options) => {
        let option_elements = [];
        options.forEach(option => {
            option_elements.push(<option key={option} value={option}>{option}</option>)
        });
        return option_elements;
    }

    return (
        <div>
            <label>{props.label}</label>
            <select id="select" onChange={(event) => props.onChange(event.target.value)}>
                {getOptions(props.options)}
            </select> 
        </div>
    )
}

export default Select;