import { FundDownIcon, FundUpIcon } from '@assets/icons'
import { THEME_COLORS } from '@theme/colors'
import { formatToCurrency } from '@utils/index'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from './CustomText'

const FundVariation = ({ percentAmount, amount }: { percentAmount: number, amount?: number }) => {
  const isPositive = percentAmount > 0

  return (
    <View
      style={styles.container}
      testID='container'
    >
      {isPositive
        ? <FundUpIcon testID='FundUpIcon' />
        : <FundDownIcon testID='FundDownIcon' />
      }

      <CustomText
        testID='percentAmount'
        text={Math.abs(percentAmount).toFixed(2) + '%'}
        color={isPositive
          ? THEME_COLORS.GREEN
          : THEME_COLORS.RED
        }
        size={14}
      />

      {!!amount &&
        <CustomText
          testID='amount'
          text={`(${formatToCurrency(Math.abs(amount))})`}
          color={isPositive
            ? THEME_COLORS.GREEN
            : THEME_COLORS.RED
          }
          size={14}
        />
      }
    </View>
  )
}

export default FundVariation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2
  }
})
