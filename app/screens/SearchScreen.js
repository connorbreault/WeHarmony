import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
} from "react-native";
import * as Yup from "yup";
import Constants from "expo-constants";

import { Form, FormPicker as Picker, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
import AppText from "../components/Text";

const Categories = [
  {
    backgroundColor: colors.primary,
    FAicon: "guitar",
    label: "Guitar",
    value: 1,
  },
  {
    backgroundColor: colors.medium,
    icon: "guitar-electric",
    label: "Bass",
    value: 2,
  },
  {
    backgroundColor: colors.dark,
    FAicon: "drum",
    label: "Drums",
    value: 3,
  },
  {
    backgroundColor: colors.primary,
    FAicon: "microphone-alt",
    label: "Vocals",
    value: 4,
  },
  {
    backgroundColor: colors.medium,
    icon: "piano",
    label: "Piano",
    value: 5,
  },
  {
    backgroundColor: colors.dark,
    icon: "violin",
    label: "Violin",
    value: 6,
  },
  {
    backgroundColor: colors.primary,
    FAicon: "camera-retro",
    label: "Photo",
    value: 7,
  },
  {
    backgroundColor: colors.medium,
    FAicon: "video",
    label: "Video",
    value: 8,
  },
  {
    backgroundColor: colors.dark,
    FAicon: "headphones",
    label: "Producer",
    value: 9,
  },
  {
    backgroundColor: colors.primary,
    FAicon: "paint-brush",
    label: "Art Work",
    value: 10,
  },
  {
    backgroundColor: colors.medium,
    FAicon: "play-circle",
    label: "Content Creators",
    value: 11,
  },
  {
    backgroundColor: colors.dark,
    FAicon: "question",
    label: "Other",
    value: 12,
  },
];
const Genres = [
  {
    backgroundColor: colors.primary,
    icon: "all-inclusive",
    label: "Any",
    value: 1,
  },
  {
    backgroundColor: colors.medium,
    icon: "saxophone",
    label: "Blues",
    value: 2,
  },
  {
    backgroundColor: colors.dark,
    icon: "music-accidental-natural",
    label: "Jazz",
    value: 3,
  },
  {
    backgroundColor: colors.primary,
    icon: "skull",
    label: "Metal",
    value: 4,
  },
  {
    backgroundColor: colors.medium,
    icon: "guitar-pick",
    label: "Rock",
    value: 5,
  },
  {
    backgroundColor: colors.dark,
    icon: "piano",
    label: "Indie",
    value: 6,
  },
  {
    backgroundColor: colors.primary,
    icon: "music-clef-treble",
    label: "Alternative",
    value: 7,
  },
  {
    backgroundColor: colors.medium,
    icon: "laptop-mac",
    label: "Electronic",
    value: 8,
  },
  {
    backgroundColor: colors.dark,
    FAicon: "guitar",
    label: "Country",
    value: 9,
  },
  {
    backgroundColor: colors.primary,
    icon: "guitar-acoustic",
    label: "Bluegrass",
    value: 10,
  },
  {
    backgroundColor: colors.medium,
    FAicon: "music",
    label: "Classical",
    value: 10,
  },
];
const SearchLocation = [
  {
    backgroundColor: colors.primary,
    icon: "navigation",
    label: "Local",
    value: 1,
  },
  {
    backgroundColor: colors.medium,
    FAicon: "globe",
    label: "Global",
    value: 2,
  },
];

function SearchScreen() {
  const location = useLocation();

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const validationSchema = Yup.object().shape({
    Category: Yup.object().required().nullable().label("Category"),
    Genre: Yup.object().required().nullable().label("Genre"),
    SearchLocation: Yup.object().required().nullable().label("Location"),
  });

  const handleSubmit = (search) => {
    if (search.SearchLocation.value === 1) {
      console.log(search.Category.label, search.Genre.label, "local");
    } else {
      console.log(search.Category.label, search.Genre.label, "global");
    }
  };

  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-orange.png")}
        />
      </View>
      <Form
        initialValues={{
          Category: null,
          Genre: null,
          SearchLocation: null,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppText style={styles.header}>Who are you looking for?</AppText>
        <View style={styles.inputs}>
          <Picker
            items={Categories}
            name="Category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="80%"
          />
          <Picker
            items={Genres}
            name="Genre"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Genre"
            width="80%"
          />
          <Picker
            items={SearchLocation}
            name="SearchLocation"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Location"
            width="80%"
          />
        </View>
        <View style={styles.submitButton}>
          <SubmitButton title="Search" color="medium" />
        </View>
      </Form>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "700",
  },
  inputs: {
    marginVertical: 10,
  },
  logo: {
    width: 155,
    height: 155,
    opacity: 0.8,
  },
  logoContainer: {
    position: "absolute",
    top: Constants.statusBarHeight,
    alignItems: "center",
  },
  submitButton: {
    width: "70%",
  },
  tagline: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default SearchScreen;
