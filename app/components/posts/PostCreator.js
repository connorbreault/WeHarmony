import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import { ErrorMessage, Form, FormField, SubmitButton } from "../forms";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";

function PostCreator({ icon, placeholder, Type, ...otherProps }) {
  const [error, setError] = useState();
  const handleSubmit = (Post) => {
    console.log(Post, Type);
  };
  // const handleSubmit = async (post, { resetForm }) => {
  //   setProgress(0);
  //   setUploadVisible(true);
  //   const result = await listingsApi.addListing(
  //     { ...listing, location },
  //     (progress) => setProgress(progress)
  //   );

  //   if (!result.ok) {
  //     setUploadVisible(false);
  //     return alert("Could not save the listing");
  //   }
  //   resetForm();
  // };
  const validationSchema = Yup.object().shape({
    Post: Yup.string().required().label("Post"),
  });
  return (
    <View style={[styles.container]}>
      <Form
        initialValues={{ Post: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCorrect={false}
          name="Post"
          placeholder={placeholder}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Submit" />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
});

export default PostCreator;
