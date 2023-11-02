import React from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import background from '../../assets/media/background.png';
import logoFull from '../../assets/media/logoFull.png';

import styles from '../styles/components/LoginScreen.style';
import LanguageButton from '../components/Buttons/LanguageButton';
import TextButton from '../components/Buttons/TextButton';
import RobotoText from '../components/RobotoText';
import LoginForm from '../components/Login/LoginForm';

export const LoginScreen = props => {

  return (
    <>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      /> */}
      <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.background}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.select({android: 'height', ios: 'padding'})}>
            <View style={styles.fade}>
              <View style={styles.content}>
                <View style={styles.header}>
                  <LanguageButton />
                  <Image source={logoFull} />
                </View>
                <View style={styles.body}>
                  {/* <RobotoText style={styles.title}>
              Welcome to The National Bank of Egypt
            </RobotoText> */}
                  <LoginForm navigation={props.navigation} />
                  <View style={styles.signup}>
                    <RobotoText>Don't have an account? </RobotoText>
                    {/* //TODO - link to sign up page} */}
                    <TextButton
                      style={[styles.footerLinks, {fontSize: 14}]}
                      onPress={()=>props.navigation.navigate('signup')}>
                      Sign up
                    </TextButton>
                  </View>
                </View>
                <View style={styles.footer}>
                  <View style={styles.footerInner}>
                    {/* <RobotoText style={styles.footerLinks}>Contact Us</RobotoText> */}
                    <TextButton style={styles.footerLinks} onPress={null}>
                      Contact Us
                    </TextButton>
                    <RobotoText style={styles.footerLinks2}>-</RobotoText>
                    <TextButton style={styles.footerLinks} onPress={null}>
                      FAQs
                    </TextButton>
                    <RobotoText style={styles.footerLinks2}>-</RobotoText>
                    <TextButton style={styles.footerLinks} onPress={null}>
                      Help
                    </TextButton>
                  </View>
                  <RobotoText style={styles.footerCopyright}>
                    Copyright © NBE 2021 All Rights Reserved - National Bank of
                    Egypt
                  </RobotoText>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </Pressable>
    </>
  );
};
