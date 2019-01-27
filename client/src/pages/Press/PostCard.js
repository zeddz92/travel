import React from 'react';
import {Col, Label, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export default function PostCard({data}) {
    return (
        <div className="post">
            <Row>
                <Col xs={12}>
                    <span className="post-date">{data.date}</span>

                    {data.categories.map((category, index) => (
                        <a key={index} href={`/press/${category.path}`}>
                            <Label key={index}>{category.name}</Label>
                        </a>
                    ))}
                </Col>

                <Col xs={12}>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </Col>

            </Row>

        </div>
    );
}

PostCard.propTypes = {
    data: PropTypes.object.isRequired,
};
