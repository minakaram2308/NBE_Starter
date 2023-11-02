import React, {useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Image,
  Button,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from '../styles/components/UserBar.style';
import {lightColors} from '../styles/components/Modes/LightColors';
import {darkColors} from '../styles/components/Modes/DarkColors';
import {ModeContext, ThemeProvider} from '../Context/ModeContext';
import LoginContext from '../store/Authentication/login-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const UserBar = () => {
  const loginContext = useContext(LoginContext);
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle = darkTheme
    ? darkColors.greyBackgrd
    : lightColors.lightBackgrd;
  let textStyle = darkTheme ? darkColors.darkText : lightColors.lightText;

  return (
    <View style={[styles.topBar, {backgroundColor: backgroundStyle}]}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={[styles.userName, {color: textStyle}]}>
            {loginContext.username}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="phone" size={10} style={style.Icon} />
            <Text style={{color: textStyle}}>+20 102 675 9186</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="envelope" size={10} solid  style={style.Icon}/>
            <Text style={{color: textStyle}}>$494,472.95</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  Icon: {flex: 0, backgroundColor: '#A6B4C5', borderRadius: 100, padding: 5, marginRight:5},
});
