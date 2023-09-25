import { ArrowBackIcon } from '@assets/icons'
import { useNavigation } from '@react-navigation/native'
import { THEME_COLORS } from '@theme/colors'
import React, { type ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from './CustomText'
import IconButton from './IconButton'

const CustomHeader = ({ title, hasBackBtn }: {
  title?: string | ReactElement
  hasBackBtn?: boolean
}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      {hasBackBtn &&
        <IconButton
          icon={<ArrowBackIcon fill={THEME_COLORS.BLACK} />}
          onPress={() => { navigation.goBack(); }}
          style={styles.backBtn}
        />
      }

      {!!title &&
        <View testID='titleContainer' style={styles.title}>
          {typeof title === 'string'
            ? <CustomText size={17} semiBold>{title}</CustomText>
            : title
          }
        </View>
      }
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    height: 60,
    borderBottomWidth: 1,
    borderColor: THEME_COLORS.GREY,
    width: '100%',
    backgroundColor: THEME_COLORS.WHITE
  },
  backBtn: {
    position: 'absolute',
    left: 16
  },
  title: {
    alignSelf: 'center'
  }
})
