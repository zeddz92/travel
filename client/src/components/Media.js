import React from 'react';
import {Col, Image} from "react-bootstrap";
import PropTypes from "prop-types";

export default function Media({url, ...rest}) {
    return (
            <Col
                {...rest}>
                <div className="photo-item clickable">
                    <Image responsive src={url}/>
                </div>
            </Col>
    )
}

Media.propTypes = {
    url: PropTypes.string.isRequired,
};

Media.defaultProps = {
    md: 4,
    type: "image"
};