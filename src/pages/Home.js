import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/me.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Shane Irish Yecyec</Text>
        <Text style={styles.tagline}>3rd Year IT Student</Text>
      </View>

      {/* Social Media Links */}
      <View style={styles.socialMedia}>
        <TouchableOpacity onPress={() => openLink("https://www.facebook.com/shaneyecyec.13")} style={styles.socialIcon}>
          <Icon name="facebook-square" size={40} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.instagram.com/irish.shaneeee/?hl=en")} style={styles.socialIcon}>
          <Icon name="instagram" size={40} color="#E1306C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://github.com/shaneirish02")} style={styles.socialIcon}>
          <Icon name="github" size={40} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.linkedin.com/in/shane-yecyec-664865256/")} style={styles.socialIcon}>
          <Icon name="linkedin-square" size={40} color="#0077B5" />
        </TouchableOpacity>
      </View>

      {/* Personal Details */}
      <View style={styles.detailsCard}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.detailText}>
          <Icon name="calendar" size={16} color="#447AC4" /> August 13, 2004
        </Text>
        <Text style={styles.detailText}>
          <Icon name="map-marker" size={16} color="#447AC4" /> Purok 3 Banuson, Gusa, CDO
        </Text>
        <Text style={styles.detailText}>
          <Icon name="phone" size={16} color="#447AC4" /> 09282216776
        </Text>
      </View>

      {/* Educational Background */}
      <View style={styles.educationCard}>
        <Text style={styles.sectionTitle}>Educational Background</Text>
        <Text style={styles.educationItem}>📚 Elementary: Gusa Elementary School</Text>
        <Text style={styles.educationItem}>📚 High School: East Gusa National High School</Text>
        <Text style={styles.educationItem}>📚 Senior High School: STI Cogon</Text>
        <Text style={styles.educationItem}>📚 College (Current): University of Science and Technology of Southern Philippines</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#447AC4",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333333",
  },
  tagline: {
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
  },
  socialMedia: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 30,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  detailsCard: {
    width: "90%",
    backgroundColor: "#F0F4FF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  educationCard: {
    width: "90%",
    backgroundColor: "#F0F4FF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 8,
  },
  educationItem: {
    fontSize: 16,
    color: "#333",
    marginVertical: 5,
  },
});
