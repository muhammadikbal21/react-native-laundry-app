import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHomeActiveBotNav, IconHomeBotNav, IconOrderActiveBotNav, IconOrderBotNav, IconAccountActiveBotNav, IconAccountBotNav } from '../../assets'
import { DISABLED_COLOR, MAIN_COLOR } from '../../utils/constants'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {

  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActiveBotNav /> : <IconHomeBotNav />

    if (label === 'Order') return isFocused ? <IconOrderActiveBotNav /> : <IconOrderBotNav />

    if (label === 'Account') return isFocused ? <IconAccountActiveBotNav /> : <IconAccountBotNav />

    return <IconHomeBotNav />
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? MAIN_COLOR : DISABLED_COLOR,
    marginTop: 8,
  })
})
