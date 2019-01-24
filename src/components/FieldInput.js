import React from 'react'
import {FormControl} from 'react-bootstrap';


const FieldInput = ({input, meta, type, placeholder, min, max, componentClass = 'input', ...rest}) => {
    return (
        <FormControl
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
            componentClass={componentClass}
            value={input.value}
            onChange={input.onChange}
            {...rest}
        />
    )
};

export default FieldInput;