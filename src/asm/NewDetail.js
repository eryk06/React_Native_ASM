import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const NewDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textBBC}>
        <Image source={require('./images/LogoBTC.png')} />
        <Text style={styles.textBBC2}>BBC News</Text>
        <Text style={styles.textBBC3}>14m ago</Text>
        <Pressable style={styles.nut}>
          <Text style={styles.textNut}>Following</Text>
        </Pressable>
      </View>
      <Image source={require('./images/new.png')} />
      <Text style={styles.textContent}>Europe</Text>
      <Text style={styles.textContent2}>
        Ukraine's President Zelensky to BBC: Blood money being paid for Russian
        oil
      </Text>
      <Text style={styles.textContent3}>
        Ukrainian President Volodymyr Zelensky has accused European countries
        that continue to buy Russian oil of "earning their money in other
        people's blood". In an interview with the BBC, President Zelensky
        singled out Germany and Hungary, accusing them of blocking efforts to
        embargo energy sales, from which Russia stands to make up to £250bn
        ($326bn) this year. There has been a growing frustration among Ukraine's
        leadership with Berlin, which has backed some sanctions against Russia
        but so far resisted calls to back tougher action on oil sales.
      </Text>
      <View style={styles.textBBC4}>
        <Image
          style={styles.imageHeart}
          source={require('./images/Heart.png')}
        />
        <Text style={styles.textContent4}>24.5K</Text>
        <Image
          style={[styles.imageHeart, {marginLeft: 31}]}
          source={require('./images/Comment.png')}
        />
        <Text style={styles.textContent4}>1K</Text>
        <Image
          style={[styles.imageHeart, {marginLeft: 140}]}
          source={require('./images/Bookmark.png')}
        />
      </View>
    </ScrollView>
  );
};

export default NewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
  },
  textContent: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  textContent2: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0.12,
    color: '#000000',
    marginTop: 4,
  },
  textContent3: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    marginTop: 16,
  },
  textContent4: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    marginLeft: 6,
    marginTop: 47,
  },
  textBBC: {
    flexDirection: 'row',
    marginStart: 5,
  },
  textBBC2: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
    marginStart: 4,
  },
  textBBC3: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#000000',
    marginTop: 20,
    marginLeft: -75,
  },
  textBBC4: {
    flexDirection: 'row',
  },
  nut: {
    width: 102,
    height: 34,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    marginTop: 5,
    marginLeft: 85,
  },
  textNut: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Poppins',
    letterSpacing: 0.12,
    textAlign: 'center',
    marginTop: 3,
  },
  imageHeart: {
    marginTop: 50,
  },
});
