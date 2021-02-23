import React, { Children } from "react";
import { View, StyleSheet, Modal } from "react-native";

function appModal({ children, animationType = "slide" }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType={animationType}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{{ children }}</View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default appModal;
