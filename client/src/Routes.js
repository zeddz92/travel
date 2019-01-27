import React from 'react';
import {Route, Switch} from "react-router-dom";

import * as routePath from './utils/routes';
import Home from "./pages/Home";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Staff from "./pages/Staff";
import About from "./pages/About";
import Service from "./pages/Service";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={routePath.HOME} component={Home}/>
                <Route exact path={routePath.PRESS} component={Press}/>
                <Route exact path={routePath.PRESS_CATEGORY} component={Press}/>
                <Route path={routePath.CONTACT} component={Contact}/>
                <Route path={routePath.STAFF} component={Staff}/>
                <Route path={routePath.ABOUT} component={About}/>
                <Route path={routePath.SERVICE} component={Service}/>
            </Switch>
        </div>
    )
}