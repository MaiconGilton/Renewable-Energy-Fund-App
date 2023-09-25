import CustomText from '@components/CustomText'
import { THEME_COLORS } from '@theme/colors'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Articles = () => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.6}
      >
        <CustomText
          semiBold
          size={12}
          text='Why should you invest here?'
          style={{ flex: 1 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.6}
      >
      </TouchableOpacity>
    </View>
  )
}

export default Articles

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: 'row',
    padding: 20
  },
  card: {
    flex: 1,
    borderRadius: 10,
    height: 215,
    backgroundColor: THEME_COLORS.GREY,
    padding: 10
  }
})
