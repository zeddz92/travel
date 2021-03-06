import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import i18next from 'i18next';
import {connect} from "react-redux";

import {fetchServicesIfNeeded} from '../store/actions/service';
import * as routes from '../utils/routes';

function toggleLanguage() {
    const currentLanguage = i18next.language;

    const callback = () => {
        window.location.reload();
    };

    const language = currentLanguage === 'jp' ? 'en' : 'jp';

    return i18next.changeLanguage(language, callback);
}

class Header extends PureComponent {

    componentDidMount() {
        const {fetchServices} = this.props;

        fetchServices();
    }

    handleRoute = (route) => {
        const {history} = this.props;
        history.push(route);
    }

    render() {
        const {location, services} = this.props;

        //If current route is home header will always be shown, otherwise give normal index for modals and gallery
        const zIndex = location.pathname === routes.HOME ? 1030 : 0;

        return (
            <div className="header">
                <Navbar style={{zIndex: zIndex}} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={()=> this.handleRoute(routes.HOME)}>Travelience</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavDropdown eventKey={1} title={i18next.t('company')} id="basic-nav">
                                <MenuItem onClick={()=> this.handleRoute(routes.ABOUT)} eventKey={1.1}>{i18next.t('about')}</MenuItem>
                                <MenuItem onClick={()=> this.handleRoute(routes.STAFF)} eventKey={1.2}>{i18next.t('staff')}</MenuItem>
                                <MenuItem onClick={()=> this.handleRoute(routes.JOBS)} eventKey={1.3}>{i18next.t('jobs')}</MenuItem>
                                <MenuItem onClick={()=> this.handleRoute(routes.CONTACT)} eventKey={1.4}>{i18next.t('contact')}</MenuItem>
                            </NavDropdown>

                            <NavItem eventKey={2} onClick={()=> this.handleRoute(routes.JOBS)}>
                                {i18next.t('jobs')}
                            </NavItem>

                            <NavDropdown eventKey={1} title={i18next.t('services')} id="basic-nav">
                                {services.items.map((service, index) => (
                                    <MenuItem key={index} onClick={()=> this.handleRoute(`/services/${service.path}`)}
                                              eventKey={`{1.${index + 1}}`}>{service.name}</MenuItem>
                                ))}
                            </NavDropdown>

                            <NavItem eventKey={4} onClick={()=> this.handleRoute(routes.PRESS)}>
                                {i18next.t('press')}
                            </NavItem>

                            <NavItem eventKey={5} onClick={()=> this.handleRoute(routes.CONTACT)}>
                                {i18next.t('contact')}
                            </NavItem>

                            <NavItem onClick={toggleLanguage} eventKey={6}>
                                {i18next.t('language')}
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}


function mapStateToProps({services}) {
    return {
        services,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchServices: () => dispatch(fetchServicesIfNeeded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));