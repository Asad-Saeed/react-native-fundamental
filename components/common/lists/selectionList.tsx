import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { groupedData } from "./data";

const SelectionListComp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Section List */}
      <SectionList
        sections={groupedData}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.type}</Text>
        )}
        // keyExtractor={(item) => item.id.toString()}
        // ListEmptyComponent={() => (
        //   <Text style={styles.noRecord}>No Item Found</Text>
        // )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Pokemon Group List</Text>
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
  header: {
    backgroundColor: "#ffffff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 5,
  },
  footer: { fontSize: 24, textAlign: "center", marginTop: 12 },
  noRecord: {
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
});
export default SelectionListComp;
