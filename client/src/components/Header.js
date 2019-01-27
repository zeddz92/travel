import React from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import i18next from 'i18next';

import * as routes from '../utils/routes';

function toggleLanguage(props) {
    const currentLanguage = i18next.language;

    const callback = (t) => {
        window.location.reload();
    };

    if (currentLanguage === 'jp') {
        return i18next.changeLanguage('en', callback);
    }

    return i18next.changeLanguage('jp', callback);
}

function Header(props) {
    console.log(props);
    const {location} = props;

    //If current route is home header will always be shown, otherwise give normal index for modals and gallery
    const zIndex = location.pathname === routes.HOME ? 1030 : 0;

    return (
        <div className="header">
            <Navbar style={{zIndex: zIndex}} inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={"/"}>Travelience</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title={i18next.t('company')} id="basic-nav">
                            <MenuItem href={routes.ABOUT} eventKey={1.1}>{i18next.t('about')}</MenuItem>
                            <MenuItem href={routes.STAFF} eventKey={1.2}>{i18next.t('staff')}</MenuItem>
                            <MenuItem href={routes.JOBS} eventKey={1.3}>{i18next.t('jobs')}</MenuItem>
                            <MenuItem href={routes.CONTACT} eventKey={1.4}>{i18next.t('contact')}</MenuItem>
                        </NavDropdown>

                        <NavItem eventKey={2} href={routes.JOBS}>
                            {i18next.t('jobs')}
                        </NavItem>

                        <NavItem eventKey={3} href={routes.SERVICES}>
                            {i18next.t('services')}
                        </NavItem>

                        <NavItem eventKey={4} href={routes.PRESS}>
                            {i18next.t('press')}
                        </NavItem>

                        <NavItem eventKey={5} href={routes.CONTACT}>
                            {i18next.t('contact')}
                        </NavItem>

                        <NavItem onClick={() => toggleLanguage(props)} eventKey={6}>
                            {i18next.t('language')}
                        </NavItem>

                        {/*<NavDropdown eventKey={6} title="日本語" id="basic-nav">*/}
                        {/*<MenuItem eventKey={6.1}>English</MenuItem>*/}
                        {/*<MenuItem eventKey={6.2}>Spanish</MenuItem>*/}

                        {/*</NavDropdown>*/}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default withRouter(Header);