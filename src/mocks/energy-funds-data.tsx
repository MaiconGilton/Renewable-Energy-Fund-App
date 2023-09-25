import { NatureFundIcon, SolarFundIcon, WindFundIcon } from '@assets/icons';
import React, { type ReactElement } from 'react';

export function simulateStockVariation(initialPrice: number, minChange: number, maxChange: number, numIterations: number) {
  let currentPrice = initialPrice
  const priceVariation: any[] = []
  let minValue = initialPrice; let maxValue = initialPrice

  for (let i = 0; i < numIterations; i++) {
    const priceChange = Math.random() * (maxChange - minChange) + minChange
    const direction = Math.random() < 0.5 ? 1 : -1 // 50% chance of a positive change
    currentPrice += priceChange * direction

    if (currentPrice < minValue) minValue = currentPrice
    if (currentPrice > maxValue) maxValue = currentPrice

    priceVariation.push({ value: currentPrice, hideDataPoint: true })
  }

  const finalPrice = priceVariation[priceVariation.length - 1].value
  const variation = ((finalPrice - initialPrice) / initialPrice) * 100

  priceVariation.map(i => {
    if (i.value === minValue || i.value === maxValue) {
      i.hideDataPoint = false
    }
    return i
  })

  return {
    data: priceVariation,
    currentPrice: finalPrice,
    variation,
    variationPrice: initialPrice * variation / 100,
    minValue,
    maxValue,
    priceAtOpen: priceVariation[0].value,
    priceAtClose: priceVariation[priceVariation.length - 1].value,
    issueDate: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 30) + 1}/2023`,
    ter: (Math.random() * 0.9 + 0.1).toFixed(2),
    range: `20${Math.round(Math.random() * (22 - 20) + 20)}–2023`,
    aum: Math.floor(Math.random() * (500 - 100 + 1)) + 100
  }
}

export interface THistoricalData {
  data: Array<{ value: number }>
  currentPrice: number
  variation: number
  variationPrice: number
  minValue: number
  maxValue: number
  priceAtOpen: number
  priceAtClose: number
  issueDate: string
  ter: string
  aum: number
  range: string
}

export interface IFundData {
  id: string
  title: string
  abbreviation: string
  icon: ReactElement
  historicalData: {
    '1h': THistoricalData
    '1d': THistoricalData
    '1w': THistoricalData
    '1m': THistoricalData
    '1y': THistoricalData
    'All': THistoricalData
  }
}

export const FUNDS_DATA: IFundData[] = [
  {
    id: 'wind',
    title: 'Wind Fund',
    abbreviation: 'WFND',
    icon: <WindFundIcon />,
    historicalData: {
      '1h': simulateStockVariation(45, -0.5, 0.5, 24),
      '1d': simulateStockVariation(45, -1, 1, 24),
      '1w': simulateStockVariation(45, -2, 2, 24),
      '1m': simulateStockVariation(45, -5, 5, 24),
      '1y': simulateStockVariation(45, -10, 10, 24),
      All: simulateStockVariation(45, -20, 20, 24)
    }
  },
  {
    id: 'solar',
    title: 'Solar Fund',
    abbreviation: 'SFND',
    icon: <SolarFundIcon />,
    historicalData: {
      '1h': simulateStockVariation(58, -0.5, 0.5, 24),
      '1d': simulateStockVariation(58, -1, 1, 24),
      '1w': simulateStockVariation(58, -2, 2, 24),
      '1m': simulateStockVariation(58, -5, 5, 24),
      '1y': simulateStockVariation(58, -10, 10, 24),
      All: simulateStockVariation(58, -20, 20, 24)
    }
  },
  {
    id: 'nature',
    title: 'Nature Fund',
    abbreviation: 'NFND',
    icon: <NatureFundIcon />,
    historicalData: {
      '1h': simulateStockVariation(95, -0.5, 0.5, 24),
      '1d': simulateStockVariation(95, -1, 1, 24),
      '1w': simulateStockVariation(95, -2, 2, 24),
      '1m': simulateStockVariation(95, -5, 5, 24),
      '1y': simulateStockVariation(95, -10, 10, 24),
      All: simulateStockVariation(95, -20, 20, 24)
    }
  }
]
