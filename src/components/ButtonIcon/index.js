import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconTopUp, IconPoint } from '../../assets'
import { SECONDARY_COLOR } from '../../utils/constants'

const ButtonIcon = ({title}) => {

  const Icon = () => {
    if (title === "Top Up") return <IconTopUp />
    
    if (title === "Get Point") return <IconPoint />

    return <IconTopUp /> //default jika props title tidak ada
  }

  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  button: {
    backgroundColor: SECONDARY_COLOR,
    padding: 7,
    borderRadius: 10
  },
  text: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center'
  }
})
