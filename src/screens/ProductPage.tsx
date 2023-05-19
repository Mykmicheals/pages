import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';
import { styles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import DeleteModal from '../modals/DeleteModal';
import { Product, productsType } from '../appTypes';

const ProductPage = () => {
    const [showModal, setShowModal] = useState(false);

  const products = useStoreState((state: productsType) => state.products);

  const closeModal = () => {
  setShowModal(false)
  }
  
  const openModal = () => {
    setShowModal(true)
  }
  
  return (
    <View style={[styles.container, styles.productContainer]}>
  {products?.length > 0 ? (
  products.map((product: Product) => {
    const { name, price, image, id } = product;
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
            <TouchableOpacity
              style={styles.cardDelete}
              onPress={openModal}
            >
              <MaterialIcons size={24} color="#FEA51B" name="delete" />
            </TouchableOpacity>
          </View>
        </View>
        <DeleteModal
          productId={id}
          showModals={showModal}
          close={closeModal}
        />
      </View>
    );
  })
) : (
  <View style={styles.container}>
    <Text>No products available</Text>
  </View>
)}

    </View>
  );
};

export default ProductPage;
