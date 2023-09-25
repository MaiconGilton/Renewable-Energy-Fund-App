import CustomText from '@components/CustomText';
import { FUNDS_DATA, type THistoricalData } from '@mocks/energy-funds-data';
import { THEME_COLORS } from '@theme/colors';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import Balance from './Balance';
import Info from './Info';

interface Props {
  title: string
  historicalData: THistoricalData
}

const SCREEN_WIDTH = Dimensions.get('window').width

const Chart = (props: Props) => {
  const {
    historicalData,
    title
  } = props

  const [chartData, setChartData] = React.useState(historicalData)

  const {
    minValue,
    currentPrice,
    variation,
    variationPrice
  } = chartData

  const [rangeOption, setRangeOption] = React.useState('1d')
  const isPositive = chartData.variation > 0
  const color = isPositive ? THEME_COLORS.GREEN : THEME_COLORS.RED

  return (
    <>
      <Balance
        currentPrice={currentPrice}
        variation={variation}
        variationPrice={variationPrice}
      />

      <View style={styles.container}>
        <LineChart
          data={chartData.data}
          overflowBottom={0}
          color={color}
          dataPointsWidth={1}
          dataPointsHeight={1}
          dataPointsColor={color}
          textColor={color}
          textShiftY={-10}
          textFontSize={14}
          spacing={SCREEN_WIDTH / 22}
          width={SCREEN_WIDTH + 5}
          hideAxesAndRules
          initialSpacing={0}
          disableScroll
          isAnimated
          animateOnDataChange
          height={153}
          endSpacing={0}
          yAxisOffset={minValue}
          hideDataPoints
        // showValuesAsDataPointsText
        />
      </View>

      <View style={styles.options}>
        {['1h', '1d', '1w', '1m', '1y', 'All'].map(opt => {
          const isSelected = opt === rangeOption

          return (
            <TouchableOpacity
              key={opt}
              style={{
                ...styles.option,
                backgroundColor: isSelected
                  ? THEME_COLORS.PURPLE_LIGHT
                  : THEME_COLORS.WHITE
              }}
              onPress={() => {
                setRangeOption(opt)
                const data = FUNDS_DATA.find(i => i.title === title)
                setChartData(data?.historicalData[opt])
              }}
            >
              <CustomText
                text={opt}
                medium
                size={15}
                color={isSelected
                  ? THEME_COLORS.PURPLE
                  : THEME_COLORS.GREY_DARK
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>

      <Info
        chartData={chartData}
      />
    </>
  )
}

export default Chart

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH, left: -40
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  option: {
    padding: 10,
    borderRadius: 4,
    marginBottom: 20
  }
})
