import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ImageBackgroundComponent, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationProp } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from '../helper/FireBaseHelper';
interface Props{
    navigation:NavigationProp<any>;
}
const PopupEndTime = ({navigation}:Props) => {
    const dbRef = ref(database);
    const [timeCD, setTimeCD] = useState<number>(30);
    useEffect(() => {
        const id: number = setInterval(() => {
            if (timeCD > 0) {
                setTimeCD((timeCD) => timeCD - 1);
            }
        }, 1000);
        if (timeCD === 0) {
            navigation.navigate('PopupThank');
        }
        return () => clearInterval(id);
    });

const bonusTime = () => {
    set(ref(database, 'status/time'), {
        val: 30
      });
      set(ref(database, 'status/go_back'), {
        val: true
      });
      navigation.navigate('QRcode');
}

    return (
        <Modal animationType='slide'
            transparent={true}>
            <View style={styles.container}>
                <Image source={require('../images/circle_content.png')}
                    resizeMode='cover'
                    style={styles.circleBG} />
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

                <Text style={[styles.text2, { marginTop: 30, fontSize: WIDTH * 0.06, letterSpacing: 1 }]}>CẢNH BÁO HẾT THỜI GIAN</Text>
                <Text style={styles.textWarning}>Thời gian thực hiện quy trình đã kết thúc, bạn có cần thêm thời gian không?</Text>
                <Text style={styles.textWarning}>Trở về màn hình chính sau: <Text style={{ color: 'red' }}>{timeCD} GIÂY NỮA</Text></Text>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.btnWarning} onPress={()=>navigation.navigate('PopupThank')}>
                        <Text style={styles.textButton}>MÀN HÌNH CHÍNH</Text>
                        <Image style={styles.imgBtnW}
                            source={require('../images//buttonW1.png')}
                            resizeMode='cover' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWarning} onPress={() => bonusTime()} >
                        <Text style={[styles.textButton, { color: '#FFFFFF' }]}>THÊM THỜI GIAN</Text>
                        <Image style={styles.imgBtnW}
                            source={require('../images//buttonW2.png')}
                            resizeMode='cover' />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}

export default PopupEndTime

const styles = StyleSheet.create({
    imgBtnW: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        borderRadius: 10
    },
    textButton: {
        fontSize: WIDTH * 0.04,
        fontWeight: '700',
        color: '#336CC8',
        textAlign: 'center',

    },
    btnWarning: {
        marginHorizontal: 10,
        width: WIDTH * 0.4,
        height: HEIGHT * 0.08,
        backgroundColor: '#EDF5F8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 10,
        marginTop: '20%'
    },
    viewButton: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    textWarning: {
        fontSize: WIDTH * 0.045,
        fontWeight: '700',
        color: '#707172',
        textAlign: 'center',
        marginHorizontal: '3%',
        marginTop: '5%'
    },
    text3: {
        color: '#1545A5',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: WIDTH * 0.035
    },
    text2: {
        color: '#1545A5',
        fontWeight: '900',
        fontStyle: 'normal',
        fontSize: WIDTH * 0.06
    },
    imgT: {
        width: '20%',
        height: '80%',
        position: 'absolute',
        top: 10,
        left: -2
    },
    text1: {
        color: '#1545A5',
        fontWeight: '900',
        fontStyle: 'normal',
        fontSize: WIDTH * 0.09
    },
    textHC: {
        alignItems: 'center',
        marginTop: '-30%'
    },
    circleBG: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    container: {
        paddingTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: '28%',
        height: '60%',
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        paddingTOp: '10%'
    },
})