import CustomText from '@components/CustomText';
import { useAppSelector } from '@store/hooks';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FUNDS_DATA } from './../../../mocks/energy-funds-data';
import FundCard from './FundCard';

const Funds = () => {
  const { user } = useAppSelector(state => state.user)

  if (!user) return null

  return (
    <>
      <CustomText
        semiBold
        size={18}
        text='Funds'
        style={{ padding: 20, paddingBottom: 0 }}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {FUNDS_DATA.map(fund => {
          const amount = user?.account.funds[fund.id]

          return (
            <FundCard
              key={fund.title}
              icon={fund.icon}
              title={fund.title}
              abbreviation={fund.abbreviation}
              historicalData={fund.historicalData['1d']}
              amount={amount}
            />
          )
        })}
      </ScrollView>
    </>
  )
}

export default Funds

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15
  }
})
