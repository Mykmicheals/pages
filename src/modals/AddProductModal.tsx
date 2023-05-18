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
import ModalContainer from './ModalContainer';

const AddProductModal = ({ showModals, close }: any) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [err, setErr] = useState<null | string>(null);

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
    if (name.length < 2) {
      setErr('Invalid name');
    } else if (price == '') {
      setErr('Price must be set');
    } else if (selectedImage === null) {
      setErr('Image must be selected');
    } else {
        var product = {
      id: Date.now(),
      name: name,
      price: price,
      image: selectedImage,
    };
    addProduct(product);
    close();

    setName('');
    setSelectedImage(null);
    setPrice('');
    }
  };

  const closeModal = () => {
    close()
    setName('');
    setSelectedImage(null);
    setPrice('');
  }

  return (
    <ModalContainer showModals={showModals} onClose={closeModal}>
      <Text style={styles.modalHead}>Add Product</Text>
      {err && <Text style={styles.err}>{ err}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => {setName(text), setErr(null)}}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={(text) => {setPrice(text), setErr(null)}}
          keyboardType="numeric"
        />

        <Button title="Select Image" onPress={selectImage} />
      </View>
      <View>
        <TouchableOpacity onPress={submitHandler} style={styles.btnBlue}>
          <Text style={styles.textWhite}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ModalContainer>
  );
};

export default AddProductModal;
