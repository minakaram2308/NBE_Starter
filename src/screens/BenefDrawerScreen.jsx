import React from "react";
import { DrawerScreen } from "./DrawerScreen";
import { BeneficiaryMain } from "./BeneficiaryMain";

const BenefDrawerScreen = (props) => {
    return <DrawerScreen navigation={props.navigation} screen={BeneficiaryMain}/>
}

export default BenefDrawerScreen