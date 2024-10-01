import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const ModalComp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "lighblue", padding: 60 }}>
      <Button onPress={() => setIsModalVisible(true)} title="open modal" />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        presentationStyle="pageSheet"
      >
        <Text>Modal Header</Text>
        <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalComp;
