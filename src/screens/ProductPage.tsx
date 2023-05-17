import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStoreState } from 'easy-peasy';
import { styles } from '../styles';
import { MaterialIcons } from '@expo/vector-icons';

const ProductPage = () => {
  const todos = useStoreState((state: any) => state.products);

  console.log(todos);

  return (
    <View style={[styles.container, styles.productContainer]}>
      {todos?.map((each: any) => {
        const { name, price, image } = each;
        return (
          <View style={styles.productCol}>
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
                <TouchableOpacity style={styles.cardDelete}>
                  <MaterialIcons  size={24} color="#FEA51B" name="delete" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProductPage;
