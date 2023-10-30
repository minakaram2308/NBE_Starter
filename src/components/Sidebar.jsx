import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Animated,
  Pressable,
  PanResponder,
} from 'react-native';

export default function SlidingModal({children, visible, onClose}) {
  const [slideAnimation] = useState(new Animated.Value(-1000));

  //   useEffect(() => {
  //     if (visible) {
  //       Animated.spring(slideAnimation, {
  //         toValue: -10,
  //         useNativeDriver: true,
  //       }).start();
  //     } else {
  //       Animated.spring(slideAnimation, {
  //         toValue: -1000,
  //         useNativeDriver: true,
  //       }).start();
  //     }
  //   }, [visible]);
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        slideAnimation.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -120) {
          Animated.timing(slideAnimation, {
            toValue: -500,
            duration: 300,
            useNativeDriver: true,
          }).start(onClose);
        } else {
          Animated.spring(slideAnimation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300, // Adjust the duration as per your preference
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: -1000,
        duration: 300, // Adjust the duration as per your preference
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const closeModal = () => {
    Animated.timing(slideAnimation, {
      toValue: -1000,
      duration: 300, // Adjust the duration as per your preference
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  return (
    <Modal visible={visible} transparent>
      <Pressable style={styles.backdrop} onPress={closeModal}>
        <Pressable onPress={null} style={styles.modalContainerPressable}>
          <Animated.View
            {...panResponder.panHandlers} // Allows for dragging
            style={[
              styles.modalContainer,
              {transform: [{translateX: slideAnimation}]},
            ]}>
            {children}
          </Animated.View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalContainerPressable: {
    // backgroundColor: 'white',
    width: '80%',
    height: '100%',
    // padding: 20,
    // elevation: 10,
    // borderTopRightRadius: 30,
    // borderBottomRightRadius: 30,
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 20,
    elevation: 10,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});
