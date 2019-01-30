import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, ControlLabel, FormGroup, Button, Glyphicon, Alert} from 'react-bootstrap';
import i18next from 'i18next';


import FieldInput from "../../components/FieldInput";

let ContactForm = props => {
    const {handleSubmit, pristine, isSubmitting, success} = props;

    if (success) {
        return (
            <div data-test="success-message" className="text-center">
                <Alert bsStyle="success">
                    <span>{i18next.t("messageSent")}</span>
                </Alert>;
            </div>
        )
    }

    return (
        <Form data-test="component-contact-form" className="contact-form" horizontal onSubmit={handleSubmit}>
            <FormGroup>
                <ControlLabel htmlFor="name">{i18next.t("name")}</ControlLabel>
                <Field test={"input-name"} required name="name" component={FieldInput} type="text"/>
            </FormGroup>

            <FormGroup>
                <ControlLabel htmlFor="email">{i18next.t("email")}</ControlLabel>
                <Field test="input-email" required name="email" component={FieldInput} componentClass="input" type="email"/>
            </FormGroup>

            <FormGroup>
                <ControlLabel htmlFor="message">{i18next.t("message")}</ControlLabel>
                <Field test="input-message" required name="message" component={FieldInput} componentClass="textarea" rows="8" type="text"/>
            </FormGroup>

            <Button data-test="submit-button" disabled={pristine || isSubmitting} bsStyle="primary"  type="submit">
                <Glyphicon glyph="send"/>
                {i18next.t("submit")}</Button>
        </Form>
    )
};

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm);

export default ContactForm