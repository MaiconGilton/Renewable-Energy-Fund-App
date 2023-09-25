import { THEME_FONTS } from '@theme/fonts';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
  type TextStyle,
  type ViewStyle
} from 'react-native';
import { THEME_COLORS } from '../theme/colors';
import CustomText from './CustomText';

export interface ICustomButtonProps {
  label: string
  onPress: () => any
  activeOpacity?: number
  disabled?: boolean
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  textStyle?: TextStyle
  style?: ViewStyle
  processing?: boolean
  processingLabel?: string
}

const CustomButton = (props: ICustomButtonProps) => {
  const {
    style,
    label,
    onPress,
    textStyle = {},
    activeOpacity,
    disabled,
    rightIcon,
    leftIcon,
    processing,
    processingLabel = 'Processing'
  } = props

  const _btnStyle = {
    ...styles.btn,
    ...(disabled ? styles.btnDisabled : {}),
    ...style
  }
  const _textStyle = {
    ...styles.label,
    ...textStyle
  }

  return (
    <TouchableOpacity
      style={_btnStyle}
      onPress={() => requestAnimationFrame(() => {
        if (!disabled && !processing) onPress()
      })}
      activeOpacity={0.5 ?? activeOpacity}
      disabled={disabled}
    >
      {!!leftIcon &&
        <View style={{ marginRight: 5 }}>
          {leftIcon}
        </View>
      }

      {!!processing &&
        <ActivityIndicator
          color={_textStyle.color}
          style={{ marginRight: 5 }}
        />
      }

      <CustomText style={_textStyle}>{
        processing ? processingLabel : label
      }</CustomText>

      {!!rightIcon &&
        <View style={{ marginLeft: 5 }}>
          {rightIcon}
        </View>
      }
    </TouchableOpacity>
  )
}

export default React.memo(CustomButton)

const styles = StyleSheet.create({
  btn: {
    minHeight: 52,
    borderRadius: 4,
    overflow: 'hidden',
    // paddingVertical: 16,
    // paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    backgroundColor: THEME_COLORS.PURPLE
  },
  btnDisabled: {
    backgroundColor: THEME_COLORS.GREY_DARK
  },
  label: {
    color: THEME_COLORS.WHITE,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: THEME_FONTS.SORA_MEDIUM
  }
})
