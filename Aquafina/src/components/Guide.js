import { Image, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Guide = ({navigation}) => {
  const goToStart = () => {
      navigation.navigate('Start')
  }
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor={'#1545A5'} />
      <Image style={styles.imgH}
        resizeMode='cover'
        source={require('../../images/logo.png')}
      />
      <Text style={styles.textH}>HƯỚNG DẪN THAM GIA</Text>
      
      <View style={styles.content}>
        <View style={styles.vhContent}>

          <TouchableOpacity style={styles.btnBack}>
            <Image style={styles.icBack}
              resizeMode='cover'
              source={require('../../images/ic_back.png')}
            />
          </TouchableOpacity>

          <View style={styles.textHC}>

            <View>
              <Text style={styles.text1}>TRẠM</Text>
              <Image style={styles.imgT}
                resizeMode='cover'
                source={require('../../images/circle_t.png')} />
            </View>

            <Text style={styles.text2}>TÁI SINH</Text>
            <Text style={styles.text3}>CỦA AQUAFINA</Text>
          </View>
        </View>

        <View style={styles.vbContent}>

          <View style={styles.vItem}>
            <Image style={styles.img1}
              resizeMode='cover'
              source={require('../../images/ic_1.png')} />

            <View style={styles.vItemR}>
              <Text style={styles.textI1}>Bước 1</Text>
              <Text style={styles.textI2}>Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái và chờ hệ thống xử lý.</Text>
            </View>
          </View>

          <View style={styles.vItem}>
            <Image style={styles.img1}
              resizeMode='cover'
              source={require('../../images/ic_2.png')} />

            <View style={styles.vItemR}>
              <Text style={styles.textI1}>Bước 2</Text>
              <Text style={styles.textI2}>Hoàn tất toàn quá trình bỏ chai.
                Quét mã QR bằng điện thoại để dẫn về trang chủ: <Text style={[styles.textI2, { color: 'blue' }]}>Aquafina.pepsishop.vn</Text></Text>
            </View>
          </View>

          <View style={styles.vItem}>
            <Image style={styles.img1}
              resizeMode='cover'
              source={require('../../images/ic_3.png')} />

            <View style={styles.vItemR}>
              <Text style={styles.textI1}>Bước 3</Text>
              <Text style={styles.textI2}>Đăng nhập hoặc đăng ký để tích điểm vào tài khoản của bạn với cơ hội nhận được các phần quà giá trị từ Aquafina.</Text>
            </View>
          </View>
          <Text style={styles.textF}>Nhấn <Text style={{ color: 'blue' }}>“XÁC NHẬN”</Text> khi bạn đã đọc và hiểu cách thức tham gia</Text>
        </View>
        <Image style={styles.imgC}
          resizeMode='cover'
          source={require('../../images/circle_content.png')} />
      </View>
      <TouchableOpacity style={styles.btnS} onPress={() => goToStart()}>
        <Image style={styles.imgBS}
        resizeMode='cover'
        source={require('../../images/btn_accept.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Guide

const styles = StyleSheet.create({
  imgBS:{
    width:'100%',
    height:'100%',
  },
  btnS:{
      width:'25%',
      height:'13%',
      alignSelf:'center',
      marginTop:10
  },
  imgC:{
    position:'absolute',
    width:'100%',
    height:'100%',
    top:10

  },
  textF: {
    alignSelf: 'center',
    color: '#707172',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    width: '70%',
    height: '20%',
    marginHorizontal: 50,
    marginTop:30

  },
  textI2: {
    color: '#707172',
    fontSize: 18,
    fontWeight: '400',
  },
  textI1: {
    color: '#00358C',
    fontSize: 25,
    fontWeight: '700',
  },
  vItemR: {
    width: '70%',
    height: '100%',
    marginTop: 10,
    marginLeft: 10
  },
  img1: {
    width: '30%',
    height: '80%',
    alignSelf: 'center',
  },
  vItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#CCDAF1',
    borderWidth: 3,
    height: '32%',
    marginBottom: 10,
    justifyContent: 'center',
  },
  vbContent: {
    width: '100%',
    height: '60%',
  },
  text3: {
    color: '#1545A5',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 10
  },
  text2: {
    color: '#1545A5',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: 20
  },
  imgT: {
    width: '20%',
    height: '80%',
    position: 'absolute',
    top: 5,
    left: 10
  },
  text1: {
    color: '#1545A5',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: 25
  },
  textHC: {
    alignItems: 'center'
  },
  icBack: {
    width: '100%',
    height: '100%',
  },
  btnBack: {
    width: '10%',
    height: '45%',
  },
  vhContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '15%'
  },
  content: {
    marginHorizontal: 2,
    width: '95%',
    height: '65%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  textH: {
    color: '#0047BA',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 20,
  },
  imgH: {
    alignSelf: 'center',
    width: 154,
    height: 52,
    marginTop: 28
  },
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8',
  }
})