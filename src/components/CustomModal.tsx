import { BlurView } from '@react-native-community/blur';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { type CustomModalProps } from '@store/modal/actions';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

export let showCustomModal: (props: CustomModalProps) => void
export let closeCustomModal: () => void

export const initModalService = () => {
  const dispatch = useAppDispatch()
  showCustomModal = (props) => dispatch({ type: 'SHOW_MODAL', payload: props })
  closeCustomModal = () => dispatch({ type: 'HIDE_MODAL' })
  return null
}

export const CustomModalProvider = React.memo(() => {
  const props = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const {
    content,
    closeOnOverlayPress
  } = props || {}
  const show = !(Object.keys(props).length === 0)
  const [showModal, setShowModal] = React.useState(false)
  const opacityAnim = useRef(new Animated.Value(0)).current
  const translateAnim = useRef(new Animated.ValueXY({ y: -64, x: 0 })).current

  React.useEffect(() => {
    setShowModal(show)
  }, [show])

  useEffect(() => {
    if (showModal) {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 250,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true
        }),
        Animated.timing(translateAnim, {
          toValue: { y: 0, x: 0 },
          duration: 300,
          easing: Easing.elastic(1.5),
          useNativeDriver: true
        })
      ]).start()
    } else {
      dispatch({ type: 'HIDE_MODAL' })
      opacityAnim.setValue(1)
      translateAnim.setValue({ y: -64, x: 0 })
    }
  }, [showModal])

  return (
    <Modal
      visible={show}
      animationType='fade'
      statusBarTranslucent
      transparent
    >
      <View style={styles.container}>
        <Animated.View style={{
          opacity: opacityAnim,
          ...StyleSheet.absoluteFillObject
        }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              if (closeOnOverlayPress) setShowModal(false)
            }}
          >
            <BlurView
              style={styles.container}
              blurType='light'
              blurAmount={5}
              reducedTransparencyFallbackColor="white"
            />
          </TouchableWithoutFeedback>
        </Animated.View>

        <Animated.View
          style={{
            transform: [{ translateY: translateAnim.y }],
            opacity: opacityAnim
          }}
        >
          {content}
        </Animated.View>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
