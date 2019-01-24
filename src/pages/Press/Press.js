import React from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, Label} from "react-bootstrap";
import Pagination from "react-js-pagination";

import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";

import './style.css';

function Press(props) {

    return (
        <div>
            <Head title={"Press"}/>
            <SubHeader title={"Press"}/>
            <Grid>
                <Row className="show-grid">
                    <Col md={2}>
                        <ListGroup>
                            <ListGroupItem href="#">News</ListGroupItem>
                            <ListGroupItem href="#">Media</ListGroupItem>
                            <ListGroupItem href="#">Planetyze</ListGroupItem>
                            <ListGroupItem href="#">Planetyze Hostel</ListGroupItem>
                            <ListGroupItem href="#">TripleLights</ListGroupItem>
                        </ListGroup>

                    </Col>
                    <Col md={10}>
                        <div className="post">
                            <Row>
                                <Col xs={12}>
                                    <span className="post-date">2015/05/25 </span>

                                    <Label>News</Label>
                                    <Label>Travelience</Label>
                                </Col>

                                <Col xs={12}>
                                    <h3>Travelience awarded 2015 Tripadvisor certificate of excellence!</h3>
                                    <p>Travelience today announced that it has received a TripAdvisor® Certificate of
                                        Excellence award. The accolade, which honors hospitality excellence, is given
                                        only to establishments that consistently achieve outstanding traveller reviews
                                        on TripAdvisor, and is extended to qualifying businesses worldwide.
                                        Establishments awarded the Certificate of Excellence are located all over the
                                        world and represent the upper […]</p>
                                </Col>

                            </Row>

                        </div>

                        <div className="post">
                            <Row>
                                <Col xs={12}>
                                    <span className="post-date">2015/05/25 </span>

                                    <Label>News</Label>
                                    <Label>Travelience</Label>
                                </Col>

                                <Col xs={12}>
                                    <h3>Travelience awarded 2015 Tripadvisor certificate of excellence!</h3>
                                    <p>Travelience today announced that it has received a TripAdvisor® Certificate of
                                        Excellence award. The accolade, which honors hospitality excellence, is given
                                        only to establishments that consistently achieve outstanding traveller reviews
                                        on TripAdvisor, and is extended to qualifying businesses worldwide.
                                        Establishments awarded the Certificate of Excellence are located all over the
                                        world and represent the upper […]</p>
                                </Col>

                            </Row>

                        </div>
                        <div className="text-center">
                            <Pagination
                                activePage={1}
                                itemsCountPerPage={10}
                                totalItemsCount={20}
                                pageRangeDisplayed={10}
                                onChange={(page) => {}}
                            />
                        </div>

                    </Col>

                </Row>

            </Grid>
        </div>
    );
};

export default Press;