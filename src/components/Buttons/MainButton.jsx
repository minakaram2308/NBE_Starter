import React, {useState} from 'react';
import styles from '../../styles/components/Buttons/MainButton.style';
import {Pressable, View} from 'react-native';
import RobotoText from '../RobotoText';
import {colors} from '../../constants/Colors';

function MainButton(props) {
  const [isPressed, setIsPressed] = useState(false);

  let viewStyle = isPressed ? [styles.view, styles.viewPressed] : [styles.view];
  viewStyle = props.disabled
    ? viewStyle.concat(styles.viewDisabled)
    : viewStyle;

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
        disabled={props.disabled}
        // android_ripple={{color: colors.green}}
        onPressIn={setIsPressed.bind(null, true)}
        onPressOut={setIsPressed.bind(null, false)}
        onPress={props.onPress}>
        <View style={viewStyle}>
          <RobotoText style={textStyle}>{props.children}</RobotoText>
        </View>
      </Pressable>
    </View>
  );
}

export default MainButton;
