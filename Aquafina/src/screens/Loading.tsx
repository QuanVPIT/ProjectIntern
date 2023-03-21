import { Image, StyleSheet, StatusBar, View, Text, TouchableOpacity, Pressable, Modal, ActivityIndicator, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import PopupAccumulatePoints from '../popups/PopupAccumulatePoints'
import PopupThank from '../popups/PopupThank';
import { NavigationProp } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from '../helper/FireBaseHelper';
interface Props {
  navigation: NavigationProp<any>;
}
const Loading = ({ navigation }: Props) => {
  const [timeCD, setTimeCD] = useState<number>(30);
  const [textLoading, setTextLoading] = useState('...');
  const [earnPoint, setearnPoint] = useState<boolean>(false);
  const [goToHome, setGoToHome] = useState<boolean>(false);;
  const dbRef = ref(database);


  useEffect(() => {
    const id: number = setInterval(() => {
      if (timeCD > 0) {
        setTimeCD((timeCD) => timeCD - 1);
      }

      if (timeCD == 1) {
        // clearInterval(id);
        set(ref(database, 'status/earn_point'), {
          val: true
        });
        
      }
    }, 1000);
    console.log("Sau: ", timeCD);
    return () => clearInterval(id);
  }, [timeCD]);


  useEffect(() => {
    getGoToHome();
    getEarnPoint();
    if (earnPoint) {
      navigation.navigate('PopupAccumulatePoints');
    }
    if (goToHome) {
      navigation.navigate('Home');

  }});

 

  const getEarnPoint = ():void => {
    get(child(dbRef, `status`)).then((snapshot) => {
      if (snapshot.exists()) {
        setearnPoint(snapshot.val().earn_point.val);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const getGoToHome = ():void => {
    get(child(dbRef, `status`)).then((snapshot) => {
      if (snapshot.exists()) {
        setGoToHome(snapshot.val().go_to_home.val);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1545A5'} />
      <View style={styles.viewHeader}>
        <Image style={styles.imgH}
          source={require('../images/logo.png')}
        />
        <Text style={styles.textH}>CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ{textLoading}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.vhContent}>
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
        </View>
        {timeCD > 0 &&
          <View style={styles.viewBoxPoint}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
        {timeCD === 0 &&
          <View style={styles.viewBoxPoint}>
            <Image style={styles.imgCircleOut}
              resizeMode='cover'
              source={require('../images/circle_out.png')} />
            <Image style={styles.imgCircleIn}
              resizeMode='cover'
              source={require('../images/circle_in.png')} />
            <Text style={styles.textPoint1}>30</Text>
            <Text style={[styles.textPoint2]}>Điểm</Text>
          </View>
        }

        {timeCD > 0 &&
          <View style={styles.viewResult}>

          </View>
        }

        {timeCD === 0 &&
          <View style={styles.viewResult}>
            <View style={styles.viewItem}>
              <Image style={styles.imgBottle}
                resizeMode='cover'
                source={require('../images/bottle_type1.png')} />

              <View style={styles.viewInfo}>
                <Text style={styles.textInfo}>AQUAFINA</Text>
                <Text style={styles.textInfo2}>1</Text>
                <Text style={[styles.textInfo, { fontWeight: '500' }]}>chai</Text>
              </View>
            </View>

            <View style={styles.viewItem}>
              <Image style={styles.imgBottle}
                resizeMode='cover'
                source={require('../images/bottle_type2.png')} />

              <View style={styles.viewInfo}>
                <Text style={styles.textInfo}>CHAI KHÁC</Text>
                <Text style={styles.textInfo2}>4</Text>
                <Text style={[styles.textInfo, { fontWeight: '500' }]}>chai</Text>
              </View>
            </View>
          </View>}
        <Text style={styles.textCountDown}>Tự động kết thúc sau: <Text style={{ color: 'red', fontWeight: '900' }}>{timeCD} GIÂY NỮA</Text></Text>

        <Image style={styles.imgC}
          resizeMode='cover'
          source={require('../images/circle_content.png')} />
      </View>
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
  textCountDown: {
    fontWeight: '500',
    fontSize: WIDTH * 0.04,
    textAlign: 'center',
    marginTop: '10%',
    color: '#707172'
  },
  textInfo2: {
    color: '#FA4238',
    fontWeight: '900',
    fontSize: WIDTH * 0.06
  },
  textInfo: {
    color: '#336CC8',
    fontWeight: '700',
    fontSize: WIDTH * 0.035
  },
  viewInfo: {
    width: '60%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBottle: {
    width: '40%',
    height: '98%',
    borderRadius: 10
  },
  viewItem: {
    flexDirection: 'row',
    width: '45%',
    height: '100%',
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: '3%'
  },
  viewResult: {
    flexDirection: 'row',
    width: '100%',
    height: HEIGHT * 0.09,
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
    color: '#6691D6',
    fontWeight: '400',
    fontSize: WIDTH * 0.06,
    marginTop: '-5%',
  },
  textPoint1: {
    color: '#1545A5',
    fontWeight: '800',
    fontSize: WIDTH * 0.1,
    textAlign: 'center',
  },
  viewBoxPoint: {
    width: '38%',
    height: '25%',
    alignSelf: 'center',
    marginTop: '38%',
    marginEnd: '3%',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: WIDTH * 0.07,
    height: HEIGHT * 0.09,
    position: 'absolute',
    top: -HEIGHT * 0.02,
    left: WIDTH * 0.03
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
  textCL: {
    width: '100%',
    fontSize: WIDTH * 0.05,
    color: '#0047BA',
    fontWeight: '700',
    textDecorationLine: 'underline',

  },
  vhContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '15%',
    zIndex: 1
  },
  content: {
    flex: 0.75,
    width: '95%',
    height: '65%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 20,
    paddingHorizontal: 10
  },
  icBack: {
    width: '100%',
    height: '100%',
  },
  btnBack: {
    width: WIDTH * 0.08,
    height: HEIGHT * 0.04,
  },
  viewHeader: {
    flex: 0.15,
  },
  imgLogo: {
    alignSelf: 'center',
    width: WIDTH * 0.5,
    height: HEIGHT * 0.06,
    marginTop: HEIGHT * 0.03,
  },
  textH: {
    color: '#0047BA',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: WIDTH * 0.06,
    textAlign: 'left',
    marginTop: 20,
    // alignSelf:'center',
    marginLeft: '6%',
  },
  imgH: {
    alignSelf: 'center',
    width: WIDTH * 0.39,
    height: HEIGHT * 0.06,
    marginTop: HEIGHT * 0.01,
    resizeMode: 'stretch',
  },
  viewBox1: {
    flex: 0.3,
  },
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8',
  }
})