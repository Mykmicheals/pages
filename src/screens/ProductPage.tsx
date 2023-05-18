import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { styles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import DeleteModal from '../modals/DeleteModal';

const ProductPage = () => {
    const [showModal, setShowModal] = useState(false);

  const products = useStoreState((state: any) => state.products);

  const closeModal = () => {
  setShowModal(false)
  }
  
  const openModal = () => {
    setShowModal(true)
  }
  
  return (
    <View style={[styles.container, styles.productContainer]}>
      {products?.map((product: any,) => {
        const { name, price, image, id} = product;
        return (
          <View style={styles.productCol} key={id}>
            <View style={styles.productCard}>
              <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.cardBtm}>
                <View>
                  <Text style={styles.cardName}>{name}</Text>
                  <Text style={styles.price}>N {price}</Text>
                </View>
                <TouchableOpacity style={styles.cardDelete} onPress={openModal}>
                  <MaterialIcons  size={24} color="#FEA51B" name="delete" />
                </TouchableOpacity>
              </View>
            </View>
            <DeleteModal productId={id} showModals={showModal} close={closeModal} />
          </View>
        );
      })}
    </View>
  );
};

export default ProductPage;
