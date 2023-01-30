import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Guide = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1545A5'} />
      <Image style={styles.imgH}
        resizeMode='cover'
        source={require('../../images/Logo.png')}
      />
    </View>
  )
}

export default Guide

const styles = StyleSheet.create({
  imgH: {
    alignSelf: 'center',
    width: 154,
    height: 52,
    marginTop: 28
  },
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8'
  }
})