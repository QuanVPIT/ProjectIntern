import { Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Pressable,Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import PopupAccumulatePoints from '../popups/PopupAccumulatePoints'
const Loading = ({ navigation }) => {
  const [timeCD, setTimeCD] = useState(30)
  
  const showButton = () =>{
    if(timeCD > 0){
      setTimeCD((timeCD) => timeCD - 1);
    }else{
      clearTimeout();
    }
  }
  useEffect(() => {
    setTimeout(() => {
      showButton();
    }, 1000);
  })
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1545A5'} />
      <Image style={styles.imgH}
        resizeMode='cover'
        source={require('../../../images/logo.png')}
      />
      <Text style={styles.textH}>CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ...</Text>

      <View style={styles.content}>
        <View style={styles.vhContent}>
          <TouchableOpacity style={styles.btnBack}>
            <Image style={styles.icBack}
              resizeMode='cover'
              source={require('../../../images/ic_back.png')}
            />
          </TouchableOpacity>

          <View style={styles.textHC}>

            <View>
              <Text style={styles.text1}>TRẠM</Text>
              <Image style={styles.imgT}
                resizeMode='cover'
                source={require('../../../images/circle_t.png')} />
            </View>

            <Text style={styles.text2}>TÁI SINH</Text>
            <Text style={styles.text3}>CỦA AQUAFINA</Text>
          </View>
        </View>

        <View style={styles.viewBoxPoint}>
          <Image style={styles.imgCircleOut}
            resizeMode='cover'
            source={require('../../../images/circle_out.png')} />
          <Image style={styles.imgCircleIn}
            resizeMode='cover'
            source={require('../../../images/circle_in.png')} />
          <Text style={styles.textPoint1}>30</Text>
          <Text style={[styles.textPoint2]}>Điểm</Text>
        </View>

        <View style={styles.viewResult}>
          <View style={styles.viewItem}>
            <Image style={styles.imgBottle}
              resizeMode='cover'
              source={require('../../../images/bottle_type1.png')} />

              <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>AQUAFINA</Text>
                  <Text style={styles.textInfo2}>1</Text>
                  <Text style={[styles.textInfo,{fontWeight:'500'}]}>chai</Text>
              </View>
          </View>

          <View style={styles.viewItem}>
            <Image style={styles.imgBottle}
              resizeMode='cover'
              source={require('../../../images/bottle_type2.png')} />

              <View style={styles.viewInfo}>
                  <Text style={styles.textInfo}>CHAI KHÁC</Text>
                  <Text style={styles.textInfo2}>4</Text>
                  <Text style={[styles.textInfo,{fontWeight:'500'}]}>chai</Text>
              </View>
          </View>
        </View>

        <Text style={styles.textCountDown}>Tự động kết thúc sau: <Text style={{color:'red',fontWeight:'900'}}>{timeCD} GIÂY NỮA</Text></Text>

        <Image style={styles.imgC}
          resizeMode='cover'
          source={require('../../../images/circle_content.png')} />
      </View>
      
        {timeCD > 0 && 
        <Pressable style={styles.btnS}>
        <Image style={styles.imgBS}
          resizeMode='cover'
          source={require('../../../images/button_complete_hide.png')} />
          </Pressable>
        }
        {timeCD === 0 && 
        <TouchableOpacity style={styles.btnS}>
        <Image style={styles.imgBS}
          resizeMode='cover'
          source={require('../../../images/button_complete_show.png')} />
          </TouchableOpacity>
        }
      
    </View>
  )
}

export default Loading

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
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',

  },
  textCountDown:{
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    marginTop:'10%',
    color: '#707172'
  },
  textInfo2:{
    color:'#FA4238',
    fontWeight:'900',
    fontSize:30
  },
  textInfo:{
    color:'#336CC8',
    fontWeight:'700',
    fontSize:15
  },
  viewInfo:{
    width: '60%',
    height: '98%',
    alignItems:'center',
    justifyContent:'center'
  },
  imgBottle:{
    width: '40%',
    height: '98%',
  },
  viewItem: {
    flexDirection: 'row',
    width: '45%',
    height: '90%',
    padding: 5,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'gray',
    margin:10
  },
  viewResult: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    marginTop: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCircleIn: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  imgCircleOut: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -2
  },
  textPoint2: {
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
    color: '#6691D6',
    fontWeight: '400',
    fontSize: 25
  },
  textPoint1: {
    color: '#1545A5',
    fontWeight: '800',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'SVN-Gotham',
  },
  viewBoxPoint: {
    width: '35%',
    height: '25%',
    alignSelf: 'center',
    marginTop: '35%',
    marginEnd: '3%',
    alignItems: 'center',
    justifyContent: 'center',
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
    left: 15
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
    fontSize: 30,
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