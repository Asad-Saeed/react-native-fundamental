import React from "react";
import { ActivityIndicator, View } from "react-native";

const ActivityIndicatorComp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" />
      <ActivityIndicator color="midnightblue" size="large" />
      <ActivityIndicator size="large" animating={false} />
    </View>
  );
};

export default ActivityIndicatorComp;
