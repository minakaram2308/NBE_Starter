import React, {useContext, useRef} from 'react';
import styles from '../../styles/components/Login/LoginForm.style';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Formik} from 'formik';
import LoginSchema from '../../schemas/Login-Schema';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import MainButton from '../Buttons/MainButton';
import FingerprintButton from '../Buttons/FingerprintButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/Colors';
import RobotoText from '../RobotoText';
import TextButton from '../Buttons/TextButton';
import LoginInput from './LoginInput';
import LoginContext from '../../store/Authentication/login-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function LoginForm(props) {
  /**
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
  */
  const loginContext = useContext(LoginContext);
  const initialValues = {username: '', password: ''};
  const refs = useRef([]);
  const submitHandler = (values, actions) => {
    console.log(values);
    let authenticated = Math.random() < 0.75;
    if (authenticated) {
      actions.resetForm();
      // props.navigation.navigate('app');
      loginContext.login(values.username);
    } else {
      Alert.alert(
        'Authentication Failed',
        'Invalid username and/or password',
        [{style: 'cancel'}],
        {cancelable: true},
      );
    }
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={initialValues}
      onSubmit={submitHandler}>
      {({
        handleChange,
        handleBlur,
        setFieldTouched,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        dirty,
      }) => {
        /**
          const usernameInvalid = errors.username && touched.username;
          const passwordInvalid = errors.password && touched.password;
        */
        const formInputs = Object.keys(initialValues).map(
          (inputValue, index) => (
            <LoginInput
              key={inputValue}
              label={inputValue}
              invalid={errors[inputValue] && touched[inputValue]}
              icon={<FontAwesome5 name="at" size={25} />}
              value={values[inputValue]}
              handleChange={handleChange.bind(null, inputValue)}
              handleBlur={handleBlur.bind(null, inputValue)}
              setFieldTouched={setFieldTouched.bind(null, inputValue)}
              error={errors[inputValue]}
              password={inputValue.toLowerCase() === 'password'}
              ref={element => (refs.current[index] = element)}
            />
          ),
        );

        for (let x = 0; x < formInputs.length - 1; x++) {
          formInputs[x] = React.cloneElement(formInputs[x], {
            focusNext: () => {
              refs.current[x + 1].focus();
            },
          });
        }

        return (
          <View style={styles.view}>
            <KeyboardAwareScrollView
              contentContainerStyle={styles.scroll}
              keyboardShouldPersistTaps={'handled'}
              enableOnAndroid={true}
              enableAutomaticScroll={true}>
              <View style={styles.titleView}>
                <RobotoText style={styles.title}>
                  Welcome to The National Bank of Egypt
                </RobotoText>
              </View>
              <View style={styles.form}>
                {formInputs}
                {/* <LoginInput
                  label="username"
                  invalid={errors.username && touched.username}
                  icon={<FontAwesome5 name="at" size={25} />}
                  value={values.username}
                  handleChange={handleChange.bind(null, 'username')}
                  handleBlur={handleBlur.bind(null, 'username')}
                  setFieldTouched={setFieldTouched.bind(null, 'username')}
                  error={errors.username}
                />
                <LoginInput
                  label="password"
                  invalid={errors.password && touched.password}
                  icon={<Feather name="lock" size={25} />}
                  value={values.password}
                  handleChange={handleChange.bind(null, 'password')}
                  handleBlur={handleBlur.bind(null, 'password')}
                  setFieldTouched={setFieldTouched.bind(null, 'password')}
                  error={errors.password}
                  password
                /> */}
                {/* <View
                  style={
                    usernameFocus
                      ? usernameInvalid
                        ? [
                            styles.floating,
                            styles.floatingFocused,
                            styles.floatingError,
                          ]
                        : [styles.floating, styles.floatingFocused]
                      : usernameInvalid
                      ? [styles.floating, styles.floatingError]
                      : styles.floating
                  }>
                  <View style={styles.iconInput}>
                    <FontAwesome5
                      name="at"
                      color={usernameFocus ? colors.gray : 'white'}
                      size={25}
                    />
                  </View>
                  <FloatingLabelInput
                    inputStyles={{color: usernameFocus ? 'black' : 'white'}}
                    containerStyles={styles.textInput}
                    label="Username"
                    customLabelStyles={{
                      colorBlurred: 'white',
                      colorFocused: colors.green,
                    }}
                    onChangeText={handleChange('username')}
                    onFocus={setUsernameFocus.bind(null, true)}
                    onBlur={() => {
                      setUsernameFocus(false);
                      setFieldTouched('username');
                      handleBlur('username');
                    }}
                    value={values.username}
                    isFocused={usernameFocus}
                  />
                  {usernameInvalid && (
                    <View style={styles.errorView}>
                      <RobotoText style={styles.errorText}>
                        {errors.username}
                      </RobotoText>
                    </View>
                  )}
                </View> */}
                {/* <View
                  style={
                    passwordFocus
                      ? passwordInvalid
                        ? [
                            styles.floating,
                            styles.floatingFocused,
                            styles.floatingError,
                          ]
                        : [styles.floating, styles.floatingFocused]
                      : passwordInvalid
                      ? [styles.floating, styles.floatingError]
                      : styles.floating
                  }>
                  <View style={styles.iconInput}>
                    <Feather
                      name="lock"
                      color={passwordFocus ? colors.gray : 'white'}
                      size={25}
                    />
                  </View>
                  <FloatingLabelInput
                    inputStyles={{color: passwordFocus ? 'black' : 'white'}}
                    containerStyles={styles.textInput}
                    customLabelStyles={{
                      colorBlurred: 'white',
                      colorFocused: colors.green,
                    }}
                    label="Password"
                    onChangeText={handleChange('password')}
                    onFocus={setPasswordFocus.bind(null, true)}
                    onBlur={() => {
                      setPasswordFocus(false);
                      setFieldTouched('password');
                      handleBlur('password');
                    }}
                    value={values.password}
                    isFocused={passwordFocus}
                    isPassword={true}
                    customShowPasswordComponent={
                      <Ionicons
                        name="eye-off-outline"
                        color={passwordFocus ? colors.gray : 'white'}
                        size={25}
                      />
                    }
                    customHidePasswordComponent={
                      <Ionicons
                        name="eye-outline"
                        color={passwordFocus ? colors.gray : 'white'}
                        size={25}
                      />
                    }
                    showPasswordContainerStyles={{paddingHorizontal: '5%'}}
                  />
                  {passwordInvalid && (
                    <View style={styles.errorView}>
                      <RobotoText style={styles.errorText}>
                        {errors.password}
                      </RobotoText>
                    </View>
                  )}
                </View> */}
                <View style={styles.rememberForget}>
                  <View style={styles.rememberMe}>
                    <View style={styles.rememberMeIcon}>
                      <Pressable onPress={loginContext.toggleRememberMe}>
                        <Feather
                          name="check"
                          color={`${
                            loginContext.rememberMe ? colors.green : 'white'
                          }`}
                          size={25}
                        />
                      </Pressable>
                    </View>
                    <TextButton onPress={loginContext.toggleRememberMe}>
                      Remember me
                    </TextButton>
                  </View>
                  <TextButton onPress={null}>Forgot Password?</TextButton>
                </View>
                <View style={styles.buttons}>
                  <MainButton
                    style={styles.login}
                    onPress={handleSubmit}
                    disabled={!(isValid && dirty)}>
                    Log In
                  </MainButton>
                  <FingerprintButton style={styles.fingerprint} />
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
