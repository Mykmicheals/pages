import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles';
import AddProductModal from '../modals/AddProductModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.btnBlue}
      >
        <Text>Add Product</Text>
      </TouchableOpacity>

      <AddProductModal showModals={showModal} close={onClose} />
    </View>
  );
};

export default HomePage;
