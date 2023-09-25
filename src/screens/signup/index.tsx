import { CCheckedIcon, CUncheckedIcon } from '@assets/icons'
import { showCustomAlert } from '@components/CustomAlert'
import CustomButton from '@components/CustomButton'
import CustomHeader from '@components/CustomHeader'
import { closeCustomModal, showCustomModal } from '@components/CustomModal'
import CustomText from '@components/CustomText'
import CustomTextInput from '@components/CustomTextInput'
import IconButton from '@components/IconButton'
import { api } from '@services/api'
import { THEME_COLORS } from '@theme/colors'
import { validateEmail } from '@utils/index'
import React, { useRef } from 'react'
import { ScrollView, StyleSheet, View, type TextInput } from 'react-native'

const SignUpScreen = ({ navigation }: RouterProps) => {
  const firstNameRef = useRef<TextInput>()
  const lastNameRef = useRef<TextInput>()
  const emailRef = useRef<TextInput>()
  const passwordRef = useRef<TextInput>()
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [termsChecked, setTermsChecked] = React.useState(false)
  const [errors, setErrors] = React.useState<any>({})
  const [processing, setProcessing] = React.useState(false)

  async function signup() {
    try {
      const errs: any = {}
      if (!firstName) errs.firstName = 'Field required!'
      if (!lastName) errs.lastName = 'Field required!'
      if (!email) errs.email = 'Field required!'
      if (!validateEmail(email.trim())) errs.email = 'Field invalid!'
      if (!password) errs.password = 'Field required!'
      if (password.trim().length < 8) errs.password = 'Password must have a minimum of 8 characters!'
      setErrors(errs)
      if (Object.entries(errs).length > 0) return

      // if (!termsChecked)
      //   return showCustomAlert({
      //     title: 'Action required',
      //     message: 'You must agree with out Terms of Service and Privacy policy to continue'
      //   })

      setProcessing(true)

      const res = await api('/user/signup', 'POST', {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password: password.trim()
      })

      setProcessing(false)

      if (res.data.error) throw new Error(res.data.error)

      showCustomModal({
        content:
          <View style={{
            backgroundColor: THEME_COLORS.WHITE,
            padding: 20,
            margin: 20,
            justifyContent: 'center'
          }}>
            <CustomText
              text='Welcome onboard 🎉🎉🎉'
              semiBold
              size={18}
              center
              marginBottom={20}
            />

            <CustomText
              text='Now you can continue and enjoy all great features we have for you!'
              center
              marginBottom={30}
            />

            <CustomButton
              label='Continue'
              onPress={closeCustomModal}
              style={{ width: 300 }}
            />
          </View>
      })
    } catch (error: any) {
      setProcessing(false)
      showCustomAlert({
        title: 'Error at signup!',
        message: error.message
      })
    }
  }

  return (
    <>
      <CustomHeader
        title={
          <View style={styles.dashes}>
            <View style={styles.dash} />
            <View style={styles.dash} />
            <View style={styles.dash} />
          </View>
        }
        hasBackBtn
      />

      <ScrollView style={styles.container}>
        <CustomText
          text='Create your account'
          semiBold
          size={18}
          center
          marginTop={10}
          marginBottom={20}
        />

        <CustomTextInput
          ref={firstNameRef}
          label='First Name'
          value={firstName}
          onChangeText={setFirstName}
          containerStyle={{ marginBottom: 15 }}
          error={errors.firstName}
          onSubmitEditing={() => lastNameRef.current?.focus()}
        />

        <CustomTextInput
          ref={lastNameRef}
          label='Last Name'
          value={lastName}
          onChangeText={setLastName}
          containerStyle={{ marginBottom: 15 }}
          error={errors.lastName}
          onSubmitEditing={() => emailRef.current?.focus()}
        />

        <CustomTextInput
          ref={emailRef}
          label='E-mail'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
          containerStyle={{ marginBottom: 15 }}
          error={errors.email}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />

        <CustomTextInput
          ref={passwordRef}
          label='Password'
          passwordType
          value={password}
          onChangeText={setPassword}
          containerStyle={{ marginBottom: 35 }}
          error={errors.password}
        />

        <View style={styles.terms}>
          <IconButton
            style={{ top: -5 }}
            icon={termsChecked
              ? <CCheckedIcon
                width={20}
                height={20}
                fill={THEME_COLORS.GREY_DARK}
              />
              : <CUncheckedIcon
                width={20}
                height={20}
                fill={THEME_COLORS.GREY_DARK}
              />
            }
            onPress={() => { setTermsChecked(!termsChecked); }}
          />

          <CustomText
            size={12}
            color={THEME_COLORS.GREY_DARK}
            style={{ flex: 1 }}
          >
            {'I am over 18 years of age and I have read and agree to the '}

            <CustomText
              text='Terms of Service'
              size={12}
              onPress={() => {}}
            />

            {' and '}

            <CustomText
              text='Privacy policy.'
              size={12}
              onPress={() => {}}
            />
          </CustomText>
        </View>

        <CustomButton
          label='Login'
          processing={processing}
          onPress={signup}
          disabled={!termsChecked}
          style={styles.btn}
        />

        <CustomText
          size={12}
          color={THEME_COLORS.GREY_DARK}
          center
        >
          {'Already have an account? '}

          <CustomText
            text='Log in'
            size={12}
            underline
            color={THEME_COLORS.GREY_DARK}
            onPress={() => { navigation.navigate('LoginScreen'); }}
          />

          {' here'}
        </CustomText>
      </ScrollView>
    </>
  )
}

export default SignUpScreen

export const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  dashes: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center'
  },
  dash: {
    width: 50,
    height: 5,
    borderRadius: 3,
    backgroundColor: THEME_COLORS.GREY
  },
  terms: {
    flexDirection: 'row',
    left: -12,
    marginBottom: 20
  },
  link: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3
  },
  btn: {
    marginBottom: 20
  }
})
