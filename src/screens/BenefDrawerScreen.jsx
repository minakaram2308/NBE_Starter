import React from "react";
import { DrawerScreen } from "./DrawerScreen";
import { BeneficiaryScreen } from "./BeneficiaryScreen";

const BenefDrawerScreen = (props) => {
    return <DrawerScreen navigation={props.navigation} screen={BeneficiaryScreen}/>
}

export default BenefDrawerScreen