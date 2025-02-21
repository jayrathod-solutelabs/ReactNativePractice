
import { View, Button, Alert, ActivityIndicator, Text } from "react-native";
import Greet from "./components/Greet";


export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
      <Greet name="John" />
    </View>

  );
}
