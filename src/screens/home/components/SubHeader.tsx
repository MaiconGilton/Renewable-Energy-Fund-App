import { CoinIcon } from '@assets/icons'
import CustomButton from '@components/CustomButton'
import CustomText from '@components/CustomText'
import FundVariation from '@components/FundVariation'
import { useAppSelector } from '@store/hooks'
import { THEME_COLORS } from '@theme/colors'
import { THEME_FONTS } from '@theme/fonts'
import { formatToCurrency } from '@utils/index'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const SubHeader = () => {
  const { user } = useAppSelector(state => state.user)

  if (!user) return null

  const portfolioTotalAmount = Object.values(user?.account.funds)
    .reduce((pv, cv) => pv + cv, 0)

  return (
    <View style={styles.container}>
      <CustomText
        text='Portfolio'
        size={12}
        marginBottom={5}
      />

      <View style={styles.row}>
        <CustomText
          size={24}
          semiBold
          text={formatToCurrency(portfolioTotalAmount)}
          style={{ top: 4 }}
        />

        <FundVariation percentAmount={0.13} />

        <CustomButton
          onPress={() => {}}
          label='Earn Rewards'
          leftIcon={<CoinIcon />}
          style={styles.btn}
          textStyle={styles.btnText}
        />
      </View>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.WHITE,
    padding: 20,
    paddingTop: 0
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5
  },
  btn: {
    width: 110,
    height: 30,
    minHeight: 30,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: THEME_COLORS.PURPLE_LIGHT,
    marginLeft: 'auto'
  },
  btnText: {
    fontSize: 11,
    fontFamily: THEME_FONTS.SORA_SEMI_BOLD,
    color: THEME_COLORS.PURPLE
  }
})
