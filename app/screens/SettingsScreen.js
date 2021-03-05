import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import useAuth from "../auth/useAuth";

import AppText from "../components/Text";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { Form, FormPicker as Picker, SubmitButton } from "../components/forms";
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
  const handleSettingSubmit = (values) => {
    console.log(values.Privacy.label);
    console.log(values.Color.label);
  };
  const deleteAccountValidationSchema = Yup.object().shape({
    Privacy: Yup.object().required().nullable().label("Privacy"),
    Color: Yup.object().required().nullable().label("Color"),
  });
  const handleDeleteAccountSubmit = (values) => {
    console.log(values);
  };
  const { user, logOut } = useAuth();
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
              Privacy: null,
              Color: null,
            }}
            onSubmit={handleDeleteAccountSubmit}
            validationSchema={deleteAccountValidationSchema}
          >
            <View style={styles.inputs}>
              <AppText style={styles.deleteHeader}>Delete Account</AppText>
              <AppText style={styles.pickerInfo}>
                Enter your email and password to permanentely delete your
                account
              </AppText>
            </View>
            <View style={styles.submitButton}>
              <SubmitButton title="Submit" color="danger" />
            </View>
          </Form>
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
});
export default SettingsScreen;
