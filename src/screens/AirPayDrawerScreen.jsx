import React from "react";
import { DrawerScreen } from "./DrawerScreen";
import AirPayScreen from "./AirPayScreen";

const AirPayDrawerScreen = (props) => {
    return <DrawerScreen navigation={props.navigation} screen={AirPayScreen}/>
}

export default AirPayDrawerScreen