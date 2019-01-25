import React from 'react';
import {Grid} from "react-bootstrap";

import './style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";
import ContactForm from './ContactForm';

function Contact(props) {
    function submit(values) {
        // print the form values to the console
        console.log(values)
    }

    return (
        <div>
            <Head title={"Contact"}/>
            <SubHeader title={"Contact"}/>
            <Grid>
                <ContactForm onSubmit={submit}/>
            </Grid>
        </div>
    );
}

export default Contact;