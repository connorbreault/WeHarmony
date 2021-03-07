import React, { useState } from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

import AppText from "../Text";
import Button from "../Button";
import Icon from "../Icon";
import ListItem from "../lists/ListItem";
import { ScrollView } from "react-native-gesture-handler";

function AboutUs(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ListItem
        title="About Us"
        IconComponent={<Icon name="music-note" backgroundColor={colors.dark} />}
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
                <AppText style={styles.header}>About</AppText>
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
                <AppText style={styles.modalText}>
                  Fed up with social media's algorithms cutting the platform for
                  local musicians, WeHarmony was created to be a genuine tool
                  for musicians to market their music and get in touch with
                  other local musicians.
                </AppText>
                <AppText style={styles.modalText}>
                  But why stop at musicians?
                </AppText>
                <AppText style={styles.modalText}>
                  Many different kinds of talent make the music industry move,
                  and it is equally as important for everyone involved to have a
                  place to showcase their work and link up with potential
                  clients.
                </AppText>
                <View style={styles.developerContainer}>
                  <AppText style={styles.developerHeader}>
                    Meet the developer
                  </AppText>
                  <Image
                    style={styles.image}
                    tint="light"
                    source={require("../../assets/profilePic.jpeg")}
                  />
                </View>
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
    fontSize: 40,
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
export default AboutUs;
