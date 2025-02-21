
import { View, Text, StyleSheet } from "react-native";


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hello</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'red',
    fontSize: 30
  }
});
