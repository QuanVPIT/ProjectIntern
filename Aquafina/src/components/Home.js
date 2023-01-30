import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>

      <Image resizeMode='cover'
        source={require('../../images/Logo.png')}
        style={styles.imgLogo} />

      <Text style={styles.textH1}>CHÀO MỪNG BẠN ĐẾN VỚI</Text>
      <Text style={styles.textH2}>TRẠM TÁI SINH</Text>
      <Text style={styles.textH3}>CỦA AQUAFINA</Text>
      <Text style={styles.textH4}>NƠI TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA</Text>

      <Image resizeMode='cover'
        source={require('../../images/Model.png')}
        style={styles.imgModel} />
      <TouchableOpacity>
        <Image resizeMode='cover'
          source={require('../../images/Button.png')}
          style={styles.imgButton} />
      </TouchableOpacity>

      <View style={styles.viewFoot}>
        <Text style={styles.textF1}>*Hoạt động nằm trong Chiến dịch</Text>
        <Text style={styles.textF2}>Sải bước phong cách
          <Text style={{ color: '#00BB29' }}> Xanh</Text> của Aquafina</Text>

        <View style={styles.qr}>
          <Image resizeMode='cover'
            source={require('../../images/QR.png')}
            style={styles.imgQR} />

          <TouchableOpacity><Text style={styles.textQR}>Xem thêm</Text></TouchableOpacity>
        </View>

        <View style={styles.footInfor}>
          <TouchableOpacity>
            <Image resizeMode='cover'
              source={require('../../images/InfoFB.png')}
              style={styles.imgIFB} />
          </TouchableOpacity>
          <TouchableOpacity><Text style={styles.textInWeb}>Aquafina.pepsishop.vn</Text></TouchableOpacity>
          
        </View>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  textInWeb:{
    fontSize:13.5,
    color:'white',

  },
  imgIFB: {
    height: 18,
    width: 150
  },
  footInfor: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    backgroundColor: '#1545A5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:10,
    justifyContent: 'space-between',
  },
  textQR: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 10,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: 3
  },
  imgQR: {
    width: '100%',
    height: '100%',
  },
  qr: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 7,
    top: 30
  },
  textF2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 14,
    textAlign: 'center',
    color: '#1545A5',
  },
  textF1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#1545A5',

  },
  viewFoot: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgButton: {
    height: 150,
    width: 150,
    top: 300,
    left: 130
  },
  imgModel: {
    width: '100%',
    height: 700,
    position: 'absolute',
    top: 90
  },
  textH4: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14.5,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: 1
  },
  textH3: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 43,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: 1
  },
  textH2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 43,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: 1
  },
  textH1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 25,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: 20,
  },
  imgLogo: {
    alignSelf: 'center',
    width: 154,
    height: 52,
    marginTop: 28
  },
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8'
  }
})