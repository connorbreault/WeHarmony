import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import * as Yup from "yup";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GoogleAutoComplete } from "react-native-google-autocomplete";

import API_KEY from "../../../key";
import colors from "../../config/colors";
import useAuth from "../../auth/useAuth";
import searchParams from "../../config/searchParams";
import users from "../../api/users";

import AppText from "../Text";
import Button from "../Button";
import CategoryPickerItem from "../CategoryPickerItem";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
  FormPicker as Picker,
} from "../forms";
import LocationItem from "../LocationItem";
import Icon from "../Icon";

function EditProfileButton(props) {
  const { user, logOut } = useAuth();
  const [error, setError] = useState();

  const [details, fetchDetails] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    instruments: Yup.object().nullable().label("Instruments"),
  });
  const emailValidationSchema = Yup.object().shape({
    oldEmail: Yup.string().required().min(4).label("oldEmail"),
    newEmail: Yup.string().required().min(4).label("newEmail"),
    confirmNewEmail: Yup.string().required().min(4).label("confirmNewEmail"),
  });
  const passwordValidationSchema = Yup.object().shape({
    oldPassword: Yup.string().required().min(4).label("oldPassword"),
    newPassword: Yup.string().required().min(4).label("newPassword"),
    confirmNewPassword: Yup.string()
      .required()
      .min(4)
      .label("confirmNewPassword"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  const handleEmailSubmit = (values) => {
    console.log(values);
  };
  const handlePasswordSubmit = (values) => {
    console.log(values);
  };

  const changeLocation = () => {
    setMainModalVisible(false);
    setLocationModalVisible(true);
  };

  const openEmailModal = () => {
    setMainModalVisible(false);
    setEmailModalVisible(true);
  };
  const closeEmailModal = () => {
    setEmailModalVisible(false);
    setMainModalVisible(true);
  };

  const openPasswordModal = () => {
    setMainModalVisible(false);
    setPasswordModalVisible(true);
  };
  const closePasswordModal = () => {
    setPasswordModalVisible(false);
    setMainModalVisible(true);
  };

  // const handleSubmit = async (userInfo) => {
  //   const result = await registerApi.request(userInfo);

  //   if (!result.ok) {
  //     if (result.data) setError(result.data.error);
  //     else {
  //       setError("An unexpected error occurred.");
  //       console.log(result);
  //     }
  //     return;
  //   }

  //   const { data: authToken } = await loginApi.request(
  //     userInfo.email,
  //     userInfo.password
  //   );
  //   auth.logIn(authToken);
  // };
  return (
    <>
      <Button title="Edit Profile" onPress={() => setMainModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={mainModalVisible}
        onRequestClose={() => {
          setMainModalVisible(!mainModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView styles={styles.scrollView}>
              <Text style={styles.modalText}>Edit Profile</Text>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => console.log("profilePic")}
              >
                <Image
                  source={{
                    uri: user.profilePic,
                  }}
                  style={styles.userPic}
                />
                <Text style={styles.imageText}>Click to change</Text>
              </TouchableOpacity>
              <View style={styles.separator} />

              <Text style={styles.detailHeader}>Your Details:</Text>
              <Form
                initialValues={{
                  name: user.name,
                  Instruments: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <ErrorMessage error={error} visible={error} />
                <Text style={styles.header}>Your Name:</Text>
                <FormField
                  autoCorrect={false}
                  icon="account"
                  name="name"
                  placeholder="Name"
                />
                <Text style={styles.header}>Your current talents:</Text>
                <View style={styles.instrumentsContainer}>
                  {user.instruments.map((item) => {
                    return (
                      <Text key={item.key} style={styles.instrument}>
                        {item.instrument}
                      </Text>
                    );
                  })}
                </View>
                <Picker
                  items={searchParams.Categories}
                  name="instruments"
                  numberOfColumns={3}
                  PickerItemComponent={CategoryPickerItem}
                  placeholder="Add New Talent"
                />
                <View style={styles.separator} />
                <Text style={styles.header}>Your Location:</Text>
                <AppText style={styles.userLocation}>{user.location}</AppText>
                <Button
                  onPress={() => changeLocation()}
                  title="Change"
                  color="medium"
                />
                <View style={styles.separator} />
                <SubmitButton
                  title="Save"
                  onPress={() => console.log("Something")}
                />
                <Button
                  backgroundColor={colors.light}
                  color="medium"
                  title="Change Email"
                  onPress={() => openEmailModal()}
                />
                <Button
                  backgroundColor={colors.light}
                  color="medium"
                  title="Change Password"
                  onPress={() => openPasswordModal()}
                />
                <Button
                  backgroundColor={colors.light}
                  color="dark"
                  title="Close"
                  onPress={() => setMainModalVisible(!mainModalVisible)}
                />
              </Form>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={emailModalVisible}
        onRequestClose={() => {
          setEmailModalVisible(!emailModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>Change Email</Text>
              <View style={styles.separator} />

              <Text style={styles.detailHeader}>Current Email:</Text>
              <Text>{user.email}</Text>
              <Form
                initialValues={{
                  oldEmail: "",
                  newEmail: "",
                  confirmNewEmail: "",
                }}
                onSubmit={handleEmailSubmit}
                validationSchema={emailValidationSchema}
              >
                <Text style={styles.header}>Enter new email:</Text>
                <ErrorMessage error={error} visible={error} />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  name="oldEmail"
                  placeholder="Old Email"
                  textContentType="emailAddress"
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  name="newEmail"
                  placeholder="New Email"
                  textContentType="emailAddress"
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  name="confirmNewEmail"
                  placeholder="Confirm Email"
                  textContentType="emailAddress"
                />
                <View style={styles.separator} />
                <SubmitButton
                  title="Submit"
                  onPress={() => console.log("Something")}
                />
                <Button
                  backgroundColor={colors.light}
                  color="dark"
                  title="Cancel"
                  onPress={() => closeEmailModal()}
                />
              </Form>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={passwordModalVisible}
        onRequestClose={() => {
          setPasswordModalVisible(!passwordModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalText}>Change Password</Text>
              <View style={styles.separator} />
              <Form
                initialValues={{
                  oldPassword: "",
                  newPassword: "",
                  confirmNewPassword: "",
                }}
                onSubmit={handlePasswordSubmit}
                validationSchema={passwordValidationSchema}
              >
                <Text style={styles.header}>Enter new email:</Text>
                <ErrorMessage error={error} visible={error} />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  keyboardType="email-address"
                  name="oldPassword"
                  placeholder="Old Password"
                  textContentType="emailAddress"
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  keyboardType="email-address"
                  name="newPassword"
                  placeholder="New Password"
                  textContentType="emailAddress"
                />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  keyboardType="email-address"
                  name="confirmNewPassword"
                  placeholder="Confirm Password"
                  textContentType="emailAddress"
                />
                <View style={styles.separator} />
                <SubmitButton
                  title="Submit"
                  onPress={() => console.log("Something")}
                />
                <Button
                  backgroundColor={colors.light}
                  color="dark"
                  title="Cancel"
                  onPress={() => closePasswordModal()}
                />
              </Form>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={locationModalVisible}
        onRequestClose={() => {
          setLocationModalVisible(!locationModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Change Location</Text>
            <AppText>Your current location is</AppText>
            <AppText>{user.location}</AppText>
            <GoogleAutoComplete
              apiKey={API_KEY.API_KEY}
              debounce={500}
              minLength={3}
            >
              {({
                handleTextChange,
                locationResults,
                fetchDetails,
                isSearching,
                inputValue,
                clearSearch,
              }) => (
                <>
                  {console.log("LocationResults", locationResults)}
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Search a city"
                      onChangeText={handleTextChange}
                      value={inputValue}
                    />
                    <TouchableOpacity onPress={clearSearch}>
                      <Icon
                        name="close"
                        backgroundColor={colors.medium}
                        size={35}
                      />
                    </TouchableOpacity>
                  </View>
                  {isSearching && (
                    <ActivityIndicator size="large" color={colors.primary} />
                  )}
                  <ScrollView>
                    {locationResults.map((el) => (
                      <LocationItem
                        {...el}
                        key={el.place_id}
                        fetchDetails={fetchDetails}
                      />
                    ))}
                  </ScrollView>
                </>
              )}
            </GoogleAutoComplete>
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
  imageContainer: {
    alignItems: "center",
  },
  imageText: {
    color: colors.primary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 15,
    fontWeight: "800",
  },
  instrument: {
    fontSize: 20,
  },
  instrumentsContainer: {
    paddingLeft: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
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
  userLocation: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
  },
  textInput: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.primary,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default EditProfileButton;
