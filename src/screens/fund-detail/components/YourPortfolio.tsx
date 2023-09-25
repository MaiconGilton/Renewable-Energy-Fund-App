import { PortfolioIcon } from '@assets/icons'
import CustomButton from '@components/CustomButton'
import CustomText from '@components/CustomText'
import FundVariation from '@components/FundVariation'
import { THEME_COLORS } from '@theme/colors'
import { formatToCurrency } from '@utils/index'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const YourPortfolio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <PortfolioIcon
          width={24}
          height={24}
          fill={THEME_COLORS.BLACK}
        />

        <CustomText
          text='Your Portfolio'
          size={17}
          semiBold
        />
      </View>

      <View style={styles.row}>
        <CustomText
          text='18 credits'
          size={24}
          semiBold
        />

        <CustomText
          text={formatToCurrency(328.14)}
          size={24}
          semiBold
        />
      </View>

      <View style={styles.row}>
        <FundVariation percentAmount={8.41} />

        <CustomText
          text='Last purchase 28d ago'
          size={14}
          color={THEME_COLORS.GREY_DARK}
        />
      </View>

      <View style={styles.actions}>
        <CustomButton
          label='Sell'
          onPress={() => {}}
          style={{
            backgroundColor: THEME_COLORS.WHITE,
            borderWidth: 1,
            borderColor: THEME_COLORS.GREY_DARK,
            flex: 1,
            height: 47
          }}
          textStyle={{
            color: THEME_COLORS.PURPLE
          }}
        />

        <CustomButton
          label='Retire credits'
          onPress={() => {}}
          style={{
            backgroundColor: THEME_COLORS.GREEN,
            borderWidth: 1,
            borderColor: THEME_COLORS.GREEN,
            flex: 1,
            height: 47
          }}
          textStyle={{
            color: THEME_COLORS.WHITE
          }}
        />
      </View>

      <CustomText
        text='You’ve previously retired 28 credits of this asset'
        size={11}
        color={THEME_COLORS.GREY_DARK}
        marginBottom={40}
      />

      <View style={styles.info}>
        <CustomText
          text={'Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.\n\nThe information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.'}
          size={12}
          lineHeight={17}
          color={THEME_COLORS.GREY_DARK}
        />
      </View>

      <CustomButton
        label='Buy'
        onPress={() => {}}
        style={{
          width: 310,
          alignSelf: 'center'
        }}
      />
    </View>
  )
}

export default YourPortfolio

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  actions: {
    marginTop: 15,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  info: {
    backgroundColor: THEME_COLORS.GREY,
    padding: 10,
    borderRadius: 4,
    marginBottom: 30
  }
})
