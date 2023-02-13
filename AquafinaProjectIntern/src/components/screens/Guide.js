import { Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Guide = ({ navigation }) => {
  const goToStart = () => {
    navigation.navigate('Start')
  }
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor={'#1545A5'} />
      <View style={styles.viewHeader}>
        <Image style={styles.imgH}
          source={require('../../../assets/images/logo.png')}
        />
        <Text style={styles.textH}>HƯỚNG DẪN THAM GIA</Text>
      </View>


      <View style={styles.content}>
        <View style={styles.vhContent}>
          <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
            <Image style={styles.icBack}
              resizeMode='cover'
              source={require('../../../assets/images/ic_back.png')}
            />
          </TouchableOpacity>

          <View style={styles.textHC}>
            <Text style={styles.text1}>TRẠM</Text>
            <Image style={styles.imgT}
              resizeMode='cover'
              source={require('../../../assets/images/circle_t.png')} />
            <Text style={styles.text2}>TÁI SINH</Text>
            <Text style={styles.text3}>CỦA AQUAFINA</Text>
          </View>
        </View>

        <View style={styles.vbContent}>

          <View style={styles.vItem}>
            <Image style={styles.img1}
              source={require('../../../assets/images/ic_1.png')} />

            <View style={styles.vItemR}>
              <Text style={styles.textI1}>Bước 1</Text>
              <Text style={styles.textI2}>Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái và chờ hệ thống xử lý.</Text>
            </View>
          </View>

          <View style={styles.vItem}>
            <Image style={styles.img1}
              resizeMode='cover'
              source={require('../../../assets/images/ic_2.png')} />

            <View style={styles.vItemR}>
              <Text style={styles.textI1}>Bước 2</Text>
              <Text style={styles.textI2}>Hoàn tất toàn quá trình bỏ chai.
                Quét mã QR bằng điện thoại để dẫn về trang chủ: <Text style={[styles.textI2, { color: 'blue' }]}>Aquafina.pepsishop.vn</Text></Text>
            </View>
          </View>

          <View style={styles.vItem}>
            <Image style={styles.img1}
              resizeMode='cover'
              source={require('../../../assets/images/ic_3.png')} />

            <View style={styles.vItemR}>
              <Text style={styles.textI1}>Bước 3</Text>
              <Text style={styles.textI2}>Đăng nhập hoặc đăng ký để tích điểm vào tài khoản của bạn với cơ hội nhận được các phần quà giá trị từ Aquafina.</Text>
            </View>
          </View>
          <Text style={styles.textF}>Nhấn <Text style={{ color: 'blue' }}>“XÁC NHẬN”</Text> khi bạn đã đọc và hiểu cách thức tham gia</Text>
        </View>
        <Image style={styles.imgC}
          source={require('../../../assets/images/circle_content.png')} />
      </View>
      <TouchableOpacity style={styles.btnS} onPress={() => goToStart()}>
        <Image style={styles.imgBS}
          resizeMode='cover'
          source={require('../../../assets/images/btn_accept.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Guide

const styles = StyleSheet.create({
  
  imgBS: {
    width: '100%',
    height: '100%',
  },
  btnS: {
    width: '25%',
    height: '13%',
    alignSelf: 'center',
    marginTop: 10
  },
  imgC: {
    position: 'absolute',
    resizeMode: 'cover',
    width:'100%',
    height: '100%'

  },
  textF: {
    alignSelf: 'center',
    color: '#707172',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    width: '70%',
    height: '20%',
    marginHorizontal: '15%',
    marginTop: '5%'

  },
  textI2: {
    color: '#707172',
    fontSize: 12,
    fontWeight: '400',
  },
  textI1: {
    color: '#00358C',
    fontSize: 16,
    fontWeight: '700',
  },
  vItemR: {
    width: '73%',
    height: '100%',
    marginLeft: '5%',
    marginTop:'5%',
  },
  img1: {
    width: WIDTH*0.2,
    height: "90%",
    resizeMode: 'cover',
  },
  vItem: {
    width: '98%',
    height:'38%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#CCDAF1',
    borderWidth: 3,
    marginBottom: 10,
    alignItems:'center',
  },
  vbContent: {
    flex: 0.55
  },
  text3: {
    color: '#1545A5',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 8.5
  },
  text2: {
    color: '#1545A5',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 15
  },
  imgT: {
    width: WIDTH*0.07,
    height: HEIGHT*0.09,
    position: 'absolute',
    top: -HEIGHT*0.02,
    left: WIDTH*0.03
  },
  text1: {
    color: '#1545A5',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: 20
  },
  textHC: {
    alignItems: 'center'
  },
  icBack: {
    width: '100%',
    height: '100%',
  },
  btnBack: {
    width: WIDTH * 0.08,
    height: HEIGHT * 0.04,
  },
  vhContent: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    marginBottom:'5%'
  },
  content: {
    flex: 0.8,
    width: '95%',
    marginHorizontal: 2,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingTop: '5%'
  },
  textH: {
    color: '#0047BA',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  imgH: {
    alignSelf: 'center',
    width: WIDTH * 0.39,
    height: HEIGHT * 0.06,
    marginTop: HEIGHT * 0.01,
    resizeMode: 'stretch',
  },
  viewHeader: {
    flex: 0.15,
  },
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8',
  }
})