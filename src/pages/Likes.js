import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Likes() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.title}>My Likes</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>K-pop</Text>
          <Text style={styles.description}>
            I’m a huge fan of girl groups like TWICE, IZNA, IVE, LE SSERAFIM, New Jeans, and ILLIT. 🎶💙
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Animal Lover</Text>
          <Text style={styles.description}>
            I’m a proud fur parent to 6 cats and 1 dog. 🐱🐶
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Hobbies & Interests</Text>
          <Text style={styles.description}>
            Coffee, music, Korean and Thai movies/series, badminton, cooking, and reading novels! ☕📖✈️
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Soft white background for the whole screen
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  section: {
    backgroundColor: "#ffffff", // White background for each section
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333", // Dark text color for title
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#333333", // Dark text color for subtitles
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333333", // Dark text color for description
    lineHeight: 24,
    textAlign: "left",
  },
});
