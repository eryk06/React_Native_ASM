import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ItemListNews from './ItemListNews';

const ListNews = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image source={require('./images/Logo.png')} />
        <Image
          styles={styles.imageLogoR}
          source={require('./images/Ring.png')}
        />
      </View>
      <View style={styles.headerLogo}>
        <Text style={styles.textLa}>Lastest</Text>
        <Text style={styles.textSeeAll}>See all</Text>
      </View>
      <View style={styles.textAll}>
        <Pressable>
          <Text style={styles.textNutAll}>All</Text>
        </Pressable>
        <Text>Sports</Text>
        <Text>Politic</Text>
        <Text>Bussiness</Text>
        <Text>Helth</Text>
        <Text>Travel</Text>
      </View>
      <FlatList
        data={dataNe}
        renderItem={({item}) => (
          <ItemListNews dulieu={item} navigation={navigation} />
        )}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
    flexDirection: 'column',
  },
  headerLogo: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageLogoR: {
    justifyContent: 'flex-end',
  },
  textLa: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.12,
    lineHeight: 24,
  },
  textAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  textNutAll: {
    borderBottomWidth: 2,
    borderColor: '#1877F2',
  },
  textSeeAll: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 21,
  },
});

const dataNe = [
  {
    _id: '1',

    title: 'Europe',

    content: 'Ukraines President Zelensky to BBC: Blood money being paid',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '2',

    title: 'Lịch thi đánh giá năng lực, tư duy năm 2023',

    content:
      'Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '3',

    title: 'Đối phó với bài tập Tết',

    content:
      'Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '4',

    title: 'Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt',

    content:
      'Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '5',

    title: 'Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường',

    content:
      'Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '6',

    title: 'Nam sinh trả lại hơn 40 triệu đồng nhặt được',

    content:
      'Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '7',

    title: 'Cho con đi ngắm trăng, sao từ bé',

    content:
      'Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },
];
