import CustomText from '@components/CustomText';
import FundVariation from '@components/FundVariation';
import { type THistoricalData } from '@mocks/energy-funds-data';
import { useNavigation } from '@react-navigation/native';
import { THEME_COLORS } from '@theme/colors';
import { formatToCurrency } from '@utils/index';
import React, { type ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

interface Props {
  title: string
  abbreviation: string
  icon: ReactElement
  historicalData: THistoricalData
  amount: number
}

const FundCard = (props: Props) => {
  const navigation = useNavigation()
  const {
    title,
    icon,
    abbreviation,
    historicalData,
    amount
  } = props

  const {
    data,
    variation,
    minValue
  } = historicalData

  const isPositive = variation > 0
  const color = isPositive ? THEME_COLORS.GREEN : THEME_COLORS.RED

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('FundDetailScreen', {
          historicalData,
          abbreviation,
          title
        });
      }}
    >
      {icon}

      <CustomText
        text={title}
        marginTop={5}
        marginBottom={10}
      />

      <View style={{ width: 80, flex: 1, left: -10 }}>
        <LineChart
          data={data}
          color={color}
          hideDataPoints
          overflowBottom={0}
          hideYAxisText
          hideAxesAndRules
          spacing={3.5}
          width={90}
          initialSpacing={0}
          disableScroll
          isAnimated
          animateOnDataChange
          height={40}
          endSpacing={0}
          curved
          yAxisOffset={minValue}
          yAxisLabelContainerStyle={{ width: 0 }}
        />
      </View>

      <View style={styles.numbers}>
        <CustomText
          text={formatToCurrency(amount)}
          size={14}
        />

        <FundVariation percentAmount={variation} />
      </View>
    </TouchableOpacity>
  )
}

export default FundCard

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: THEME_COLORS.GREY_MEDIUM,
    minWidth: 140,
    height: 145
  },
  numbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5
  }
})
