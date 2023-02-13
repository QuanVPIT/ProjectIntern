import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Linking, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Home = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const urlFB = 'https://www.facebook.com/AquafinaVietnam.fanpage';
  const urlWeb = 'https://aquafina.pepsishop.vn/#/';
  const goToGuide = () => {
    navigation.navigate('Guide');
  }

  const handleLink = async (url) => {

    const supported = await Linking.canOpenURL(url);
    console.log("---->", supported);
    if (supported) {
      await Linking.openURL(url);
    } else {
      setResult('Don\'t know how to open URI: ' + url);
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1545A5'} />

      <View style={styles.viewBox1}>
        <Image resizeMode='stretch'
          source={require('../../../assets/images/logo.png')}
          style={styles.imgLogo} />
        <Image
          style={styles.imgR}
          resizeMode='cover'
          source={require('../../../assets/images/circle_t.png')} />
        <Text style={styles.textH1}>CHÀO MỪNG BẠN ĐẾN VỚI</Text>
        <Text style={styles.textH2}>TRẠM TÁI SINH</Text>
        <Text style={styles.textH3}>CỦA AQUAFINA</Text>
        <Text style={styles.textH4}>NƠI TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA</Text>
      </View>
      
      <View style={styles.viewBox2}>
      <Image resizeMode='cover'
        source={require('../../../assets/images/model.png')}
        style={styles.imgModel} />
      <TouchableOpacity style={styles.buttonS} onPress={() => goToGuide()}>
        <Image resizeMode='cover'
          source={require('../../../assets/images/btn_start.png')}
          style={styles.imgButton} />
      </TouchableOpacity>

      <View style={styles.viewFoot}>
        <Text style={styles.textF1}>*Hoạt động nằm trong Chiến dịch</Text>
        <Text style={styles.textF2}>Sải bước phong cách
          <Text style={{ color: '#00BB29' }}> Xanh</Text> của Aquafina</Text>

        <View style={styles.qr}>
          <Image
            source={require('../../../assets/images/qr.png')}
            style={styles.imgQR} />

          <TouchableOpacity><Text style={styles.textQR}>Xem thêm</Text></TouchableOpacity>
        </View>

        <View style={styles.footInfor}>
          <TouchableOpacity style={styles.buttonInfoFB} onPress={() => handleLink(urlFB)}>
            <Image resizeMode='cover'
              source={require('../../../assets/images/info_fb.png')}
              style={styles.imgIFB} />
            <Text style={styles.textInfoFB}>Aquafina Vietnam</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLink(urlWeb)}>
            <Text style={styles.textInWeb}>Aquafina.pepsishop.vn</Text>
          </TouchableOpacity>

        </View>
      </View>

      </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  textInWeb: {
    fontSize: WIDTH*0.04,
    color: '#FFFFFF',
    fontWeight: '300'

  },
  textInfoFB: {
    color: '#FFFFFF',
    fontSize: WIDTH*0.04,
    marginLeft: 3,
    fontWeight: '300'
  },
  imgIFB: {
    height: HEIGHT*0.03,
    width: WIDTH*0.06
  },
  buttonInfoFB: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footInfor: {
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    height: HEIGHT*0.03,
    backgroundColor: '#1545A5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  textQR: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: WIDTH*0.02,
    textAlign: 'center',
    color: '#1545A5',
  },
  imgQR: {
    resizeMode:'cover',
    width: '100%',
    height: '100%',
    
  },
  qr: {
    width: WIDTH*0.11,
    height: HEIGHT*0.05,
    position: 'absolute',
    right: WIDTH*0.03,
    bottom: HEIGHT/15
  },
  textF2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 11,
    textAlign: 'center',
    color: '#1545A5',
  },
  textF1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: WIDTH*0.03,
    textAlign: 'center',
    color: '#1545A5',

  },
  viewFoot: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:WIDTH*0.06
  },
  buttonS: {
    position: 'absolute',
    width:WIDTH/3.5,
    height: HEIGHT/8,
    bottom: HEIGHT/7.5,
    left: WIDTH/2.8,
  },
  imgButton: {
    height: '100%',
    width: '100%',
  },
  imgModel: {
    position: 'absolute',
    width: WIDTH * 0.99,
    height: HEIGHT * 0.9,
    alignSelf: 'center',
    bottom: HEIGHT * 0.01

  },
  viewBox2:{
    flex:0.7,

  },
  textH4: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: WIDTH*0.033,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: 1
  },
  textH3: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: WIDTH*0.1,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: -5
  },
  textH2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: WIDTH*0.1,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: -3
  },
  textH1: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: WIDTH*0.06,
    textAlign: 'center',
    color: '#1545A5',
    marginTop: HEIGHT * 0.03,
  },
  imgR: {
    position: 'absolute',
    width: WIDTH*0.3,
    height: HEIGHT*0.1,
    zIndex: 2,
    top: HEIGHT * 0.14,
    left: WIDTH * 0.1
  },
  imgLogo: {
    alignSelf: 'center',
    width: WIDTH * 0.5,
    height: HEIGHT * 0.06,
    marginTop: HEIGHT * 0.03,
  },
  viewBox1:{
    flex: 0.3,
  },
  container: {
    flex:1,
    backgroundColor: '#EAF0F8'
  }
})