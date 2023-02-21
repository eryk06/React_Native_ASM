import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import AxiosIntance from './ultil/AxiosIntance';

const Singup = props => {
  const {navigation} = props;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [emailUser, setemailUser] = useState('');
  const [passwordUser, setpasswordUser] = useState('');

  const Register = async props => {
    console.log(emailUser, passwordUser);

    try {
      const response = await AxiosIntance().post('users/register', {
        email: emailUser,
        password: passwordUser,
      });

      console.log(response);

      if (response.error == false) {
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        ToastAndroid.show('Đăng ký thất bại', ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log('SignUp :' + e);
    }
  };

  const ClickNe = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.textHello, {color: '#1877F2'}]}>Hello!</Text>
      <Text style={styles.textWelcome}>Signup to get Started</Text>
      <View style={{flexDirection: 'row', marginTop: 65}}>
        <Text style={styles.textUser}>Username</Text>
        <Text style={styles.textStar}>*</Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={setemailUser}></TextInput>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textUser}>Password</Text>
        <Text style={styles.textStar}>*</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={setpasswordUser}></TextInput>
        <Image
          style={styles.imageEye}
          source={require('./images/Icon_eye.png')}
        />
      </View>
      <View
        style={[
          styles.viewRemember,
          {justifyContent: 'space-between', marginTop: 10},
        ]}>
        <View style={styles.viewRemember}>
          <CheckBox
            style={{marginTop: 5}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColor={{true: '#1877f2', false: '#1877f2'}}
          />
          <Text style={styles.textRemember}>Remember me</Text>
        </View>
      </View>
      <Pressable style={[styles.nut, {marginTop: 17.5}]} onPress={Register}>
        <Text style={[styles.textNut, {marginTop: 13}]}>Register</Text>
      </Pressable>
      <Text style={styles.textContinue}>or continue with</Text>
      <View
        style={[
          styles.viewRemember,
          {justifyContent: 'space-between', marginTop: 16},
        ]}>
        <Pressable style={styles.buttonSocial}>
          <Image
            style={styles.imageSocial}
            source={require('./images/icon_fb.png')}
          />
          <Text>Facebook</Text>
        </Pressable>
        <Pressable style={styles.buttonSocial}>
          <Image
            style={styles.imageSocial}
            source={require('./images/Icon_gg.png')}
          />
          <Text>Google</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.textContinue}>Already have an account ?</Text>
        <Text
          onPress={ClickNe}
          style={{
            marginTop: 16,
            fontWeight: '600',
            fontFamily: 'Poppins',
            color: '#1877F2',
            fontSize: 14,
            lineHeight: 21,
            letterSpacing: 0.12,
            marginLeft: 5,
          }}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default Singup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
    flexDirection: 'column',
  },
  textHello: {
    fontSize: 48,
    fontFamily: 'Poppins',
    color: '#050505',
    fontWeight: 'bold',
  },
  textWelcome: {
    marginTop: 4,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
  },
  textUser: {
    marginTop: 10,
    color: '#4E4B66',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 4,
  },
  viewRemember: {
    flexDirection: 'row',
  },
  nut: {
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    marginTop: 5,
  },
  textNut: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Poppins',
    letterSpacing: 0.12,
    textAlign: 'center',
  },
  imageSocial: {
    width: 21,
    height: 21,
    marginEnd: 10,
  },
  buttonSocial: {
    flexDirection: 'row',
    width: 150,
    height: 48,
    backgroundColor: '#EEF1F4',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStar: {
    paddingTop: 9,
    paddingLeft: 1,
    color: '#C30052',
  },
  textRemember: {
    marginTop: 9.5,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
  },
  textContinue: {
    marginTop: 16,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4E4B66',
    textAlign: 'center',
  },
  imageEye: {
    width: 21,
    height: 21,
    marginTop: 14,
    position: 'absolute',
    marginLeft: 280,
  },
});
