import React from 'react';
import {Grid} from "react-bootstrap";
import i18next from 'i18next';
import connect from "react-redux/es/connect/connect";
import {toast, ToastContainer} from "react-toastify";

import './style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";
import ContactForm from './ContactForm';
import {submitForm} from "../../store/actions/contact";

function Contact(props) {

    function submit(values) {
        const {submitForm} = props;
        submitForm(values);
    }

    const {contact} = props;

    if (contact.error) {
        console.log("toast called");
        toast.error(contact.error.message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div>
            <Head title={i18next.t('contact')}/>
            <SubHeader title={i18next.t('contact')}/>
            <Grid>
                <ContactForm success={contact.success} isSubmitting={contact.isSubmitting} onSubmit={submit}/>
            </Grid>
            <ToastContainer/>
        </div>
    );
}

function mapStateToProps({contact}) {
    return {
        contact,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitForm: (form) => dispatch(submitForm(form)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);