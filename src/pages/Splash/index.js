import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashBackground, SplashLogo } from '../../assets'

const Splash = ({navigation}) => {

  // navigation.replace berfungsi ketika kita berpindah halaman yang dituju, kita tidak bisa kembali ke halaman kita berasal (back)
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp')
    }, 3000);
  }, [navigation])

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={SplashLogo} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 222,
    height: 105
  }
})
