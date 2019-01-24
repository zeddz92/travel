import React from 'react';
import PropTypes from "prop-types";
import {PageHeader} from "react-bootstrap";

export default function SubHeader({title, description}) {
    return (
        <PageHeader className="page-header">
            {title} <br/>
            <small>{description}</small>
        </PageHeader>
    )
}


SubHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

SubHeader.propTypes = {
    title: PropTypes.string.isRequired,
};