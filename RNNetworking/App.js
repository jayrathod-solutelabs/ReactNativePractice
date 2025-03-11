import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [postList, setPostList] = useState([]);

const fetchData = async(limit = 10) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
  const data = await response.json();
  setPostList(data);

}

useEffect(() => {
  fetchData();
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
  },
});
