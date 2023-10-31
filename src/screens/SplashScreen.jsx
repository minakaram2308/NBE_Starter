import React, { useContext } from 'react';
import {Image, View} from 'react-native';
import LottieView from 'lottie-react-native';
import splashScreen from '../../assets/SplashScreen.json';
import logoText from '../../assets/media/logoText.png';
import styles from '../styles/components/SplashScreen.style';
import { ModeContext } from '../Context/ModeContext';

export const SplashScreen = props => {
  //NOTE - replace dark with the actual dark context
  let {darkTheme, toggle} = useContext(ModeContext);
  let viewStyle = darkTheme
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
