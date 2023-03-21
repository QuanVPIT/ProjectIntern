import { Dimensions, Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { ref, set } from "firebase/database";
import { database } from '../helper/FireBaseHelper';
import { NavigationProp } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;

interface Props {
  setHide: boolean|undefined;
  setearnPoint:boolean|undefined;
  navigation:NavigationProp<any>;
}

const PopupAccumulatePoints = ({navigation,setHide}:Props|any) => {
  
  const setEarnPoint = ():void => {
    set(ref(database, 'status/earn_point'), {
      val:false
  });
  navigation.navigate('QRcode');
}
const setThank = ():void => {
  
  set(ref(database, 'status/thank'), {
    val:true
})
navigation.navigate('PopupThank')};
  return (
    <Modal animationType='slide'
      transparent={true}
      visible={setHide}
      onRequestClose={() => console.log("OK")}>
      <View style={stylesModal.container}>
        <View style={stylesModal.viewAccept}>
          <ImageBackground style={stylesModal.circleCenter}
            source={require('../images/circle_content.png')} />
          <Text style={stylesModal.textHeader}>Bạn có muốn tích điểm đổi quà không?</Text>
          <Text style={stylesModal.textHeader2}>Bật camera trên điện thoại để quét QR code</Text>
          <TouchableOpacity style={stylesModal.buttonAccept} onPress={() => [setEarnPoint()]}>
            <Image style={stylesModal.imgButtonAccept}
              source={require('../images/button_accumulate.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[stylesModal.buttonAccept, { width: '20%', height: '15%', marginTop: '3%' }]}
          onPress={() => [setThank()]}>
          <Image style={stylesModal.imgButtonAccept}
            source={require('../images/button_no.png')} />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default PopupAccumulatePoints

const stylesModal = StyleSheet.create({
  imgButtonAccept: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  buttonAccept: {
    alignSelf: 'center',
    width: '30%',
    height: '27%',
    marginTop: '6%',
    zIndex: 1,
  },
  textHeader2: {
    color: '#707172',
    fontWeight: '400',
    fontSize: WIDTH * 0.045,
    textAlign: 'center',
    marginHorizontal: '20%',
    marginTop: '1%',
  },
  textHeader: {
    color: '#1545A5',
    fontWeight: '700',
    fontSize: WIDTH * 0.07,
    textAlign: 'center',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  circleCenter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  viewAccept: {
    backgroundColor: '#FFFFFF',
    height: '80%',
    width: '100%',
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#EAF0F8',
    alignSelf: 'center',
    marginTop: '30%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    width: '95%',
    height: '65%',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5
  },
})