import React from 'react';
import {Route, Switch} from "react-router-dom";
import * as routePath from './utils/routes';
import Home from "./pages/Home";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={routePath.HOME} component={Home}/>
            </Switch>
        </div>
    )
}