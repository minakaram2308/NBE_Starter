import React from "react";
import { DrawerScreen } from "./DrawerScreen";
import { BeneficiaryScreen } from "./BeneficiaryScreen";
import { AddBeneficiarScreen } from "./AddBeneficiarScreen";

const AddBeneficiarDrawer = (props) => {
    return <DrawerScreen navigation={props.navigation} screen={AddBeneficiarScreen}/>
}

export default AddBeneficiarDrawer