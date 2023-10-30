import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
function PressableNavItem(props) {
  return (
    <Pressable
      android_ripple={{color: 'black'}}
      onPress={props.onPress}
      style={[styles.iconContainer, {backgroundColor: props.color}]}>
      <View>{props.children}</View>
    </Pressable>
  );
}

export default PressableNavItem;

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginRight:10,
    borderRadius:8,
    elevation: 8,
  },
});
