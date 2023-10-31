import React from "react";
import { DrawerScreen } from "./DrawerScreen";
import {Maps} from "./Maps";

const MapDrawerScreen = (props) => {
    return <DrawerScreen navigation={props.navigation} screen={Maps} transparent/>
}

export default MapDrawerScreen