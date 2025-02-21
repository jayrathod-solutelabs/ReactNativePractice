import { View, Text } from "react-native";


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ height: 100, width: 100, backgroundColor: "blue" }}></View>
      <View style={{ height: 100, width: 100, backgroundColor: "green" }}>
      </View>
    </View>
  );
}
