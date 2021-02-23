import React, { useState } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";

import colors from "../../config/colors";
import Button from "../Button";

function EditProfileButton(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button title="Edit Profile" onPress={() => setModalVisible(true)} />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Edit Profile</Text>
              <Button
                title="A Button"
                onPress={() => console.log("Something")}
                style={styles.logOut}
              />
              <Button
                backgroundColor={colors.light}
                color="medium"
                title="Close"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalText: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  logOut: {
    width: "100%",
  },
});
export default EditProfileButton;
