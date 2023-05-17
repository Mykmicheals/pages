import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useStoreActions } from 'easy-peasy';
import AddProductModal from '../modals/AddProductModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = useStoreActions((actions: any) => actions.addTodo);

  const selectImage = async () => {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

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
