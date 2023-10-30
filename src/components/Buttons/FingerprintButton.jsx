import React, {useState} from 'react';
import styles from '../../styles/components/Buttons/FingerprintButton.style';
import {Pressable, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../constants/Colors';

function FingerprintButton(props) {
  const [isPressed, setIsPressed] = useState(false);

  let iconStyle = isPressed ? [styles.icon, styles.iconPressed] : [styles.icon];

  return (
    <View style={[styles.view, props.style]}>
      <Pressable
        onPressIn={setIsPressed.bind(null, true)}
        onPressOut={setIsPressed.bind(null, false)}
        onPress={props.onPress}>
        <View style={iconStyle}>
          <FontAwesome5
            name="fingerprint"
            color={isPressed ? 'white' : colors.orange}
            size={30}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default FingerprintButton;
