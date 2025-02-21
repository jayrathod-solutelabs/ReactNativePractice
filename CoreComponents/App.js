import { View, Text, Image , ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>

      <ImageBackground source={{uri : "https://picsum.photos/400"}} style={{ flex: 1, width: 400, height: 400 }}></ImageBackground>
      {/* <Image source={logoImg} style={{ flexheight: 400, width: 400 }}></Image> */}
    </View>
  );
}
