import { showCustomAlert } from '@components/CustomAlert'
import CustomButton from '@components/CustomButton'
import CustomHeader from '@components/CustomHeader'
import CustomText from '@components/CustomText'
import CustomTextInput from '@components/CustomTextInput'
import { api } from '@services/api'
import { useAppDispatch } from '@store/hooks'
import { THEME_COLORS } from '@theme/colors'
import { validateEmail } from '@utils/index'
import React, { useRef } from 'react'
import { ScrollView, StyleSheet, type TextInput } from 'react-native'

const LoginScreen = ({ navigation }: RouterProps) => {
  const dispatch = useAppDispatch()
  const emailRef = useRef<TextInput>()
  const passwordRef = useRef<TextInput>()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errors, setErrors] = React.useState<any>({})
  const [processing, setProcessing] = React.useState(false)

  async function login() {
    try {
      const errs: any = {}
      if (!email) errs.email = 'Field required!'
      if (!validateEmail(email.trim())) errs.email = 'Field invalid!'
      if (!password) errs.password = 'Field required!'
      if (password.trim().length < 8) errs.password = 'Password must have a minimum of 8 characters!'
      setErrors(errs)
      if (Object.entries(errs).length > 0) return

      setProcessing(true)

      const res = await api('/user/login', 'POST', {
        email: email.trim(),
        password: password.trim()
      })

      setProcessing(false)

      if (res.data.error) throw new Error(res.data.error);

      dispatch({ type: 'LOGIN_USER', payload: res.data.user })
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
      <CustomHeader title='' />

      <ScrollView style={styles.container}>
        <CustomText
          text='Login'
          semiBold
          size={18}
          center
          marginTop={10}
          marginBottom={20}
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
          onSubmitEditing={login}
        />

        <CustomButton
          label='Login'
          processing={processing}
          onPress={login}
          style={styles.btn}
        />

        <CustomText
          size={12}
          color={THEME_COLORS.GREY_DARK}
          center
        >
          {'Don’t have an account? '}
          <CustomText
            text='Sign up'
            size={12}
            underline
            color={THEME_COLORS.GREY_DARK}
            onPress={() => { navigation.navigate('SignUpScreen'); }}
          />
          {' here'}
        </CustomText>
      </ScrollView>
    </>
  )
}

export default LoginScreen

export const styles = StyleSheet.create({
  container: {
    padding: 20
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