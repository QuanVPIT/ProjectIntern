import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const goToGuide = () =>{
    navigation.navigate('Guide');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1545A5'} />
      <Image resizeMode='cover'
        source={require('../../images/logo.png')}
        style={styles.imgLogo} />
      <Image
        style={styles.imgR}
        resizeMode='cover'
        source={require('../../images/circle_t.png')} />
      <Text style={styles.textH1}>CHÀO MỪNG BẠN ĐẾN VỚI</Text>
      <Text style={styles.textH2}>TRẠM TÁI SINH</Text>
      <Text style={styles.textH3}>CỦA AQUAFINA</Text>
      <Text style={styles.textH4}>NƠI TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA</Text>

      <Image resizeMode='cover'
        source={require('../../images/model.png')}
        style={styles.imgModel} />
      <TouchableOpacity style={styles.buttonS} onPress={()=> goToGuide()}>
        <Image resizeMode='cover'
          source={require('../../images/btn_start.png')}
          style={styles.imgButton} />
      </TouchableOpacity>

      <View style={styles.viewFoot}>
        <Text style={styles.textF1}>*Hoạt động nằm trong Chiến dịch</Text>
        <Text style={styles.textF2}>Sải bước phong cách
          <Text style={{ color: '#00BB29' }}> Xanh</Text> của Aquafina</Text>

        <View style={styles.qr}>
          <Image resizeMode='cover'
            source={require('../../images/qr.png')}
            style={styles.imgQR} />

          <TouchableOpacity><Text style={styles.textQR}>Xem thêm</Text></TouchableOpacity>
        </View>

        <View style={styles.footInfor}>
          <TouchableOpacity style={styles.buttonInfoFB}>
            <Image resizeMode='cover'
              source={require('../../images/info_fb.png')}
              style={styles.imgIFB} />
              <Text style={styles.textInfoFB}>Aquafina Vietnam</Text>
          </TouchableOpacity>
          <TouchableOpacity><Text style={styles.textInWeb}>Aquafina.pepsishop.vn</Text></TouchableOpacity>

        </View>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  textInWeb: {
    fontSize: 19,
    color: '#FFFFFF',

  },
  textInfoFB:{
    color: '#FFFFFF',
    fontSize:19,
    marginLeft: 3
  },
  imgIFB: {
    height: 30,
    width: 30
  },
  buttonInfoFB:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  footInfor: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    backgroundColor: '#1545A5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  textQR: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
    color: '#1545A5',
  },
  imgQR: {
    width: '100%',
    height: '100%',
  },
  qr: {
    width: 80,
    height: 80,
    position: 'absolute',
    right: 7,
    top: 30
  },
  textF2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 18,
    textAlign: 'center',
    color: '#1545A5',
  },
  textF1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
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
  buttonS: {
    position: 'relative',
    top: 465,
    left: 195,
  },
  imgButton: {
    height: '40%',
    width: '30%',
  },
  imgModel: {
    position: 'absolute',
    width: '100%',
    height: '98%',

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
  imgR: {
    position: 'absolute', 
    width: '10%', 
    height: '10%', 
    zIndex: 2,
    top: 120, 
    left: 132
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