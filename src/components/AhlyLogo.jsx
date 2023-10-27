import { View,Image } from "react-native"
import {LanguageButton} from '../components/Buttons/LanguageButton'
 function AhlyLogo () {
    return (
        <View style={{flex:1}}>
            <Image source={require('../../assets/media/AhlyBankLogo.png')} />
            <LanguageButton />
        </View>
    )
}

export default AhlyLogo;