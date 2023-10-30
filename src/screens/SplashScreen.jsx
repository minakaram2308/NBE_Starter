import React from 'react';
import {Image, View} from 'react-native';
import LottieView from 'lottie-react-native';
import splashScreen from '../../assets/SplashScreen.json';
import logoText from '../../assets/media/logoText.png';
import styles from '../styles/components/SplashScreen.style';

export const SplashScreen = props => {
  //NOTE - replace dark with the actual dark context
  let dark = true;
  let viewStyle = dark
    ? [styles.splashContainer, {backgroundColor: 'black'}]
    : styles.splashContainer;

  return (
    <View style={viewStyle}>
      <LottieView
        style={styles.splash}
        source={splashScreen}
        autoPlay
        loop={false}
        onAnimationFinish={props.onAnimationFinish}
      />
      <View style={styles.logo}>
        <Image source={logoText} />
      </View>
    </View>
  );
};
