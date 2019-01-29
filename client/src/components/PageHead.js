import React from 'react';
import PropTypes from "prop-types";
import {PageHeader} from "react-bootstrap";

export default function PageHead({title, description}) {
    return (
        <PageHeader className="sub-header">
            {title} <br/>
            <small>{description}</small>
        </PageHeader>
    )
}


PageHead.propTypes = {
    title: PropTypes.string.isRequired,
};
