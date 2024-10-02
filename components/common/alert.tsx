import React from "react";
import { Alert, Button, View } from "react-native";

const AlertComp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "lighblue", padding: 60 }}>
      <Button
        title="Alert 1"
        onPress={() => {
          Alert.alert("Invalid data!");
        }}
      />
      <Button
        title="Alert 2"
        onPress={() => {
          Alert.alert("Invalid data!", "DOB incorrect!");
        }}
      />
      <Button
        title="Alert 3"
        onPress={() => {
          Alert.alert("Invalid data!", "DOB incorrect!", [
            { text: "Cancel", onPress: () => console.log("Cancle Button") },
            { text: "Ok", onPress: () => console.log("Ok Button") },
          ]);
        }}
      />
    </View>
  );
};

export default AlertComp;
