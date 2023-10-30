import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/Colors';
import ButtonInlineBase from './ButtonInlineBase';

export default function ButtonInlineToggle({
  children,
  onPress,
  control, 
  disabled = false,
}) {
  const [toggle, setToggle] = control

  return (
    // <ButtonInlineBase onPress={(() => setToggle((prev) => !prev))}>
    //   {/* {children.map(function (e, i) {
    //     return ( */}
    //       <View style={[styles.textWrapper, toggle && styles.selected]}>
    //           <Text style={[styles.text, toggle && styles.textSelected]}>
    //             {children[0]}
    //           </Text>
    //       </View>
    //       <View style={[styles.textWrapper, !toggle && styles.selected]}>
    //           <Text style={[styles.text, !toggle && styles.textSelected]}>
    //             {children[1]}
    //           </Text>
    //       </View>
    //     {/* ); */}
    //   {/* })} */}
    // </ButtonInlineBase>
    <ButtonInlineBase >
              <View style={styles.container}>
                <Pressable style={[styles.textWrapper, toggle && styles.selected]} onPress={(() => setToggle(true))}>
                    <Text style={[styles.text, toggle && styles.textSelected]}>
                      {children[0]}
                    </Text>
                </Pressable>
                <Pressable style={[styles.textWrapper, !toggle && styles.selected]} onPress={(() => setToggle(false))}>
                    <Text style={[styles.text, !toggle && styles.textSelected]}>
                      {children[1]}
                    </Text>
                </Pressable>
              </View>
    </ButtonInlineBase>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper:{
    justifyContent: 'center',
    // flex: 1,
    // backgroundColor: '#F0FF0a',
    aspectRatio: 1,
    // padding: 2,
    borderRadius: 100,
    paddingHorizontal: 7
  },
  selected:{
    backgroundColor: colors.primary
  },
  text: {
    color: colors.textMuted,
    // paddingHorizontal: 5,
    fontWeight: '500',
},
textSelected:{
    color: 'white',
  },
});
