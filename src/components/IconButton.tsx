import React from 'react';
import {
  TouchableOpacity,
  type ViewStyle
} from 'react-native';

interface Props {
  icon: React.ReactNode
  onPress: () => void
  activeOpacity?: number
  disabled?: boolean
  style?: ViewStyle
}

const IconButton = (props: Props) => {
  const {
    style,
    onPress,
    activeOpacity,
    disabled,
    icon
  } = props

  return (
    <TouchableOpacity
      testID='IconButton'
      style={{
        height: 40,
        width: 40,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}
      onPress={() => requestAnimationFrame(() => {
        if (!disabled) onPress()
      })}
      activeOpacity={0.5 ?? activeOpacity}
      disabled={disabled}
    >
      {icon}
    </TouchableOpacity>
  )
}

export default React.memo(IconButton)
