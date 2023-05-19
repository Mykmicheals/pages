import { View, TouchableOpacity,Modal } from 'react-native';
import React from 'react';
import { styles } from '../styles';
import { AntDesign } from '@expo/vector-icons';
import { ModalContainerProps } from '../appTypes';

const ModalContainer = ({ onClose, children,showModals }: ModalContainerProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModals}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="#000000" />
          </TouchableOpacity>
          <View>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
