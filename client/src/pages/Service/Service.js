import React, {PureComponent} from 'react';
import i18next from 'i18next';
import {Grid, Row, Button} from "react-bootstrap";
import {connect} from "react-redux";
import Lightbox from 'react-image-lightbox';
import {toast, ToastContainer} from "react-toastify";

import './style.css';
import 'react-image-lightbox/style.css';
import Head from "../../components/Head";
import PageHead from "../../components/PageHead";
import Media from "../../components/Media";
import NotFound from "../NotFound";
import ServiceCard from "./ServiceCard";
import ComponentError from "../../components/ComponentError";
import {fetchCategoriesIfNeeded} from "../../store/actions/category";
import {fetchService} from "../../store/actions/_service";

class Service extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            isGalleryOpen: false,
            photoIndex: 0,
        }
    }

    componentDidMount() {
        const {fetchService, service} = this.props;
        const {servicePath} = this.props.match.params;

        fetchService(servicePath);
        console.log(service);
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {service} = this.props;
        if (service.error && !service.isFetching) {
            toast.error(service.error.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    render() {
        const {isGalleryOpen, photoIndex, hasError} = this.state;
        const {service, services} = this.props;

        if(hasError) {
            return <ComponentError/>
        }

        if (service.isFetching) {
            return null;
        }

        if (service.error && service.error.code === 404) {
            return <NotFound/>;
        }

        const data = service.data;
        const serviceItems = services.items;
        const medias = data.medias;

        return (
            <div>
                <Head title={data.name}/>
                <PageHead title={data.name} description={data.description}/>
                <div className="gallery">
                    <Grid>
                        <Row>
                            {medias.map((media, index) => (
                                <Media
                                    url={media.url}
                                    key={index}
                                    onMouseOver={() => this.setState({photoIndex: index})}
                                    onClick={() => this.setState({isGalleryOpen: true})}
                                    md={4}/>
                            ))}
                        </Row>

                        <div>
                            <div className="page-title" style={{marginTop: 55}}>
                                <h2>{data.description}</h2>
                                <hr/>
                            </div>

                            <div className="page-content">
                                <p>{data.content}</p>
                            </div>

                            <div className="page-content service-button-group">
                                <Button bsSize="lg" bsStyle="primary"
                                        href={data.website_url}>{i18next.t("website")}</Button>
                                <Button bsSize="lg" href="#">{i18next.t("contact")}</Button>
                            </div>
                        </div>

                        <div>
                            <div className="page-title">
                                <h2>{i18next.t("otherServices")}</h2>
                                <hr/>
                            </div>
                        </div>

                        <Row>
                            {serviceItems.map(service => (
                                <ServiceCard data={service}/>
                            ))}
                        </Row>

                    </Grid>
                </div>

                {isGalleryOpen && (
                    <Lightbox
                        mainSrc={medias[photoIndex].url}
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
                <ToastContainer/>
            </div>
        );
    }

}

function mapStateToProps({posts, services, service}) {

    return {
        service,
        services
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategoriesIfNeeded()),
        fetchService: (path) => dispatch(fetchService(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Service);