import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const PopupEndTime = () => {
    const [timeCD, setTimeCD] = useState(10)
    return (
        <View style={styles.container}>
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

            <Text style={[styles.text2,{marginTop:30,fontSize:35,letterSpacing:3}]}>CẢNH BÁO HẾT THỜI GIAN</Text>
            <Text style={styles.textWarning}>Thời gian thực hiện quy trình đã kết thúc, bạn có cần thêm thời gian không?</Text>
            <Text style={styles.textWarning}>Trở về màn hình chính sau: <Text style={{color:'red'}}>{timeCD} GIÂY NỮA</Text></Text>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.btnWarning}><Text>MÀN HÌNH CHÍNH</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnWarning}><Text>THÊM THỜI GIAN</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default PopupEndTime

const styles = StyleSheet.create({
    btnWarning:{
        marginHorizontal:10,
        width:200,
        height:30,
        backgroundColor:'#EDF5F8',
        justifyContent:'center',
        alignItems:'center',
    },
    viewButton:{
        flexDirection:'row',
        width:'100%',
        height:'20%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:15
    },
    textWarning: {
        fontSize:25,
        fontWeight: '700',
        color: '#707172',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop:10
    },
    text3: {
        color: '#1545A5',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 18
      },
      text2: {
        color: '#1545A5',
        fontWeight: '900',
        fontStyle: 'normal',
        fontSize: 28
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
        fontSize: 45
      },
      textHC: {
        alignItems: 'center'
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
    },
})