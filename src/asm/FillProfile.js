import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const FillProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textProfile}>Fill your Profile</Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          style={styles.imageProfile}
          source={require('./images/ImageProfile.png')}
        />
        <View style={{position: 'absolute'}}>
          <Image
            style={{marginTop: 130, marginLeft: 60}}
            source={require('./images/ImageFrame.png')}
          />
        </View>
      </View>
      <Text style={styles.textUser}>Username</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.textUser}>Full Name</Text>
      <TextInput style={styles.textInput}></TextInput>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textUser}>Email Address</Text>
        <Text style={styles.textStar}>*</Text>
      </View>
      <TextInput style={styles.textInput}></TextInput>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textUser}>Phone Number</Text>
        <Text style={styles.textStar}>*</Text>
      </View>
      <TextInput style={styles.textInput}></TextInput>
      <Pressable style={[styles.nut, {marginTop: 30}]}>
        <Text style={[styles.textNut, {marginTop: 13}]}>Next</Text>
      </Pressable>
    </View>
  );
};

export default FillProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
    flexDirection: 'column',
  },
  textProfile: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    textAlign: 'center',
    color: '#000000',
  },
  imageProfile: {
    marginTop: 16,
  },
  textUser: {
    marginTop: 16,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 4,
  },
  textStar: {
    paddingTop: 16,
    paddingLeft: 1,
    color: '#C30052',
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
});
