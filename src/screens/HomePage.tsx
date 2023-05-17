import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");

  const handleSave = () => {
    // Do something with the input values here
    console.log(`Name: ${name}, Price: ${price}, Product: ${product}`);

    // Reset the input values
    setName("");
    setPrice("");
    setProduct("");

    // Close the modal
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
        visible={true}
        onRequestClose={() => {
          alert("Modal has been closed.");
          // Handle modal close here
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Add Product</Text>
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
              <TextInput
                style={styles.input}
                placeholder="Product"
                value={product}
                onChangeText={(text) => setProduct(text)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;
