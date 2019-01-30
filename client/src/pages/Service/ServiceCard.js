import React from 'react';
import {Col, Image} from "react-bootstrap";
import PropTypes from "prop-types";

export default function ServiceCard({data}) {
    return (
        <div>
            <Col sm={6} md={4}>
                <div className="service-item">
                    <a href={data.website_url}>
                        <Image src={data.logo}/>
                    </a>
                </div>
            </Col>
        </div>
    )
}

ServiceCard.propTypes = {
    data: PropTypes.string.isRequired,
};
