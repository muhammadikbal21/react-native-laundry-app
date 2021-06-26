import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, ScrollView } from 'react-native'
import { ImageHeader, SplashLogo } from '../../assets/images'
import { Balance, ButtonIcon, OrderActive } from '../../components'
import { ORDER_LIST_BGCOLOR } from '../../utils/constants'

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={SplashLogo} style={styles.logo} />
          <View style={styles.text}>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.username}>muhammadikbal21_</Text>
          </View>
        </ImageBackground>
        <Balance />
        <View style={styles.service}>
          <Text style={styles.label}>Service Us</Text>
          <View style={styles.serviceMenu}>
            <ButtonIcon title="Kilogram" type="service" />
            <ButtonIcon title="Pieces" type="service" />
            <ButtonIcon title="VIP" type="service" />
            <ButtonIcon title="Carpet" type="service" />
            <ButtonIcon title="Only Iron" type="service" />
            <ButtonIcon title="Express" type="service" />
          </View>
        </View>
        <View style={styles.orderList}>
          <Text style={styles.label}>Order List</Text>
          <OrderActive orderId={1234} status="On Process" />
          <OrderActive orderId={1241} status="Unfinished" />
          <OrderActive orderId={2792} status="Finished" />
          <OrderActive orderId={4710} status="Unfinished" />
          <OrderActive orderId={4816} status="Unfinished" />
          <OrderActive orderId={4713} status="Finished" />
          <OrderActive orderId={4092} status="Finished" />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

// untuk mengukur lebar atau tinggi halaman dari berbagai perangkat agar halaman menjadi responsif
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    marginTop: windowHeight * 0.03
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
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  serviceMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  orderList: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: ORDER_LIST_BGCOLOR,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
})
