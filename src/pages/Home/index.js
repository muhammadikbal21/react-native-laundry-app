import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import { ImageHeader, SplashLogo } from '../../assets/images'
import { Balance } from '../../components'

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={SplashLogo} style={styles.logo} />
        <View style={styles.text}>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.username}>muhammadikbal21_</Text>
        </View>
      </ImageBackground>
      <Balance />
    </View>
  )
}

export default Home

// untuk mengukur lebar atau tinggi halaman dari berbagai perangkat agar halaman menjadi responsif
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06
  },
  text: {
    marginTop: windowHeight * 0.030
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular'
  },
  username: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold'
  }
})
