import React from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';


export default function Head(props) {
    const {title} = props;

    return (
        <Helmet>
            <title>{`${title} - Travelience`}</title>
            <meta property="og:title" content={title}/>
        </Helmet>
    )
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
};
