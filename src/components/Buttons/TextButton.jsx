import React, {useState} from 'react';
import {Pressable} from 'react-native';
import RobotoText from '../RobotoText';

function TextButton(props) {
  const [isPressed, setIsPressed] = useState(false);
  let textStyle = [];

  if (props.style) {
    if (Array.isArray(props.style)) {
      textStyle = textStyle.concat(...props.style);
    } else {
      textStyle = textStyle.concat(props.style);
    }
  }

  if (isPressed) {
    textStyle = textStyle.concat({
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    });
  }
  return (
    <Pressable
      onPressIn={setIsPressed.bind(null, true)}
      onPressOut={setIsPressed.bind(null, false)}
      onPress={props.onPress}>
      <RobotoText style={textStyle}>{props.children}</RobotoText>
    </Pressable>
  );
}

export default TextButton;
