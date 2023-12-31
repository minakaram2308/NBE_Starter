import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/Colors';
import ButtonInlineBase from './ButtonInlineBase';
import { RDP } from '../../utils/scaling';

export default function ButtonInlineText({
  children,
  onPress,
  variant,
  disabled = false,
}) {

    let textNodeStyle = [styles.text, styles[variant]]
  let textNodes = [
    <Text style={textNodeStyle}>
        {children}
    </Text>
  ];

  if(children instanceof Array)
  {
    textNodes = children.map(function(e, i){
        return(
        <Text style={textNodeStyle} key={i}>
            {e}
        </Text>
        )
    })
  } 
  return (
    <ButtonInlineBase disabled={disabled} onPress={onPress} variant={variant}>
        <View style={styles.textWrapper}>
            {textNodes}
        </View>
    </ButtonInlineBase>
  );
}

const styles = StyleSheet.create({
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: RDP(10),
        paddingVertical: RDP(12)
        // flex: 1
        // paddingLeft: 20,
        // paddingRight: 20,
    },
  text: {
    fontSize: RDP(16),
    color: colors.primary,
    paddingHorizontal: RDP(3),
    // paddingVertical: 10,
    fontWeight: '500'
  },
  green:{
    color: 'white'
  },
});
