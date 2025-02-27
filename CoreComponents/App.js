import { StyleSheet, View } from "react-native";
import Box from "./components/box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f", alignself: "auto" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 40,
    gap: 20,


    // alignContent : "space-between",

    // flexDirection: "row",
    // height:300,
    // flexWrap: "wrap-reverse",
    
    // flexDirection: "column",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
