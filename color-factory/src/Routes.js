import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ColorList from "./ColorList";
import Color from "./Color";
import { useState } from "react";

const Routes = () => {

    const [colors, setColors] = useState({
        red: "#ff0000",
        green: "#00ff00",
        blue: "#000ff"
    });

    return (
        <>
        <Switch>
            <Route exact path="/colors">
                <ColorList colors={colors}/>
            </Route>
            <Route exact path="/colors/:color">
                <Color colors={colors}/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes;