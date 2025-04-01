import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/navigation';

export default function App() {
  return (
    //<View style={styles.container}>
    //  <Text>My Api React !</Text>
    //  <StatusBar style="auto" />
    // 
    //
    //</View>

  <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
