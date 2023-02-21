import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import React, {useContext, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import {AppContext} from './ultil/AppContext';
import AxiosIntance from './ultil/AxiosIntance';

const Login = props => {
  const {navigation} = props;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [emailUser, setemailUser] = useState('lamdz22@gmail.com');
  const [passUser, setpassUser] = useState('1234');
  const {setIsLogin} = useContext(AppContext);

  const Login = async props => {
    console.log(emailUser, passUser);

    try {
      const response = await AxiosIntance().post('auth/login', {
        email: emailUser,
        password: passUser,
      });

      console.log(response);

      if (response.error == false) {
        ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
        await AsyncStorage.setItem('token', response.data.token);
        setIsLogin(true);
        navigation.navigate('ListNews');
      } else {
        ToastAndroid.show('Đăng ký thất bại', ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log('Login :' + e);
    }
  };

  const ClickNee = () => {
    navigation.navigate('Singup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHello}>Hello</Text>
      <Text style={[styles.textHello, {color: '#1877F2'}]}>Again!</Text>
      <Text style={styles.textWelcome}>
        Welcome back you've {'\n'} been missed
      </Text>
      <View style={{flexDirection: 'row', marginTop: 48}}>
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
          onChangeText={setpassUser}></TextInput>
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
            style={{
              marginTop: 5,
            }}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColor={{true: '#1877f2', false: '#1877f2'}}
          />
          <Text style={styles.textRemember}>Remember me</Text>
        </View>
        <Text style={styles.textForgotPassword}>Forgot the password?</Text>
      </View>
      <Pressable style={[styles.nut, {marginTop: 17.5}]}>
        <Text onPress={Login} style={[styles.textNut, {marginTop: 13}]}>
          Login
        </Text>
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
        <Text style={styles.textContinue}>don’t have an account ? </Text>
        <Text
          onPress={ClickNee}
          style={{
            marginTop: 15,
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 21,
            color: '#1877F2',
          }}>
          SignUp
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
    borderRadius: 6,
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
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStar: {
    paddingTop: 9,
    paddingLeft: 1,
    color: '#C30052',
  },
  textForgotPassword: {
    marginTop: 9.5,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#5890FF',
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
