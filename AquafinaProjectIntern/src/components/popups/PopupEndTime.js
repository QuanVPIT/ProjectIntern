import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ImageBackgroundComponent, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const PopupEndTime = (props) => {
    const [timeCD, setTimeCD] = useState(10)

    const setData = () =>{
        props.setTitle('QUÉT QR TÍCH ĐIỂM');
        props.setTimeCD(30);

    }
    const goToHome = () =>{
        if(timeCD == 0) {
            props.setvisiblePopupThank(true)
        }
        if(timeCD >= 1){
            setTimeCD((timeCD)=> timeCD - 1);
        }
        
    }
    useEffect(() => {
        setTimeout(() => {
            goToHome();
        }, 1000);
    })
    return (
        <Modal animationType='slide'
            transparent={true}>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/circle_content.png')}
                    resizeMode='cover'
                    style={styles.circleBG} />
                <View style={styles.textHC}>
                    <View>
                        <Text style={styles.text1}>TRẠM</Text>
                        <Image style={styles.imgT}
                            resizeMode='cover'
                            source={require('../../../assets/images/circle_t.png')} />
                    </View>
                    <Text style={styles.text2}>TÁI SINH</Text>
                    <Text style={styles.text3}>CỦA AQUAFINA</Text>
                </View>

                <Text style={[styles.text2, { marginTop: 30, fontSize: WIDTH*0.06, letterSpacing: 1 }]}>CẢNH BÁO HẾT THỜI GIAN</Text>
                <Text style={styles.textWarning}>Thời gian thực hiện quy trình đã kết thúc, bạn có cần thêm thời gian không?</Text>
                <Text style={styles.textWarning}>Trở về màn hình chính sau: <Text style={{ color: 'red' }}>{timeCD} GIÂY NỮA</Text></Text>

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.btnWarning} onPress={() => props.setvisiblePopupThank(true)}>
                        <Text style={styles.textButton}>MÀN HÌNH CHÍNH</Text>
                        <Image style={styles.imgBtnW}
                            source={require('../../../assets/images//buttonW1.png')}
                            resizeMode='cover' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWarning} onPress={() => setData()} >
                        <Text style={[styles.textButton, { color: '#FFFFFF' }]}>THÊM THỜI GIAN</Text>
                        <Image style={styles.imgBtnW}
                            source={require('../../../assets/images//buttonW2.png')}
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
        fontSize: WIDTH*0.04,
        fontWeight: '700',
        color: '#336CC8',
        textAlign: 'center',

    },
    btnWarning: {
        marginHorizontal: 10,
        width: WIDTH*0.4,
        height: HEIGHT*0.08,
        backgroundColor: '#EDF5F8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 10,
        marginTop:'20%'
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
        fontSize: WIDTH*0.046,
        fontWeight: '700',
        color: '#707172',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 10
    },
    text3: {
        color: '#1545A5',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: WIDTH*0.035
    },
    text2: {
        color: '#1545A5',
        fontWeight: '900',
        fontStyle: 'normal',
        fontSize: WIDTH*0.06
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
        fontSize: WIDTH*0.09
    },
    textHC: {
        alignItems: 'center',
        marginTop:'-30%'
    },
    circleBG: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        // alignSelf:'center',
        marginTop: '28%',
        height: '60%',
        marginHorizontal: 10,
        borderRadius: 10,
        // borderWidth:1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        paddingTOp:'5%'
        },
})