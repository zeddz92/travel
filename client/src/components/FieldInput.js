import React from 'react'
import {FormControl} from 'react-bootstrap';


const FieldInput = ({input, test, meta, type, placeholder, min, max, componentClass = 'input', ...rest}) => {
    return (
        <FormControl
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
            data-test={test}
            componentClass={componentClass}
            value={input.value}
            onChange={input.onChange}
            {...rest}
        />
    )
};

export default FieldInput;