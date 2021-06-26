import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { IconOrderListActive } from '../../assets'
import { DISABLED_COLOR, MAIN_COLOR, ORDER_LIST_BGCOLOR, UNFINISHED_COLOR } from '../../utils/constants'

const OrderActive = ({orderId, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconOrderListActive />
      <View style={styles.text}>
        <Text style={styles.orderId}>ID Order {orderId}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default OrderActive

// untuk mengukur lebar atau tinggi halaman dari berbagai perangkat agar halaman menjadi responsif
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.02,
    alignItems: 'center'
  },
  text: {
    marginLeft: windowWidth * 0.02
  },
  orderId: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  status: (status) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: status === 'Finished' ? MAIN_COLOR : status === 'Unfinished' ? UNFINISHED_COLOR : DISABLED_COLOR
  })
})
