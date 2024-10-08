import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { pokamon } from "./data";

const FlatListComp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Simple List way but it show all items even if not in view port */}
      {/* <ScrollView style={styles.scollView}>
        {pokamon?.map((item, index) => {
            console.log("item",item?.name);
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Type: {item.type}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* Flat List just show item in view port only */}
      <FlatList
        style={styles.scollView}
        data={pokamon || []}
        renderItem={({ item, index }) => {
          console.log("item", item?.name);
          return (
            <View key={index} style={styles.card}>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Type: {item.type}</Text>
            </View>
          );
        }}
        // horizontal
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={() => (
          <Text style={styles.noRecord}>No Item Found</Text>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Pokemon List</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footer}>No more data!</Text>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  text: { fontSize: 30 },
  scollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  header: { fontSize: 24, textAlign: "center", marginBottom: 12 },
  footer: { fontSize: 24, textAlign: "center", marginTop: 12 },
  noRecord: {
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
});
export default FlatListComp;
