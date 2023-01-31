import { Image, StyleSheet, StatusBar, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Guide = () => {
  const [timeCD, setTimeCD] = useState(30);
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor={'#1545A5'} />
      <Image style={styles.imgH}
        resizeMode='cover'
        source={require('../../images/logo.png')}
      />
      <Text style={styles.textH}>HÃY CHO CHAI RỖNG VÀO MÁY</Text>
      
      <View style={styles.content}>
        <View style={styles.vhContent}>

          <TouchableOpacity style={styles.btnBack}>
            <Text style={styles.textCL}>Xem lại hướng dẫn</Text>
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
        <Image style={styles.imgContent}
          resizeMode='cover'
          source={require('../../images/ic_1.png')} />
        
        <Text style={styles.textC1}>Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái</Text>
        <Text style={styles.textC2}>Tự động kết thúc sau: <Text style={{color:'red'}}>{timeCD} GIÂY NỮA</Text></Text>
        <Image style={styles.imgC}
          resizeMode='cover'
          source={require('../../images/circle_content.png')} />
      </View>
      <TouchableOpacity style={styles.btnS}>
        <Image style={styles.imgBS}
        resizeMode='cover'
        source={require('../../images/btn_finish.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Guide

const styles = StyleSheet.create({
  textC2:{
    width: '80%',
    alignSelf: 'center',
    textAlign:'center',
    fontSize:20,
    marginTop:10,
    fontWeight:'500',
    color:'#707172'
  },
  textC1:{
    width: '80%',
    alignSelf: 'center',
    textAlign:'center',
    fontSize:25,
    marginTop:10,
    fontWeight:'500',
    color:'#707172'
  },
  imgContent:{
    alignSelf:'center',
    width:'90%',
    height:'50%',
    marginTop:50
  },
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
  textCL: {
    width: '100%',
    fontSize: 25,
    color: '#0047BA',
    fontWeight:'700',
    textDecorationLine: 'underline',
    
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