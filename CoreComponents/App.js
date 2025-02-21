import { View, Text, Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
     <Button title="Click Here" onPress={() => console.log("Button Pressed")}/>
    </View>
  );
}
