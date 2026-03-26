import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Artifact Demo App 🚀</Text>
      <Text style={styles.text}>GitHub Actions Testing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  },
});

export default App;