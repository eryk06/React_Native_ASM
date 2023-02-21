import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ItemListNews = props => {
  const {dulieu} = props;

  const {navigation} = props;

  const ClickNeee = () => {
    navigation.navigate('NewDetail');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.container} onPress={ClickNeee}>
        <Image style={styles.image} source={{uri: dulieu.image}} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>{dulieu.title}</Text>
          <Text style={styles.textContent} numberOfLines={2}>
            {dulieu.content}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.imageLogo}
              source={require('./images/LogoBTC.png')}
            />
            <Text style={styles.textBBC}>BBC News</Text>
            <Image
              style={styles.imageClock}
              source={require('./images/Clock.png')}
            />
            <Text style={styles.textAgo}>14m ago</Text>
            <Image
              style={styles.imageBaCham}
              source={require('./images/Vector.png')}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginEnd: 25,
    flexDirection: 'row',
    margin: 5,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 10,
    marginTop: 10,
  },
  textTitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    marginLeft: 4,
  },
  textContent: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000',
    letterSpacing: 0.12,
    marginTop: 4,
    marginLeft: 4,
  },
  content: {
    marginStart: 5,
    width: Dimensions.get('window').width - 105,
  },
  imageLogo: {
    width: 21,
    height: 21,
    marginTop: 4,
  },
  textBBC: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 19.5,
    marginLeft: 5,
    letterSpacing: 0.12,
    marginTop: 4,
    marginLeft: 4,
  },
  textAgo: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    marginLeft: 5.17,
    letterSpacing: 0.12,
    marginTop: 4,
  },
  imageClock: {
    marginTop: 8.17,
    marginLeft: 9.17,
  },
  imageBaCham: {
    marginTop: 13.13,
    marginLeft: 22,
  },
});
