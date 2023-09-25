import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { THEME_COLORS } from '../theme/colors';
import { THEME_FONTS } from '../theme/fonts';

export interface Props extends TextProps {
  text: string
  color: string
  semiBold: boolean
  bold: boolean
  medium: boolean
  center: boolean
  right: boolean
  uppercase: boolean
  underline: boolean
  size: number
  marginTop: number
  marginBottom: number
  lineHeight: number
  numberOfLines: number
  children: any
  style?: TextStyle
}

const CustomText: React.FC<Partial<Props>> = props => {
  const {
    style,
    color,
    bold,
    medium,
    semiBold,
    size,
    text,
    children,
    center,
    underline,
    right,
    uppercase,
    numberOfLines,
    marginBottom,
    marginTop,
    lineHeight
  } = props

  let _style: TextStyle = {
    fontFamily: THEME_FONTS.SORA_REGULAR,
    color: THEME_COLORS.BLACK,
    fontSize: 14,
    lineHeight: 17
  }

  if (size) _style = { ..._style, fontSize: size, lineHeight: size + 2 }
  if (color) _style = { ..._style, color }
  if (semiBold) _style = { ..._style, fontFamily: THEME_FONTS.SORA_SEMI_BOLD }
  if (bold) _style = { ..._style, fontFamily: THEME_FONTS.SORA_BOLD }
  if (medium) _style = { ..._style, fontFamily: THEME_FONTS.SORA_MEDIUM }
  if (underline) _style = { ..._style, textDecorationLine: 'underline' }
  if (center) _style = { ..._style, textAlign: 'center' }
  if (right) _style = { ..._style, textAlign: 'right' }
  if (uppercase) _style = { ..._style, textTransform: 'uppercase' }
  if (marginBottom) _style = { ..._style, marginBottom }
  if (marginTop) _style = { ..._style, marginTop }
  if (lineHeight) _style = { ..._style, lineHeight }

  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={{ ..._style, ...style }}
    >
      {children ?? text}
    </Text>
  )
}

export default React.memo(CustomText)
