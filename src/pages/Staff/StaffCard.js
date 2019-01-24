import React from 'react';
import PropTypes from "prop-types";
import Head from "../../components/Head";
import {Col, Panel} from "react-bootstrap";

export default function StaffCard({data}) {
    return (
        <Col md={6}>
            <Panel className="staff-card">
                <Panel.Heading>
                    <h2>
                        {data.name}
                        <small>{data.position}</small>
                    </h2>

                </Panel.Heading>
                <Panel.Body>
                    <iframe src={data.video_url} width="500"
                            height="281" frameBorder="0" allow="autoplay; fullscreen"
                            allowFullScreen=""/>
                </Panel.Body>
            </Panel>
        </Col>
    )
}


StaffCard.propTypes = {
    data: PropTypes.object.isRequired,
};
