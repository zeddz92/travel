import React from 'react';
import {Route, Switch} from "react-router-dom";

import * as routePath from './utils/routes';
import Home from "./pages/Home";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Staff from "./pages/Staff";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={routePath.HOME} component={Home}/>
                <Route  path={routePath.PRESS} component={Press}/>
                <Route  path={routePath.CONTACT} component={Contact}/>
                <Route  path={routePath.STAFF} component={Staff}/>
            </Switch>
        </div>
    )
}