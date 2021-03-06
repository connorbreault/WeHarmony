import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";

import AppText from "../components/Text";
import Button from "../components/Button";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  ErrorMessage,
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

function SettingsScreen({ navigation }) {
  const Privacy = [
    {
      backgroundColor: colors.primary,
      FAicon: "globe",
      label: "Public",
      value: 1,
    },
    {
      backgroundColor: colors.medium,
      FAicon: "lock",
      label: "Private",
      value: 2,
    },
  ];
  const Color = [
    {
      backgroundColor: colors.primary,
      icon: "weather-sunny",
      label: "Light",
      value: 1,
    },
    {
      backgroundColor: colors.medium,
      FAicon: "moon",
      label: "Dark",
      value: 2,
    },
  ];

  const settingValidationSchema = Yup.object().shape({
    Privacy: Yup.object().required().nullable().label("Privacy"),
    Color: Yup.object().required().nullable().label("Color"),
  });
  const initialDeleteValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(4).label("password"),
  });
  const modalDeleteValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(4).label("password"),
  });

  const handleSettingSubmit = (values) => {
    console.log(values.Privacy.label);
    console.log(values.Color.label);
  };
  const handleInitialDeleteSubmit = async ({ email, password }) => {
    console.log(email);
    console.log(password);
    if (email === user.email) {
      setDeleteModalVisible(!deleteModalVisible);
    } else setInitialDeleteError(!initialDeleteError);
  };
  const handleModalDeleteSubmit = ({ email, password }) => {
    if (email === user.email) {
      setDeleteModalVisible(!deleteModalVisible);
      setAccountDeletedModalVisible(!accountDeletedModalVisible);
    } else setModalDeleteError(!modalDeleteError);
  };

  const { user, logOut } = useAuth();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [accountDeletedModalVisible, setAccountDeletedModalVisible] = useState(
    false
  );

  const [initialDeleteError, setInitialDeleteError] = useState();
  const [modalDeleteError, setModalDeleteError] = useState();
  return (
    <>
      <Screen style={styles.screen}>
        <View style={styles.headerContainer}>
          <AppText style={styles.header}>Settings</AppText>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <Icon
              name="window-close"
              backgroundColor={colors.primary}
              size={50}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.settingsContainer}>
          <View style={styles.separator} />
          <Form
            initialValues={{
              Privacy: null,
              Color: null,
            }}
            onSubmit={handleSettingSubmit}
            validationSchema={settingValidationSchema}
          >
            <View style={styles.inputs}>
              <AppText style={styles.pickerHeader}>Privacy</AppText>
              <AppText style={styles.pickerInfo}>
                Change this setting to make your account hidden
              </AppText>
              <Picker
                items={Privacy}
                name="Privacy"
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Privacy"
              />
              <AppText style={styles.pickerHeader}>Color Mode</AppText>
              <AppText style={styles.pickerInfo}>
                Change this setting to change the color of this app
              </AppText>
              <Picker
                items={Color}
                name="Color"
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Color"
              />
            </View>
            <View style={styles.submitButton}>
              <SubmitButton title="Save" color="primary" />
            </View>
          </Form>
          <View style={styles.separator} />
          <Form
            initialValues={{
              email: null,
              password: null,
            }}
            onSubmit={handleInitialDeleteSubmit}
            validationSchema={initialDeleteValidationSchema}
          >
            <View style={styles.inputs}>
              <AppText style={styles.deleteHeader}>Delete Account</AppText>
              <AppText style={styles.pickerInfo}>
                Enter your email and password to permanentely delete your
                account
              </AppText>
            </View>
            <ErrorMessage
              error="Invalid email and/or password"
              visible={initialDeleteError}
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              name="email"
              placeholder="Email"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <View style={styles.submitButton}>
              <SubmitButton title="Delete account" color="danger" />
            </View>
          </Form>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={deleteModalVisible}
              onRequestClose={() => {
                setDeleteModalVisible(!deleteModalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <AppText style={styles.modalTextDanger}>
                    This will permanently delete your account
                  </AppText>
                  <Form
                    initialValues={{
                      email: null,
                      password: null,
                    }}
                    onSubmit={handleModalDeleteSubmit}
                    validationSchema={modalDeleteValidationSchema}
                  >
                    <View style={styles.inputs}>
                      <AppText style={styles.pickerInfo}>
                        Re-Enter your email and password to permanentely delete
                        your account
                      </AppText>
                    </View>
                    <ErrorMessage
                      error="Invalid email and/or password"
                      visible={modalDeleteError}
                    />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="account"
                      name="email"
                      placeholder="Email"
                    />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="lock"
                      name="password"
                      placeholder="Password"
                      secureTextEntry
                      textContentType="password"
                    />
                    <View style={styles.submitButton}>
                      <SubmitButton title="Delete account" color="danger" />
                    </View>
                  </Form>
                  <TouchableOpacity>
                    <Button
                      title="Cancel"
                      onPress={() => setDeleteModalVisible(!deleteModalVisible)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={accountDeletedModalVisible}
              onRequestClose={() => {
                setAccountDeletedModalVisible(!accountDeletedModalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <AppText style={styles.modalTextDanger}>
                    Account deleted
                  </AppText>
                  <AppText style={styles.pickerInfo}>
                    We're sad to see you go :(
                  </AppText>
                  <TouchableOpacity>
                    <Button title="Okay" onPress={() => logOut()} />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
  },
  header: {
    fontSize: 40,
    fontWeight: "600",
    fontStyle: "italic",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    fontSize: 35,
  },
  settingsContainer: {
    margin: 20,
  },
  separator: {
    height: 1,
    backgroundColor: colors.medium,
    margin: 25,
  },
  pickerHeader: {
    fontSize: 35,
    textAlign: "center",
    color: colors.primary,
  },
  deleteHeader: {
    fontSize: 35,
    textAlign: "center",
    color: colors.danger,
  },
  pickerInfo: {
    marginVertical: 10,
    textAlign: "center",
  },
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
  modalTextDanger: {
    color: colors.danger,
    fontSize: 30,
    marginBottom: 15,
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default SettingsScreen;
