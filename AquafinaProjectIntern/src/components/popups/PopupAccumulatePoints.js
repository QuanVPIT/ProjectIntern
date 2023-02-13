import { Dimensions, Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PopupAccumulatePoints = (props) => {
  const setLoadScreen = (bool) => {
      props.setLoadScreen(bool);
  }


  return (
    <Modal animationType='slide'
    transparent={true}
    >
      <View style={styles.container}>
          <View style={styles.viewAccept}>
              <ImageBackground  style={styles.circleCenter}
              source={require('../../../assets/images/circle_content.png')}/>
              <Text style={styles.textHeader}>Bạn có muốn tích điểm đổi quà không?</Text>
              <Text style={styles.textHeader2}>Bật camera trên điện thoại để quét QR code</Text>
              <TouchableOpacity style={styles.buttonAccept} onPress={() => setLoadScreen(true)}>
                <Image style={styles.imgButtonAccept}
                source={require('../../../assets/images/button_accumulate.png')}/>
              </TouchableOpacity>
          </View>
          <TouchableOpacity 
          style={[styles.buttonAccept,{width:'20%',height:'15%',marginTop:'3%'}]}
          onPress={() => props.setShowPopupThank(true)}>
                <Image style={styles.imgButtonAccept}
                source={require('../../../assets/images/button_no.png')}/>
              </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default PopupAccumulatePoints

const styles = StyleSheet.create({
  imgButtonAccept:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  },
  buttonAccept:{
      alignSelf:'center',
      width:'30%',
      height:'27%',
      marginTop:'6%',
  },
  textHeader2:{
    color: '#707172',
    fontWeight:'400',
    fontSize: WIDTH*0.045,
    textAlign:'center',
    marginHorizontal:'20%',
    marginTop:'1%',
  },
  textHeader:{
    color: '#1545A5',
    fontWeight:'700',
    fontSize: WIDTH*0.07,
    textAlign:'center',
    marginHorizontal:'5%',
    marginTop:'5%',
  },
  circleCenter:{
      position:'absolute',
      width:'100%',
      height:'100%',
  },
  viewAccept:{
    backgroundColor:'#FFFFFF',
    height:'80%',
    width:'100%',
    borderRadius:10,
  },
  container:{
      backgroundColor:'#EAF0F8',
      alignSelf:'center',
      marginTop:'30%',
      shadowColor: '#000',
      shadowOffset: {
            width: 0,
            height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 15,
      width:'95%',
      height:'65%',
      marginHorizontal:10,
      borderRadius:10,
      padding:5
  },
})