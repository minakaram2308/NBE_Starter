import React, {useImperativeHandle, useRef, useState} from 'react';
import styles from '../../styles/components/Login/LoginInput.style';
import {colors} from '../../constants/Colors';
import {View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import RobotoText from '../RobotoText';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginInput = React.forwardRef((props, ref) => {
  const [inputFocus, setInputFocus] = useState(false);
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <View
      style={
        inputFocus
          ? props.invalid
            ? [styles.floating, styles.floatingFocused, styles.floatingError]
            : [styles.floating, styles.floatingFocused]
          : props.invalid
          ? [styles.floating, styles.floatingError]
          : styles.floating
      }>
      <View style={styles.iconInput}>
        {props.password ? (
          <Feather
            name="lock"
            size={25}
            color={
              inputFocus
                ? props.invalid
                  ? colors.error
                  : colors.gray
                : props.invalid
                ? colors.error
                : 'white'
            }
          />
        ) : (
          React.cloneElement(props.icon, {
            color: inputFocus
              ? props.invalid
                ? colors.error
                : colors.gray
              : props.invalid
              ? colors.error
              : 'white',
          })
        )}
      </View>
      <FloatingLabelInput
        inputStyles={{color: inputFocus ? 'black' : 'white'}}
        containerStyles={styles.textInput}
        label={props.label}
        customLabelStyles={{
          colorBlurred: props.invalid ? colors.error : 'white',
          colorFocused: props.invalid ? colors.error : colors.green,
        }}
        onChangeText={props.handleChange()}
        onFocus={setInputFocus.bind(null, true)}
        onBlur={() => {
          setInputFocus(false);
          props.setFieldTouched();
          props.handleBlur();
        }}
        value={props.value}
        isFocused={inputFocus}
        isPassword={props.password}
        customShowPasswordComponent={
          <Ionicons
            name="eye-off-outline"
            color={
              inputFocus
                ? props.invalid
                  ? colors.error
                  : colors.gray
                : props.invalid
                ? colors.error
                : 'white'
            }
            size={25}
          />
        }
        customHidePasswordComponent={
          <Ionicons
            name="eye-outline"
            color={
              inputFocus
                ? props.invalid
                  ? colors.error
                  : colors.gray
                : props.invalid
                ? colors.error
                : 'white'
            }
            size={25}
          />
        }
        showPasswordContainerStyles={{paddingHorizontal: '5%'}}
        autoComplete="off"
        ref={inputRef}
        onSubmitEditing={() => {
          props.focusNext?.();
        }}
      />
      {props.invalid && (
        <View style={styles.errorView}>
          <RobotoText style={styles.errorText}>{props.error}</RobotoText>
        </View>
      )}
    </View>
  );
});

export default LoginInput;
