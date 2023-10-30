import {View, Image} from 'react-native';
import {LanguageButton} from '../components/Buttons/LanguageButton';
import { useContext } from 'react';
import LanguageContext from '../store/Language/language-context';

function AhlyLogo() {
//   const languageContext = useContext(LanguageContext);

  return (
    <View style={{flex: 1}}>
      <Image source={require('../../assets/media/AhlyBankLogo.png')} />
      {/* <LanguageButton onPress={languageContext.changeLanguage}>
        {languageContext.language}
      </LanguageButton> */}
    </View>
  );
}

export default AhlyLogo;
