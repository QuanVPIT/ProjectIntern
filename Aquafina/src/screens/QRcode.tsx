import { Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Pressable, Modal, ActivityIndicator, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { getDatabase, ref, set,get,child } from "firebase/database";
import { database } from '../helper/FireBaseHelper';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
interface Props {
  navigation: NavigationProp<any>;
}
const QRcode = ({ navigation }:Props) => {
  const [timeCD, setTimeCD] = useState<number>(30);
  const [point, setPoint] = useState(10);
  const [title,setTitle] = useState('TRẠM TÁI SINH CỦA AQUAFINA');
  const [thanks, setthanks] = useState<boolean>(false);
  const [goBack, setGoBack] = useState<boolean>(false);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `status`)).then((snapshot) => {
      if (snapshot.exists()) {
        setGoBack(snapshot.val().go_back.val);
        console.log("tiME: ", goBack);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  });


  useEffect(() => {
    get(child(dbRef, `status`)).then((snapshot) => {
      if (snapshot.exists()) {
        setTimeCD(snapshot.val().time.val);
        console.log("tiME: ", timeCD);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[goBack]);

  useEffect(() => {
    const id:number = setInterval(() => {
       if (timeCD > 0){
         setTimeCD((timeCD) => timeCD - 1);
       }
     }, 1000);
      if(timeCD === 0){
        navigation.navigate('PopupEndTime');
      }
   return() => clearInterval(id);
 }); 

 
  const setThank = () => {
      navigation.navigate('PopupThank');
      set(ref(database, 'status/thank'), {
          val: true});
  }

  const getThank = () => {
    get(child(dbRef, `status`)).then((snapshot) => {
      if (snapshot.exists()) {
        setthanks(snapshot.val().thank.val);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    getThank();
    console.log("Thank", thanks);
    if (thanks) {
      navigation.navigate('Home');
    }
  })
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1545A5'} />
      <View style={styles.viewHeader}>
        <Image style={styles.imgH}
          source={require('../images/logo.png')}
        />
        <Text style={styles.textH}>{title}</Text>
      </View>
      <View style={styles.viewPoint}>
        <Text style={styles.textPoint}>Điểm quy đổi:</Text>
        <ImageBackground style={styles.circlePoint}
          source={require('../images/circle_content.png')} />
        <Text style={styles.point}>{point}</Text>

      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <Image style={styles.icBack}
            resizeMode='cover'
            source={require('../images/ic_back.png')}
          />
        </TouchableOpacity>
        <View style={styles.textHC}>
          <View>
            <Text style={styles.text1}>TRẠM</Text>
            <Image style={styles.imgT}
              resizeMode='cover'
              source={require('../images/circle_t.png')} />
          </View>
          <Text style={styles.text2}>TÁI SINH</Text>
          <Text style={styles.text3}>CỦA AQUAFINA</Text>
        </View>

        <Text style={styles.textDetail}>Quét mã QR code để truy cập vào trang chủ <Text onPress={() => console.log('Text is pressed!')} style={{ color: '#336CC8', zIndex: -1 }}> Aquafina.pepsishop.com </Text>
          và tích điểm đổi quà!
        </Text>
        <View style={styles.viewQR}>
          <Image style={styles.imgQRCode} source={require('../images/qrCode.png')} />
        </View>
        <Text style={styles.textCountDown}>Thời gian quét QR còn: <Text style={{ color: 'red', fontWeight: '900' }}>{timeCD} GIÂY NỮA</Text></Text>

        <Image style={styles.imgC}
          resizeMode='cover'
          source={require('../images/circle_content.png')} />
      </View>
      <TouchableOpacity style={styles.btnS} onPress={()=> setThank()}>
        <Image style={styles.imgBS}
          resizeMode='cover'
          source={require('../images/btn_accept.png')} />
      </TouchableOpacity>
        
    </View>

  )
}

export default QRcode

const styles = StyleSheet.create({
  imgQRCode: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  viewQR:{
    width: '33%',
    height: '30%',
    alignSelf: 'center',
    marginTop: '10%',
    backgroundColor:'#FFFFFF',
    padding:5,
    borderWidth: 1,
    borderRadius:10,
    borderColor: '#2596F1',
  },
  textDetail: {
    color: '#707172',
    fontSize: WIDTH*0.03,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '15%',
    marginHorizontal: '25%'
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
    left: WIDTH*0.015
  },
  text1: {
    color: '#1545A5',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: 20
  },
  textHC: {
    alignItems: 'center',
    position: 'absolute',
    end: '5%',
    top: '3%',
  },
  icBack: {
    width: '100%',
    height: '100%',
  },
  btnBack: {
    width: '11%',
    height: '10%',
    position: 'absolute',
    start: '5%',
    top: '5%',
    zIndex: 1
  },
  point: {
    fontSize: 50,
    color: '#1545A5',
    fontWeight: '900',
    marginEnd: '18%'
  },
  circlePoint: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '90%',
    height: '100%',
    right: '-23%',
    top: '-8%'
  },
  textPoint: {
    color: '#336CC8',
    fontWeight: '500',
    fontSize: WIDTH*0.05,
    marginStart: '3%'
  },
  viewPoint: {
    width: '98%',
    height: '13%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgBS: {
    width: '100%',
    height: '100%',
  },
  btnS: {
    width: '28%',
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
  textCountDown: {
    fontWeight: '500',
    fontSize: WIDTH*0.04,
    textAlign: 'center',
    marginTop: '20%',
    color: '#707172'
  },
  content: {
    flex:0.7,
    marginHorizontal: 2,
    width: '95%',
    height: '65%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  textH: {
    color: '#0047BA',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: WIDTH*0.06,
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
    flex: 0.18,
  },
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8',
    paddingHorizontal: '5%',
    
  }
})