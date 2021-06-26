import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { MAIN_COLOR } from '../../utils/constants'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceInfo}>
        <View style={styles.text}>
          <Text style={styles.balanceLabel}>Balance :</Text>
          <Text style={styles.balanceValue}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.pointLabel}>Laundry Point</Text>
          <Text style={styles.pointValue}>100 points</Text>
        </View>
      </View>
      <View style={styles.button}>
        <ButtonIcon title="Top Up" />
        <Gap width={10} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  )
}

export default Balance

// untuk mengukur lebar atau tinggi halaman dari berbagai perangkat agar halaman menjadi responsif
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row'
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceInfo: {
    width: '60%'
  },
  balanceLabel: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular'
  },
  balanceValue: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold'
  },
  pointLabel: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular'
  },
  pointValue: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: MAIN_COLOR
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
