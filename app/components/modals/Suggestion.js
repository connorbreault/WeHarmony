import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";

import colors from "../../config/colors";

import AppText from "../Text";
import Button from "../Button";
import Icon from "../Icon";
import ListItem from "../lists/ListItem";
import { ScrollView } from "react-native-gesture-handler";

function Suggestion(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button
        title="Contact Me"
        color="medium"
        onPress={() => setModalVisible(!modalVisible)}
      />
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
              <View style={styles.headerContainer}>
                <AppText style={styles.header}>Suggestions:</AppText>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Icon
                    name="window-close"
                    backgroundColor={colors.primary}
                    size={50}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scrollView}>
                <View style={styles.separator} />
                <Button
                  title="Send"
                  color="primary"
                  onPress={() => console.log("Send")}
                />
              </ScrollView>
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
    maxHeight: "80%",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    fontSize: 35,
    width: "100%",
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "italic",
  },
  scrollView: {
    marginVertical: 10,
  },
  developerContainer: {
    alignItems: "center",
  },
  developerHeader: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "italic",
    textAlign: "center",
  },
  secondaryHeader: {
    color: colors.dark,
    fontSize: 25,
    fontWeight: "500",
    fontStyle: "italic",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  textItem: {
    textAlign: "center",
    margin: 0,
    color: colors.medium,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "700",
    fontStyle: "italic",
    textDecorationLine: "underline",
    textDecorationColor: colors.primary,
  },
  separator: {
    height: 1,
    backgroundColor: colors.medium,
    margin: 20,
  },
});
export default Suggestion;
