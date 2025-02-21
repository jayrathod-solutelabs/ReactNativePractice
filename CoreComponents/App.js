
import { View, Button, Alert, ActivityIndicator, Text } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");


export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
      <ActivityIndicator size="large" color="green" />
      <Button title="Click Here" onPress={() => Alert.alert("Invalid Data", "Please enter valid data", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed")
        }
      ])} /> 
    </View>

  );
}
