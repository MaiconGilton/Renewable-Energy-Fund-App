import CustomText from '@components/CustomText'
import FundVariation from '@components/FundVariation'
import { formatToCurrency } from '@utils/index'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  currentPrice: number
  variation: number
  variationPrice: number
}

const Balance = (props: Props) => {
  const {
    currentPrice,
    variation,
    variationPrice
  } = props

  return (
    <View style={styles.container}>
      <View style={{ gap: 4 }}>
        <CustomText
          semiBold
          text={formatToCurrency(currentPrice)}
          size={24}
        />

        <FundVariation
          percentAmount={variation}
          amout={variationPrice}
        />
      </View>

      <CustomText
        semiBold
        text='2023'
        size={24}
      />
    </View>
  )
}

export default Balance

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
