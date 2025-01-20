import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Image, Dimensions } from "react-native";

// Get screen width to set the grid item size
const screenWidth = Dimensions.get("window").width;

// Import images statically
const photos = [
  require("../assets/photo1.jpg"),
  require("../assets/photo2.jpg"),
  require("../assets/photo3.jpg"),
  require("../assets/photo4.jpg"),
  require("../assets/photo5.jpg"),
  require("../assets/photo6.jpg"),
  require("../assets/photo7.jpg"),
  require("../assets/photo8.jpg"),
  require("../assets/photo9.jpg"),
  require("../assets/photo10.jpg"),
  require("../assets/photo11.jpg"),
  require("../assets/photo12.jpg"),
  require("../assets/photo13.jpg"),
  require("../assets/photo14.jpg"),
  require("../assets/photo15.jpg"),
  require("../assets/photo16.jpg"),
  require("../assets/photo17.jpg"),
  require("../assets/photo18.jpg"),
  require("../assets/photo19.jpg"),
  require("../assets/photo20.jpg"),
  require("../assets/photo21.jpg"),
  require("../assets/photo22.jpg"),
  require("../assets/photo23.jpg"),
];

export default function Photos() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [shuffledPhotos, setShuffledPhotos] = useState(photos);

  // Shuffle function to randomize the photo array
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Update photos order on component mount
  useEffect(() => {
    setShuffledPhotos(shuffleArray(photos));
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Photos</Text>

      {/* FlatList for Grid Layout */}
      <FlatList
        data={shuffledPhotos}
        numColumns={3} // Grid style (3 items per row)
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer} onPress={() => openModal(item)}>
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />

      {/* Modal to view image in larger size */}
      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
            <Image source={selectedImage} style={styles.modalImage} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    flexGrow: 1,
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: screenWidth / 3 - 15, // Make the image fit the grid item
    height: screenWidth / 3 - 15, // Adjust size to create a square shape
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparent black overlay
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalImage: {
    width: screenWidth - 40, // Take up most of the screen width
    height: screenWidth - 40, // Adjust height to maintain aspect ratio
    borderRadius: 10,
  },
  closeText: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
