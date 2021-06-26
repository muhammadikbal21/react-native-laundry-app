import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconTopUp, IconPoint, IconKilogram, IconPieces, IconVIP, IconCarpet, IconOnlyIron, IconExpress } from '../../assets'
import { SECONDARY_COLOR } from '../../utils/constants'

const ButtonIcon = ({title, type}) => {

  const Icon = () => {
    if (title === "Top Up") return <IconTopUp />
    
    if (title === "Get Point") return <IconPoint />

    if (title === "Kilogram") return <IconKilogram />

    if (title === "Pieces") return <IconPieces />

    if (title === "VIP") return <IconVIP />

    if (title === "Carpet") return <IconCarpet />

    if (title === "Only Iron") return <IconOnlyIron />

    if (title === "Express") return <IconExpress />

    return <IconTopUp /> //default jika props title tidak ada
  }

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  container: (type) => ({
    marginBottom: 12,
    marginRight: type === 'service' ? 30 : 0
  }),
  button: (type) =>  ({
    backgroundColor: SECONDARY_COLOR,
    padding: type === 'service' ? 12 : 7,
    borderRadius: 10
  }),
  text: (type) => ({
    fontSize: type === 'service' ? 14: 10,
    fontFamily: type === 'service' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center'
  })
})
