import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ActivityIndicator, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [postList, setPostList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      setisLoading(true);
      const response = await fetch(`https://jsonplhjghjde.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data);
      setisLoading(false);
      setError("");
    } catch (error) {
      setError(error);
      setisLoading(false);
      setError(error);
    }

  }

 const addPost = async () => {
  setIsPosting(true);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    });
    const data = await response.json();
    setPostList([data, ...postList]);
    setPostTitle("");
    setPostBody("");
    setIsPosting(false);
    setError("");
  }catch (error) {
    setError(error);
  }
  
 }

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.LoadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message}</Text>
        </View>
      ) : (
        <>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? "Posting..." : "Add Post"}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              )}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
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
  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    paddingHorizontal: 16,
    margin :16

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  
    borderRadius: 8,
    marginBottom: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});
