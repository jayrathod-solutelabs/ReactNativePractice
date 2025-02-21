import { View, Text, Image } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 30 }}>
      <Image source={logoImg} style={{ flexheight: 400, width: 400 }}></Image>
      <View style={{ height: 100, width: 100, backgroundColor: "blue" }}></View>
    </View>
  );
}
