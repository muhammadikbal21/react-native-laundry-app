import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import { ImageHeader, SplashLogo } from '../../assets/images'
import { Balance, ButtonIcon } from '../../components'

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
      <View style={styles.service}>
        <Text style={styles.serviceText}>Service Us</Text>
        <View style={styles.serviceMenu}>
          <ButtonIcon title="Kilogram" type="service" />
          <ButtonIcon title="Pieces" type="service" />
          <ButtonIcon title="VIP" type="service" />
          <ButtonIcon title="Carpet" type="service" />
          <ButtonIcon title="Only Iron" type="service" />
          <ButtonIcon title="Express" type="service" />
        </View>
      </View>
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
  },
  service: {
    paddingLeft: 30,
    paddingTop: 15
  },
  serviceText: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  serviceMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    flexWrap: 'wrap'
  }
})
