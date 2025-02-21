import { useState } from "react";
import { View, Text, Button, Image, Pressable, Modal } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
      <Button title="Click Here" onPress={() => setIsModalVisible(true)} />
      <Modal visible={isModalVisible} onPress={() => setIsModalVisible(false)}>
        <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>

  );
}
