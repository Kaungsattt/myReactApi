import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import {AsyncStorage} from 'react-native';



const HomePage = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
      if (!title || !category || description) {
        Alert.alert('Please fill the require fields')
      } else {
        //setItem with Aync
        const data = { title, category, description };
  
        try {
          const storeData = await AyncStorage.getItem('data');
          storeData = storeData ? JSON.parse(storeData) : [];
          console.log("Store Data is . . .",storeData);
  
          const updateStoreData = [storeData, data]
          await AsyncStorage.setItem('data', JSON.stringify(updateStoreData));
          setDataList(updatedData);
          console.log("Set Data list . .. ", setDataList);
          Alert.alert('Data is Saved');
          navigation.navigate("HomePage",{setDataList})
          
        }catch(error) {
          console.log("There is Error:" , error);
          
        }
      }
  };
  
  const handleSubmit = () => {
    loadData();
    //console.log("Blog Created:", { title, category, description });
    navigation.navigate("BlogPage");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../image/images (4).jpg")}  
        style={styles.imageBackground}
      >
        <View style={styles.formContainer}>
          <Text style={styles.header}>Create Blog</Text>

          {/* Blog Title */}
          <Text style={styles.label}>Blog Title:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter blog title..."
            placeholderTextColor="gray"
            value={title}
            onChangeText={setTitle}
          />

          {/* Blog Category */}
          <Text style={styles.label}>Blog Category:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter category..."
            placeholderTextColor="gray"
            value={category}
            onChangeText={setCategory}
          />

          {/* Blog Description */}
          <Text style={styles.label}>Blog Description:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter blog description..."
            placeholderTextColor="gray"
            value={description}
            onChangeText={setDescription}
            multiline
          />

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Create Blog</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(135, 184, 234, 0.8)", 
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  textArea: {
    height: 80, 
  },
  button: {
    backgroundColor: "rgba(27, 37, 46, 0.8)", 
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
