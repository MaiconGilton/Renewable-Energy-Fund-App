import { CarbonCreditsIcon } from '@assets/icons'
import CustomText from '@components/CustomText'
import { THEME_COLORS } from '@theme/colors'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const CarbonCreditsBanner = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
    >
      <View style={{ flex: 1, padding: 10 }}>
        <CustomText
          text={'Learn more about\ncarbon credits'}
          size={16}
          semiBold
          lineHeight={20}
          color={THEME_COLORS.WHITE}
          marginBottom={10}
        />

        <CustomText
          text='Check out our top tips!'
          size={12}
          color={THEME_COLORS.WHITE}
        />
      </View>

      <CarbonCreditsIcon />
    </TouchableOpacity>
  )
}

export default CarbonCreditsBanner

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.PURPLE,
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row'
  }
})
