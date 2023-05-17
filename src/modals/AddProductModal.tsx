import React, { useState } from 'react';
import { styles } from '../styles';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Image,
} from 'react-native';
import { useStoreActions } from 'easy-peasy';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const AddProductModal = ({ showModals, close }: any) => {
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

  const submitHandler = async () => {
    var product = {
      name: name,
      price: price,
      image: selectedImage,
    };
    addProduct(product);
      close();
      
      setName('')
      setSelectedImage(null)
      setPrice('')
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModals}
      onRequestClose={close}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={close}>
            <AntDesign name="close" size={24} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.modalHead}>Add Product</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={price}
              onChangeText={(text) => setPrice(text)}
              keyboardType="numeric"
            />

            <Button title="Select Image" onPress={selectImage} />
          </View>
          <View>
            <TouchableOpacity onPress={submitHandler} style={styles.btnBlue}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddProductModal;
