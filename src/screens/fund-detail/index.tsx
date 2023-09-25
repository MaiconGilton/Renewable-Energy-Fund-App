import CustomHeader from '@components/CustomHeader';
import CustomText from '@components/CustomText';
import { THEME_COLORS } from '@theme/colors';
import React from 'react';
import { ScrollView } from 'react-native';
import { type THistoricalData } from '../../mocks/energy-funds-data';
import Chart from './components/Chart';
import FundBreakdown from './components/FundBreakdown';
import YourPortfolio from './components/YourPortfolio';

interface ParamsProps {
  title: string
  abbreviation: string
  historicalData: THistoricalData
}

const FundDetailScreen = (props: RouterProps) => {
  const {
    historicalData,
    title,
    abbreviation
  } = props.route.params as ParamsProps

  return (
    <>
      <CustomHeader
        hasBackBtn
        title={
          <>
            <CustomText
              text={title}
              size={17}
              semiBold
              center
            />

            <CustomText
              text={abbreviation}
              size={14}
              color={THEME_COLORS.GREY_DARK}
              center
            />
          </>
        }
      />

      <ScrollView>
        <Chart
          historicalData={historicalData}
          title={title}
        />
        <FundBreakdown />
        <YourPortfolio />
      </ScrollView>
    </>
  )
}

export default FundDetailScreen
