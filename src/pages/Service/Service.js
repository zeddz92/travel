import React, {PureComponent} from 'react';
import {Grid, Row, Col, Image, ButtonGroup, Button} from "react-bootstrap";
import Lightbox from 'react-image-lightbox';

import './style.css';
import 'react-image-lightbox/style.css';
import Head from "../../components/Head";
import SubHeader from "../../components/SubHeader";
import Media from "../../components/Media";
import ServiceCard from "./ServiceCard";

const medias = [
    "https://travelience.jp/wp-content/uploads/2016/01/%E3%83%95%E3%82%9A%E3%83%A9%E3%83%8D%E3%82%BF%E3%82%A4%E3%82%B9%E3%82%991.jpg",
    "https://travelience.jp/wp-content/uploads/2016/01/%E3%83%95%E3%82%9A%E3%83%A9%E3%83%8D%E3%82%BF%E3%82%A4%E3%82%B9%E3%82%992.jpg",
    "https://travelience.jp/wp-content/uploads/2016/02/トリプルライツ2-2.jpg"
];

const services = [
    {
        name: "Planetyze",
        logo: "https://travelience.jp/wp-content/uploads/2016/01/logo-text.jpg",
        url: "https://travelience.jp/en/services/planetyze/"
    },
    {
        name: "Planetyze Hostel",
        logo: "https://travelience.jp/wp-content/uploads/2017/01/hostel-logo-travelience.jpg",
        url: "https://travelience.jp/en/services/planetyze-hostel/"
    },
    {
        name: "Triplelights",
        logo: "https://travelience.jp/wp-content/uploads/2016/02/logo_1.png",
        url: "https://travelience.jp/en/services/triplelights/"
    }
];


class Service extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isGalleryOpen: false,
            photoIndex: 0,
        }
    }

    render() {
        const {isGalleryOpen, photoIndex} = this.state;

        return (
            <div>
                <Head title={"Planetyze"}/>
                <SubHeader title={"Planetyze"} description={"Travel Video Guide"}/>
                <div className="gallery">
                    <Grid>
                        <Row>

                            {medias.map((media, index) => (
                                <Media
                                    url={media}
                                    key={index}
                                    onMouseOver={() => this.setState({photoIndex: index})}
                                    onClick={() => this.setState({isGalleryOpen: true})}
                                    md={4}/>
                            ))}

                        </Row>
                        <div>

                            <div className="page-title" style={{marginTop: 55}}>
                                <h2>Japan Travel Video Guide</h2>
                                <hr/>
                            </div>

                            <div className="page-content">
                                <p>Planetyze is the largest Japan travel guidebook, featuring videos, reviews, and
                                    articles about sightseeing spots from all over Japan. You can discover the
                                    sightseeing spots that you’re interested in, by watching short videos and reading
                                    reviews written by other travellers.</p>
                            </div>

                            <div className="page-content service-button-group">
                                <Button bsSize="lg" bsStyle="primary" href="#">Website</Button>
                                <Button bsSize="lg" href="#">Contact</Button>
                            </div>
                        </div>

                        <div>
                            <div className="page-title">
                                <h2>Other Services</h2>
                                <hr/>
                            </div>

                        </div>

                        <Row>
                            {services.map(service => (
                                <ServiceCard data={service}/>
                            ))}
                        </Row>

                    </Grid>
                </div>

                {isGalleryOpen && (
                    <Lightbox

                        mainSrc={medias[photoIndex]}
                        nextSrc={medias[(photoIndex + 1) % medias.length]}
                        prevSrc={medias[(photoIndex + medias.length - 1) % medias.length]}
                        onCloseRequest={() => this.setState({isGalleryOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + medias.length - 1) % medias.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % medias.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }

}


export default Service;