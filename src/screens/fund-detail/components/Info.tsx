import { InfoIcon } from '@assets/icons';
import CustomText from '@components/CustomText';
import { type THistoricalData } from '@mocks/energy-funds-data';
import { THEME_COLORS } from '@theme/colors';
import { formatToCurrency } from '@utils/index';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  chartData: THistoricalData
}

const Info = (props: Props) => {
  const {
    chartData,
  } = props

  const {
    priceAtOpen,
    priceAtClose,
    issueDate,
    ter,
    range,
    aum
  } = chartData

  return (
    <View style={styles.container}>
      <CustomText
        text={'Info & Stats'}
        size={17}
        semiBold
        style={{ paddingHorizontal: 20, paddingBottom: 10 }}
      />

      <View style={styles.info}>
        {[
          { label: 'AUM', value: formatToCurrency(aum) + 'm' },
          { label: 'Issue Date', value: issueDate },
          { label: 'Vintage Range', value: range },
          { label: 'TER', value: ter + '%' },
          { label: 'Price at Close', value: formatToCurrency(priceAtClose) },
          { label: 'Price at Open', value: formatToCurrency(priceAtOpen) }
        ].map(i =>
          <View key={i.label} style={styles.item}>
            <View style={{ flexDirection: 'row', gap: 2 }}>
              <CustomText
                text={i.label}
                size={14}
                color={THEME_COLORS.GREY_DARK}
              />

              <InfoIcon />
            </View>

            <CustomText
              text={i.value}
              size={14}
            />
          </View>
        )}
      </View>
    </View >
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
  },
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 40
  },
  item: {
    width: '50%',
    gap: 5,
    padding: 10
  }
})