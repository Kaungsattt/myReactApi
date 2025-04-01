import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  // Load blogs from AsyncStorage
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const storedBlogs = await AsyncStorage.getItem("blogs");
        if (storedBlogs) {
          setBlogs(JSON.parse(storedBlogs));
        }
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    loadBlogs();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📖 Blog Posts</Text>

      {blogs.length === 0 ? (
        <Text style={styles.noBlogs}>No Blogs Found. Create One!</Text>
      ) : (
        <FlatList
          data={blogs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.blogItem}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text style={styles.blogCategory}>Category: {item.category}</Text>
              <Text style={styles.blogDescription}>{item.description}</Text>
            </View>
          )}
        />
      )}

      {/* Button to Navigate Back to HomePage */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.backButtonText}>⬅ Back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BlogPage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  noBlogs: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
  },
  blogItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  blogCategory: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  blogDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: "red",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});