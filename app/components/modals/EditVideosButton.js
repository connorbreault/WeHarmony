import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";

import colors from "../../config/colors";
import Icon from "../Icon";
import AppText from "../Text";
import Button from "../Button";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
  FormPicker as Picker,
} from "../forms";

function EditVideosButton(props) {
  const validationSchema = Yup.object().shape({
    video1: Yup.string().required().label("videoOne"),
    video2: Yup.object().nullable().label("video2"),
    video3: Yup.object().nullable().label("video3"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };

  const { user, logOut } = useAuth();
  const userLinks = user.links;
  useEffect(() => {
    console.log(userLinks);
  }, []);
  const [error, setError] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon FAname="cog" backgroundColor={colors.primary} />
      </TouchableOpacity>
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
            <ScrollView>
              <Text style={styles.modalText}>Change Videos</Text>
              <View style={styles.separator} />
              <Form
                initialValues={{
                  video1: "",
                  video2: "",
                  video3: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <Text style={styles.header}>Paste links here:</Text>
                <ErrorMessage error={error} visible={error} />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="video"
                  name="video1"
                  placeholder="Video 1"
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="video"
                  name="video2"
                  placeholder="Video 2"
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="video"
                  name="video3"
                  placeholder="Video 3"
                />
                <View style={styles.separator} />
                <SubmitButton
                  title="Submit"
                  //   onPress={() => console.log("Something")}
                />
                <Button
                  backgroundColor={colors.light}
                  color="dark"
                  title="Cancel"
                  onPress={() => setModalVisible(false)}
                />
              </Form>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  detailHeader: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginBottom: 15,
  },
  header: {
    color: colors.primary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
  separator: {
    height: 1,
    backgroundColor: colors.medium,
    margin: 20,
  },
  userPic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
export default EditVideosButton;
