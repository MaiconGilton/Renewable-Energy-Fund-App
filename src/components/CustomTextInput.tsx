import { EyeOffIcon, EyeOnIcon } from '@assets/icons';
import { THEME_COLORS } from '@theme/colors';
import { THEME_FONTS } from '@theme/fonts';
import React from 'react';
import { Platform, StyleSheet, TextInput, View, type KeyboardTypeOptions, type TextInputProps, type ViewStyle } from 'react-native';
import CustomText from './CustomText';
import IconButton from './IconButton';

interface Props extends TextInputProps {
  onChangeText: (text: string, rawText?: string) => void
  label?: string
  passwordType?: boolean
  disabled?: boolean
  containerStyle?: ViewStyle
  textImputStyle?: ViewStyle
  keyboardType?: KeyboardTypeOptions
  error?: string
}

const CustomTextInput = React.forwardRef<any, Props>((props, ref) => {
  const {
    label,
    passwordType,
    keyboardType,
    textImputStyle,
    error,
    containerStyle = {}
  } = props

  const [showText, setshowText] = React.useState(!passwordType)

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {!!label &&
        <CustomText
          text={label}
          style={styles.label}
        />
      }

      <TextInput
        {...props}
        ref={ref}
        returnKeyType={
          Platform.OS === 'ios'
            ? 'done'
            : 'next'
        }
        secureTextEntry={!showText}
        autoCapitalize={
          (keyboardType === 'email-address' ?? passwordType)
            ? 'none'
            : 'sentences'
        }
        autoComplete={
          passwordType
            ? 'password'
            : 'off'
        }
        placeholderTextColor={
          THEME_COLORS.PLACEHOLDER
        }
        style={{
          ...styles.input,
          borderColor: error ? 'red' : THEME_COLORS.GREY,
          ...textImputStyle
        }}
      />

      {!!error &&
        <CustomText
          text={error}
          style={styles.error}
        />
      }

      {
        passwordType &&
        <IconButton
          icon={
            showText
              ? <EyeOnIcon width={20} height={20} fill={THEME_COLORS.GREY_DARK} />
              : <EyeOffIcon width={20} height={20} fill={THEME_COLORS.GREY_DARK} />
          }
          onPress={() => { setshowText(!showText); }}
          style={styles.eye_icon}
        />
      }
    </View>
  )
})

export default React.memo(CustomTextInput)

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  input: {
    color: THEME_COLORS.BLACK,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: THEME_COLORS.GREY,
    borderWidth: 1,
    borderColor: THEME_COLORS.GREY,
    fontFamily: THEME_FONTS.SORA_REGULAR,
    fontSize: 14,
    lineHeight: 17,
    height: 48
  },
  label: {
    fontFamily: THEME_FONTS.SORA_MEDIUM,
    fontSize: 11,
    lineHeight: 14,
    color: THEME_COLORS.GREY_DARK,
    marginBottom: 5
  },
  eye_icon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    padding: 10
  },
  error: {
    position: 'absolute',
    right: 0,
    bottom: -15,
    color: '#d00606',
    fontSize: 11
  }
})
