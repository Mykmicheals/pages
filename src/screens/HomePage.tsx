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

  const submitHandler = async () => {
    var product = {
      name: name,
      price: price,
      image: selectedImage,
    };
    addProduct(product);
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.btnBlue}
      >
        <Text>Add Product</Text>
      </TouchableOpacity>


      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
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
              <TouchableOpacity
                onPress={() => setShowModal(true)}
                style={styles.btnBlue}
              >
                <Text onPress={submitHandler}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;
