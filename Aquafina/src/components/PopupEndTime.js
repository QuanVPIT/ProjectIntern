import { StyleSheet, Text, View,Image,TouchableOpacity, ImageBackground, ImageBackgroundComponent } from 'react-native'
import React,{useState,useEffect} from 'react'

const PopupEndTime = () => {
    const [timeCD, setTimeCD] = useState(10)
    useEffect(() => {
        setTimeout(() => {
          setTimeCD((timeCD) => timeCD - 1);
        }, 1000);
      },[])
    return (
        <View style={styles.container}>
            <Image source={require('../../images/circle_content.png')}
            resizeMode='cover'
            style={styles.circleBG} />
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
                <TouchableOpacity style={styles.btnWarning}>
                    <Text style={styles.textButton}>MÀN HÌNH CHÍNH</Text>
                    <Image style={styles.imgBtnW}
                        source={require('../../images/buttonW1.png')} 
                        resizeMode='cover'/>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.btnWarning}>
                    <Text style={[styles.textButton,{color:'#FFFFFF'}]}>THÊM THỜI GIAN</Text>
                    <Image style={styles.imgBtnW}
                        source={require('../../images/buttonW2.png')} 
                        resizeMode='cover'/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default PopupEndTime

const styles = StyleSheet.create({
    imgBtnW:{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:-1,
        borderRadius:10
    },
    textButton:{
        fontSize:20,
        fontWeight:'700',
        color:'#336CC8',
        textAlign:'center',

    },
    btnWarning:{
        marginHorizontal:10,
        width:220,
        height:70,
        backgroundColor:'#EDF5F8',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
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
      circleBG:{
        position: 'absolute',
        width:'100%',
        height:'100%',
      },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
        alignSelf:'center',
        marginTop:'28%',
        height:'65%',
        marginHorizontal:10,
        borderRadius:10
    },
})