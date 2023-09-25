import CustomText from '@components/CustomText'
import { THEME_COLORS } from '@theme/colors'
import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'

const ARTICLES_DATA = [
  {
    id: '1',
    title: 'AspiraDAC',
    description: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.',
    coverImage: 'https://unsplash.it/400/200?image=10',
    category: 'Highlighted'
  },
  {
    id: '2',
    title: 'ClimeWorks',
    description: 'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
    coverImage: 'https://unsplash.it/400/200?image=19',
    category: 'Vintage'
  },
  {
    id: '3',
    title: 'HydroWave Energy',
    description: 'HydroWave Energy is dedicated to harnessing the energy of flowing water. Our innovative hydroelectric systems generate electricity efficiently and environmentally friendly.',
    coverImage: 'https://unsplash.it/400/200?image=1',
    category: 'Value'
  },
  {
    id: '4',
    title: 'GeoSolar Innovations',
    description: 'GeoSolar Innovations combines geothermal and solar technologies to provide efficient heating and cooling solutions. We are committed to reducing carbon footprints.',
    coverImage: 'https://unsplash.it/400/200?image=2',
    category: 'Registry'
  },
  {
    id: '5',
    title: 'GreenPower Corporation',
    description: 'GreenPower Corporation develops and operates biomass power plants, converting organic waste into clean energy. We strive to create a sustainable future.',
    coverImage: 'https://unsplash.it/400/200?image=3',
    category: 'Highlighted, Registry'
  },
  {
    id: '6',
    title: 'Tidal Energy Solutions',
    description: 'Tidal Energy Solutions harnesses the power of tides to generate electricity. Our underwater turbines are an eco-friendly way to produce renewable energy.',
    coverImage: 'https://unsplash.it/400/200?image=4',
    category: 'Value'
  },
  {
    id: '7',
    title: 'BioFuel Technologies',
    description: 'BioFuel Technologies is a leader in producing biofuels from renewable sources. We aim to reduce dependence on fossil fuels and combat climate change.',
    coverImage: 'https://unsplash.it/400/200?image=5',
    category: 'Highlighted, Registry'
  },
  {
    id: '8',
    title: 'Sunrise Solar Farms',
    description: 'Sunrise Solar Farms operates large-scale solar farms that provide clean energy to communities. Our commitment to sustainability drives our mission.',
    coverImage: 'https://unsplash.it/400/200?image=6',
    category: 'Vintage, Value'
  },
  {
    id: '9',
    title: 'WavePower Innovations',
    description: 'WavePower Innovations designs wave energy converters to generate electricity from ocean waves. We are pioneering the use of wave power for a brighter future.',
    coverImage: 'https://unsplash.it/400/200?image=7',
    category: 'Highlighted, Registry'
  },
  {
    id: '10',
    title: 'GreenTech BioEnergy',
    description: 'GreenTech BioEnergy specializes in turning organic waste into biogas and renewable natural gas. We provide eco-friendly solutions for waste management and energy production.',
    coverImage: 'https://unsplash.it/400/200?image=8',
    category: 'Vintage, Value'
  }
]

const FundBreakdown = () => {
  const [selectedTab, setSelectedTab] = React.useState('Highlighted')

  return (
    <View style={styles.container}>
      <CustomText
        text='Fund Breakdown'
        size={17}
        semiBold
        style={{ paddingHorizontal: 20 }}
      />

      <View style={styles.tabs}>
        {['Highlighted', 'Value', 'Vintage', 'Registry'].map(tab => {
          const isSelected = selectedTab === tab

          return (
            <TouchableOpacity
              key={tab}
              style={{
                ...styles.tab,
                borderBottomColor: isSelected
                  ? THEME_COLORS.PURPLE
                  : THEME_COLORS.WHITE
              }}
              onPress={() => setSelectedTab(tab)}
            >
              <CustomText
                text={tab}
                size={14}
                semiBold
                color={isSelected
                  ? THEME_COLORS.BLACK
                  : THEME_COLORS.GREY_DARK
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ARTICLES_DATA.filter(i => i.category.includes(selectedTab))}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) =>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
          >
            <FastImage
              style={{ width: 220, height: 106 }}
              source={{
                uri: item.coverImage,
                priority: FastImage.priority.high
              }}
              resizeMode={FastImage.resizeMode.cover}
            />

            <View style={styles.content}>
              <CustomText
                text={item.title}
                size={14}
                semiBold
                lineHeight={17}
              />

              <CustomText
                text={item.description}
                size={14}
                lineHeight={17}
                numberOfLines={4}
              />

              <CustomText
                text='Read more'
                size={12}
                lineHeight={17}
                underline
              />
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export default FundBreakdown

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  tabs: {
    flexDirection: 'row',
    padding: 20,
    gap: 20
  },
  tab: {
    borderBottomWidth: 2,
    paddingBottom: 5
  },
  list: {
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 40
  },
  card: {
    width: 220,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: THEME_COLORS.GREY_MEDIUM
  },
  content: {
    padding: 15,
    gap: 15
  }
})
