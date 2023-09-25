import { ChevronDownIcon, NotificationIcon, UserIcon } from '@assets/icons'
import CustomText from '@components/CustomText'
import IconButton from '@components/IconButton'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '@store/hooks'
import { THEME_COLORS } from '@theme/colors'
import { formatToCurrency } from '@utils/index'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Header = () => {
  const navigation = useNavigation()
  const { user } = useAppSelector(state => state.user)

  if (!user) return null

  return (
    <View style={styles.header}>
      <IconButton
        onPress={() => { navigation.navigate('UserProfileScreen'); }}
        icon={
          <UserIcon fill={THEME_COLORS.BLACK} />
        }
        style={{
          width: 32,
          height: 32,
          backgroundColor: THEME_COLORS.GREY
        }}
      />

      <View style={styles.headerAccount}>
        <CustomText size={14} bold>Account: </CustomText>

        <TouchableOpacity
          onPress={() => {}}
          style={styles.headerAccountBtn}
        >
          <CustomText size={14} bold>
            {formatToCurrency(user?.account.balance)}
          </CustomText>

          <ChevronDownIcon fill={THEME_COLORS.BLACK} />
        </TouchableOpacity>
      </View>

      <IconButton
        onPress={() => {}}
        icon={
          <NotificationIcon fill={THEME_COLORS.BLACK} />
        }
        style={{
          width: 32,
          height: 32
        }}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    backgroundColor: THEME_COLORS.WHITE
  },
  headerAccount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerAccountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  }
})
