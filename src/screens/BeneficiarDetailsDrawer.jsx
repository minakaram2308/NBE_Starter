import React from "react";
import { DrawerScreen } from "./DrawerScreen";
import { BeneficiaryScreen } from "./BeneficiaryScreen";
import { AddBeneficiarScreen } from "./AddBeneficiarScreen";
import { Beneficiar } from "./Beneficiar";

const BeneficiarDetailsDrawer = (props) => {
    return <DrawerScreen navigation={props.navigation} screen={Beneficiar}/>
}

export default BeneficiarDetailsDrawer