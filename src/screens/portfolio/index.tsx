import CustomHeader from '@components/CustomHeader'
import CustomText from '@components/CustomText'
import { THEME_COLORS } from '@theme/colors'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const PortfolioScreen = () => {
  return (
    <>
      <CustomHeader title='Portfolio' />

      <ScrollView style={styles.container}>
        <CustomText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CustomText>
      </ScrollView>
    </>
  )
}

export default PortfolioScreen

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.WHITE,
    padding: 20
  }
})
