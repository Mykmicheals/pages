import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles';
import ModalContainer from './ModalContainer';
import { useStoreActions } from 'easy-peasy';
import { deleteModalTypes } from '../appTypes';

const DeleteModal = ({ showModals, close,productId }: deleteModalTypes) => {

    const deleteProuct = useStoreActions((actions: any) => actions.removeProuct);
    
    const deleteProductHandler =() => {
        deleteProuct(productId)
        close()
    }


  return (
    <ModalContainer showModals={showModals} onClose={close}>
      <View style={styles.delModal}>
        <Text style={styles.delModalText}>Are you sure you want to delete</Text>
        <View style={styles.modalDelBtm}>
          <TouchableOpacity onPress={close}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={deleteProductHandler}>
            <Text>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalContainer>
  );
};

export default DeleteModal;
