import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { THEME_COLORS } from '../../theme/colors'
import Articles from './components/Articles'
import CarbonCreditsBanner from './components/CarbonCreditsBanner'
import Funds from './components/Funds'
import Header from './components/Header'
import SubHeader from './components/SubHeader'

const HomeScreen = () => {
  return (
    <>
      <Header />

      <ScrollView style={styles.container}>
        <SubHeader />
        <View style={styles.line} />
        <Funds />
        <CarbonCreditsBanner />
        <Articles />
      </ScrollView>
    </>
  )
}

export default HomeScreen

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.WHITE,
    flex: 1,
    gap: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: THEME_COLORS.GREY
  }
})
