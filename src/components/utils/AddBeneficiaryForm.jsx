import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import ErrorIcon from 'react-native-vector-icons/MaterialIcons';
import CorrectIcon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');
function AddBeneficiaryForm() {
  const data = ['Option 1', 'Option 2', 'Option 3'];
  const [isFocused, setIsFocused] = useState(false);
  const [bankBranch, setBankBranch] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    accountNumber: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputFocus = id => {
    setIsFocused(id);
  };

  // Define a function to handle the onBlur event of the TextInput
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const isValidAccountNumber = accountNumber => {
    const accountPattern = /^[A-Z]{2}\d{11}$/;

    return accountPattern.test(accountNumber);
  };

  const isValidPhoneNumber = phoneNumber => {
    // Define a regular expression for a simple phone number pattern
    const phonePattern = /^\d{11}$/; // Assumes a 10-digit phone number without spaces or other characters

    return phonePattern.test(phoneNumber);
  };
  const isEmailValid = text => {
    // Regular expression for a simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(text);
  };

  console.log(formData);

  const isFormValid = () => {
    // Check if all form fields are filled
    if (
      Object.values(formData).every(value => value.trim() !== '') &&
      isEmailValid(formData.email) &&
      isValidPhoneNumber(formData.phoneNumber) &&
      isValidAccountNumber(formData.accountNumber) &&
      bankBranch !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  function AddBeneficiarHandler() {}
  return (
    <View style={[styles.rootContainer]}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View
          style={[
            isFocused === 1 ? styles.CardContainerFocus : styles.CardContainer,
          ]}>
          <Text style={styles.label}>First Name</Text>
          <View style={{flexDirection: 'row', flex: 1}}>
            <TextInput
              style={[styles.TextInput, {height: '70%'}]}
              onFocus={handleInputFocus.bind(null, 1)}
              onBlur={handleInputBlur}
              value={formData.firstName}
              onChangeText={element => {
                setFormData({...formData, firstName: element});
              }}
            />
            {formData.firstName ? (
              <View>
                <CorrectIcon
                  name="check"
                  size={24}
                  color={'#000000'}
                  style={{marginTop: 5}}
                />
              </View>
            ) : (
              <View style={{marginTop: 5}}>
                <ErrorIcon name="error" size={24} color={'rgb(255, 161, 0)'} />
              </View>
            )}
          </View>
        </View>
        <View
          style={[
            isFocused === 2 ? styles.CardContainerFocus : styles.CardContainer,
          ]}>
          <Text style={styles.label}>Last Name</Text>
          <View style={{flexDirection: 'row', flex: 1}}>
            <TextInput
              style={[styles.TextInput, {height: '70%'}]}
              value={formData.lastName}
              onChangeText={element => {
                setFormData({...formData, lastName: element});
              }}
              onFocus={handleInputFocus.bind(null, 2)}
              onBlur={handleInputBlur}
            />
            {formData.lastName ? (
              <View>
                <CorrectIcon
                  name="check"
                  size={24}
                  color={'#000000'}
                  style={{marginTop: 5}}
                />
              </View>
            ) : (
              <View style={{marginTop: 5}}>
                <ErrorIcon name="error" size={24} color={'rgb(255, 161, 0)'} />
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={styles.CardContainerr}>
        <Text style={styles.label}>Bank Branch</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '80%', height: '100%', marginTop: 5}}>
            <ModalDropdown
              dropdownStyle={{
                width: '80%',
                backgroundColor: 'transparent',
                borderRadius: 24,
                borderWidth: 1,
              }}
              dropdownTextStyle={{
                textAlign: 'center',
                fontSize: 18,
                backgroundColor: 'rgba(255, 255, 255,0.9)',
              }}
              onSelect={element => {
                setBankBranch(element + 1);
              }}
              style={{width: 700, marginLeft: 9}}
              options={data}
              textStyle={{fontSize: 16}}
            />
          </View>
          {bankBranch ? (
            <View>
              <CorrectIcon
                name="check"
                size={24}
                color={'#000000'}
                style={{marginTop: 5, marginLeft: 34}}
              />
            </View>
          ) : (
            <View style={{marginTop: 5, marginLeft: 34}}>
              <ErrorIcon name="error" size={24} color={'rgb(255, 161, 0)'} />
            </View>
          )}
        </View>
      </View>
      <View
        style={[
          isFocused === 4 ? styles.CardContainerrFocus : styles.CardContainerr,
        ]}>
        <Text style={styles.label}>Account Number</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TextInput
            style={[styles.TextInput]}
            onFocus={handleInputFocus.bind(null, 4)}
            placeholder="Enter Bank Account Number"
            onChangeText={text => {
              setFormData({...formData, accountNumber: text});
              // validation = accountHandleValidation();
            }}
            value={formData.accountNumber}
          />
          {isValidAccountNumber(formData.accountNumber) ? (
            <View>
              <CorrectIcon
                name="check"
                size={24}
                color={'#000000'}
                style={{marginTop: 5, marginLeft: 34}}
              />
            </View>
          ) : (
            <View style={{marginTop: 5, marginLeft: 34}}>
              <ErrorIcon name="error" size={24} color={'rgb(255, 161, 0)'} />
            </View>
          )}
        </View>
      </View>
      <View
        style={[
          isFocused === 5 ? styles.CardContainerrFocus : styles.CardContainerr,
        ]}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TextInput
            style={[styles.TextInput, {height: '70%'}]}
            placeholder="Enter Phone Number"
            onFocus={handleInputFocus.bind(null, 5)}
            onChangeText={text => {
              setFormData({...formData, phoneNumber: text});
            }}
            value={formData.phoneNumber}
            keyboardType="numeric"
          />
          {isValidPhoneNumber(formData.phoneNumber) ? (
            <View>
              <CorrectIcon
                name="check"
                size={24}
                color={'#000000'}
                style={{marginTop: 5, marginLeft: 34}}
              />
            </View>
          ) : (
            <View style={{marginTop: 5, marginLeft: 34}}>
              <ErrorIcon name="error" size={24} color={'rgb(255, 161, 0)'} />
            </View>
          )}
        </View>
      </View>
      <View
        style={[
          isFocused === 6 ? styles.CardContainerrFocus : styles.CardContainerr,
        ]}>
        <Text style={styles.label}>Email</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TextInput
            style={[styles.TextInput, {marginBottom: 50}]}
            placeholder="example@gmail.com"
            value={formData.email}
            onFocus={handleInputFocus.bind(null, 6)}
            onChangeText={element => {
              setFormData({...formData, email: element});
            }}
            keyboardType="email-address"
          />
          {isEmailValid(formData.email) ? (
            <View>
              <CorrectIcon
                name="check"
                size={24}
                color={'#000000'}
                style={{marginTop: 5, marginLeft: 34}}
              />
            </View>
          ) : (
            <View style={{marginTop: 5, marginLeft: 34}}>
              <ErrorIcon name="error" size={24} color={'rgb(255, 161, 0)'} />
            </View>
          )}
        </View>
      </View>
      {console.log('form valid', isFormValid())}
      <View>
        <TouchableOpacity
          disabled={isFormValid() ? false : true}
          style={[
            styles.formSubmitButton,
            isFormValid() && {backgroundColor: '#007236'},
          ]}
          onPress={AddBeneficiarHandler}>
          <Text style={[isFormValid() && {color: 'white'}]}>
            Add Beneficiar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddBeneficiaryForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  CardContainer: {
    backgroundColor: 'white',
    width: width * 0.4,
    height: height * 0.09,
    marginTop: 20,
    borderRadius: 12,
    marginHorizontal: 8,
    elevation: 8,
  },
  CardContainerFocus: {
    backgroundColor: 'white',
    width: width * 0.4,
    height: height * 0.09,
    marginTop: 20,
    borderRadius: 12,
    marginHorizontal: 8,
    elevation: 8,
    borderWidth: 1,
  },
  TextInput: {
    marginBottom: 5,
    padding: 8,
    width: '80%',
    height: '70%',
  },

  label: {
    padding: 8,
    paddingBottom: 0,
    fontWeight: 'bold',
  },
  CardContainerr: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 12,
    height: height * 0.095,
    elevation: 8,
    marginTop: 20,
  },
  CardContainerrFocus: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 12,
    height: height * 0.095,
    elevation: 8,
    marginTop: 20,
    borderWidth: 1,
  },
  formSubmitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 25,
    height: 40,
    padding: 0,
    borderRadius: 12,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    marginBottom: 25,
  },
  modal: {
    width: '80%',
  },
});
