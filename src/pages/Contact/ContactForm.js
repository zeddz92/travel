import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, ControlLabel, FormGroup, Button, Glyphicon} from 'react-bootstrap';

import FieldInput from "../../components/FieldInput";

let ContactForm = props => {
    const {handleSubmit, pristine, submitting} = props;
    return (
        <Form className="contact-form" horizontal onSubmit={handleSubmit}>
            <FormGroup controlId="formControlsName">
                <ControlLabel htmlFor="name">Name</ControlLabel>
                <Field required name="name" component={FieldInput} type="text"/>
            </FormGroup>

            <FormGroup controlId="formControlsEmail">
                <ControlLabel htmlFor="email">Email</ControlLabel>
                <Field required name="email" component={FieldInput} componentClass="input" type="email"/>
            </FormGroup>

            <FormGroup controlId="formControlsMessage">
                <ControlLabel htmlFor="message">Message</ControlLabel>
                <Field name="message" component={FieldInput} componentClass="textarea" rows="8" type="text"/>
            </FormGroup>

            <Button bsStyle="primary" disabled={pristine || submitting} type="submit">
                <Glyphicon glyph="send"/>
                Submit</Button>
        </Form>
    )
};

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm);

export default ContactForm