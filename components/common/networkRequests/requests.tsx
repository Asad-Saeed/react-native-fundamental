import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const NetworkRequestComp = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <Text style={styles.bodyText}>{item?.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
          ListEmptyComponent={() => <Text>No Data Found!</Text>}
          ListHeaderComponent={() => (
            <Text style={styles.headerText}>Post List</Text>
          )}
          ListFooterComponent={() => (
            <Text style={styles.footerText}>End of list</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  text: { fontSize: 20 },
  headerText: { fontSize: 30, alignSelf: "center", marginBottom: 10 },
  footerText: { fontSize: 10, alignSelf: "center" },
});
export default NetworkRequestComp;
