import { View, Text, Image } from 'react-native';
import React from 'react';
import { useStoreState } from 'easy-peasy';
import { styles } from '../styles';

const ProductPage = () => {
  const todos = useStoreState((state: any) => state.products);

  console.log(todos);

  return (
    <View style={styles.container}>
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
              <View style={styles.cardBtn}>
                <Text>{name}</Text>
                <Text style={styles.price}>{price}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProductPage;
