import { THEME_COLORS } from '@theme/colors';
import React from 'react';
import { View } from 'react-native';
import CustomButton, { type ICustomButtonProps } from './CustomButton';
import { closeCustomModal, showCustomModal } from './CustomModal';
import CustomText from './CustomText';

export interface ICustomAlert {
  title?: string
  message?: string
  content?: any
  showLeftBtn?: boolean
  closeOnOverlayPress?: boolean
  closeOnConfirmPress?: boolean
  onConfirm?: () => void
  confirmBtnLabel?: string
  onCancel?: () => void
  cancelBtnLabel?: string
  renderIcon?: React.ReactElement
  iconAboveTitle?: boolean
  confirmBtnProps?: Partial<ICustomButtonProps>
  cancelBtnProps?: ICustomButtonProps
}

export const showCustomAlert = (props: ICustomAlert) => {
  showCustomModal({
    closeOnOverlayPress: !!props.closeOnOverlayPress,
    content:
      <CustomAlert {...props} />
  })
}
export const closeCustomAlert = () => { closeCustomModal(); }

export const CustomAlert = React.memo((props: ICustomAlert) => {
  const {
    title,
    content,
    message,
    onConfirm,
    confirmBtnLabel = 'Ok',
    cancelBtnLabel = 'Close',
    renderIcon,
    showLeftBtn = true,
    closeOnConfirmPress = true,
    iconAboveTitle,
    cancelBtnProps,
    confirmBtnProps
  } = props

  return (
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 9
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 10,
        backgroundColor: THEME_COLORS.WHITE
      }}
    >
      {iconAboveTitle && !!renderIcon &&
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {renderIcon}
        </View>
      }

      {!!title &&
        <CustomText
          text={title}
          bold
          center
          marginBottom={10}
          marginTop={10}
          uppercase
        />
      }

      {!iconAboveTitle && !!renderIcon &&
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          {renderIcon}
        </View>
      }

      {message
        ? <CustomText
          text={message}
          center
          // color={themeColors.body1}
          marginBottom={20}
        />
        : content
      }

      <View style={{ flexDirection: 'row', gap: 15 }}>
        {!!showLeftBtn &&
          <CustomButton
            style={{ flex: 1, backgroundColor: THEME_COLORS.GREY_DARK }}
            {...cancelBtnProps}
            label={cancelBtnLabel}
            onPress={() => { closeCustomModal(); }}
          />
        }

        {!!onConfirm &&
          <CustomButton
            style={{ flex: 1 }}
            {...confirmBtnProps}
            onPress={() => {
              onConfirm()
              if (closeOnConfirmPress) closeCustomModal()
            }}
            label={confirmBtnLabel}
          />
        }
      </View>
    </View>
  )
})
