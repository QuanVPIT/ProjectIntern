import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationProp } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../helper/FireBaseHelper';

interface Props {
    navigation: NavigationProp<any>;
}


const PopupThank = ({navigation}:Props) => {
    const setGoHome = () => {
        set(ref(database, 'status/go_to_home'), {
            val: true
        });
    }
    const setstatus = (val: boolean, key: string) => {
        set(ref(database, `status/${key}`), {
            val: val
        });
    }
    const goToHome = ():void =>{
        navigation.navigate("Home");
    }
    const finishAll = (): void => {
        setstatus(false, "bonus_time");
        setstatus(false, "earn_point");
        setstatus(false, "go_to_bonus");
        setstatus(false, "go_to_earn_point");
        setstatus(false, "go_to_home");
        setstatus(false, "go_to_thank");
        setstatus(false, "thank");
    }
    return (
        <Modal animationType='slide'
            transparent={false}>
            <View style={styles.container}>
                <Image style={styles.imgBackground} source={require('../images/circle_content.png')} />
                <View style={styles.viewHeader}>
                    <Image style={styles.imgTextHeader} source={require('../images/circle_t.png')} />
                    <Text style={styles.textHeader}>TRẠM TÁI SINH</Text>
                </View>
                <Text style={styles.textHeader2}>CỦA AQUAFINA</Text>
                <Text style={styles.textHeader3}>Nơi tái sinh vòng đời mới cho chai nhựa</Text>
                <Text style={styles.textCenter}>THANK YOU</Text>
                <Text style={styles.textFooter}>Cảm ơn bạn đã cùng Aquafina
                    tham gia vào chiến dịch </Text>
                <Text style={styles.textHighlight}>
                    “<Text style={{ color: '#336CC8' }}>Sải bước phong cách </Text>
                    <Text style={{ color: '#00BB29' }}> Xanh</Text>”
                </Text>
                <TouchableOpacity style={styles.btnAccept} onPress={() => goToHome()}>
                    <Image style={styles.imgBtn} source={require('../images/btn_accept.png')} />
                </TouchableOpacity>
            </View>
        </Modal>

    )
}

export default PopupThank

const styles = StyleSheet.create({
    imgBtn: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    btnAccept: {
        width: '25%',
        height: '18%',
        marginTop: '3%'
    },
    textHighlight: {
        color: '#707172',
        fontWeight: '600',
        fontSize: WIDTH * 0.04,
        textAlign: 'center',
    },
    textFooter: {
        color: '#707172',
        fontWeight: '400',
        fontSize: WIDTH * 0.04,
        textAlign: 'center',
        marginTop: '5%',
        marginHorizontal: '20%'
    },
    textCenter: {
        color: '#1545A5',
        fontWeight: '900',
        fontSize: WIDTH * 0.2,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '7%',
    },
    textHeader3: {
        color: '#1545A5',
        fontWeight: '600',
        fontSize: WIDTH * 0.035,
        textTransform: 'uppercase',
    },
    textHeader2: {
        color: '#1545A5',
        fontWeight: '400',
        fontSize: WIDTH * 0.1,
        textAlign: 'center',
        letterSpacing: 1.5
    },
    imgTextHeader: {
        resizeMode: 'cover',
        position: 'absolute',
        top: '13%',
        start: '11%',
        width: '25%',
        height: '100%',
        zIndex: 1
    },
    textHeader: {
        color: '#1545A5',
        fontWeight: '900',
        fontSize: WIDTH * 0.1,
        textAlign: 'center',

    },
    viewHeader: {
        width: '100%',
        height: '10%',
    },
    imgBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    container: {
        width: '95%',
        height: '75%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        alignSelf: 'center',
        marginTop: '28%',
        paddingTop: '3%',
        marginHorizontal: '10%',
        borderRadius: 10

    }
})