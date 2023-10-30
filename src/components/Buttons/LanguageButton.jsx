import React, {useContext, useState} from 'react';
import styles from '../../styles/components/Buttons/LanguageButton.style';
import {Pressable, Text, View} from 'react-native';
import {colors} from '../../constants/Colors';
import RobotoText from '../RobotoText';
import LanguageContext from '../../store/Language/language-context';

export function LanguageButton(props) {
  const languageContext = useContext(LanguageContext)
  const [isPressed, setIsPressed] = useState(false);

  let viewStyle = isPressed ? [styles.view, styles.viewPressed] : [styles.view];
  if (props.style) {
    if (Array.isArray(props.style)) {
      viewStyle.concat(...props.style);
    } else {
      viewStyle.concat(props.style);
    }
  }

  let textStyle = isPressed ? [styles.text, styles.textPressed] : [styles.text];

  return (
    <View style={props.style}>
      <Pressable
        // android_ripple={{color: colors.green}}
        onPressIn={setIsPressed.bind(null, true)}
        onPressOut={setIsPressed.bind(null, false)}
        onPress={languageContext.changeLanguage}>
        <View style={viewStyle}>
          <RobotoText style={textStyle}>{languageContext.language}</RobotoText>
        </View>
      </Pressable>
    </View>
  );
}

export default LanguageButton;
