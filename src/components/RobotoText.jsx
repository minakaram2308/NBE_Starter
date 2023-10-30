import React from 'react';
import {Text} from 'react-native';

function RobotoText(props) {
  let textStyle = [];
  if (props.style) {
    if (Array.isArray(props.style)) {
      textStyle = props.style;
    } else {
      textStyle = [props.style];
    }
  }
  textStyle = textStyle.concat({fontFamily: 'Roboto-Regular'});
  return <Text style={textStyle}>{props.children}</Text>;
}

export default RobotoText;
