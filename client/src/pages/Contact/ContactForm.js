import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, ControlLabel, FormGroup, Button, Glyphicon, Alert} from 'react-bootstrap';

import FieldInput from "../../components/FieldInput";

let ContactForm = props => {
    const {handleSubmit, pristine, isSubmitting, success} = props;

    if (success) {
        return (
            <div className="text-center">
                <Alert bsStyle="success">
                    <span>Your message was sent successfully</span>
                </Alert>;
            </div>
        )
    }

    return (
        <Form className="contact-form" horizontal onSubmit={handleSubmit}>
            <FormGroup>
                <ControlLabel htmlFor="name">Name</ControlLabel>
                <Field required name="name" component={FieldInput} type="text"/>
            </FormGroup>

            <FormGroup>
                <ControlLabel htmlFor="email">Email</ControlLabel>
                <Field required name="email" component={FieldInput} componentClass="input" type="email"/>
            </FormGroup>

            <FormGroup>
                <ControlLabel htmlFor="message">Message</ControlLabel>
                <Field required name="message" component={FieldInput} componentClass="textarea" rows="8" type="text"/>
            </FormGroup>

            <Button bsStyle="primary" disabled={pristine || isSubmitting} type="submit">
                <Glyphicon glyph="send"/>
                Submit</Button>
        </Form>
    )
};

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm);

export default ContactForm