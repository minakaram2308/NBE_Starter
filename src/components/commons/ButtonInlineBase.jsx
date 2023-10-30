import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {colors} from '../../constants/Colors';

export default function ButtonInlineBase({
  children,
  onPress,
  variant,
  disabled = false,
}) {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Pressable
      style={[styles.pressableActive]}
      hitSlop={10}
      disabled={disabled}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      android_disableSound={true}>
      <View style={[styles.pressableWrapper, {opacity: pressed ? 0.9 : 1}, styles[variant]]}>
        <Pressable
          style={[styles.pressableStyling]}
          android_ripple={{color: colors.btnRippleBase}}
          onPress={onPress}>
          {children}
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableActive: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#EBEBEB',
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
    // aspectRatio: 2/1
  },
  pressableWrapper: {
    backgroundColor: 'white',
    // minWidth: 60,
    // maxHeight: 30,
    // flex:1,
    flexDirection: 'column'
  },

  pressableStyling: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  green:{
    backgroundColor: colors.primary
  }
});
