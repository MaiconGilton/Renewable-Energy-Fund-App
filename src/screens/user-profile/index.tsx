import { showCustomAlert } from '@components/CustomAlert'
import CustomButton from '@components/CustomButton'
import CustomHeader from '@components/CustomHeader'
import { closeCustomModal } from '@components/CustomModal'
import CustomText from '@components/CustomText'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { THEME_COLORS } from '@theme/colors'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const UserProfileScreen = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)

  function logOut() {
    showCustomAlert({
      closeOnOverlayPress: true,
      title: 'Are you sure?',
      message: 'Do you want to sign out?',
      cancelBtnLabel: 'No',
      confirmBtnLabel: 'Yes',
      onConfirm: () => {
        dispatch({ type: 'LOGOUT_USER' })
        closeCustomModal()
      }
    })
  }

  return (
    <>
      <CustomHeader title='Profile' hasBackBtn />

      <View style={styles.container}>
        <CustomText>{user?.firstName + '' + user?.lastName}</CustomText>
        <CustomText>{user?.email}</CustomText>

        <CustomButton
          label='Sign out'
          onPress={logOut}
          style={{ marginTop: 20 }}
        />
      </View>
    </>
  )
}

export default UserProfileScreen

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.WHITE,
    padding: 20
  },
  modal: {
    backgroundColor: THEME_COLORS.WHITE,
    padding: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: THEME_COLORS.GREY
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: THEME_COLORS.GREY_DARK
  }
})
