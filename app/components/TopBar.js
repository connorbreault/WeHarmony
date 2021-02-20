import React, { useState } from "react";
import {
  View,
  FlatList,
  Platform,
  StyleSheet,
  Image,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import NotificationsButton from "./NotificationsButton";
import NotificationCard from "./NotificationCard";
import MessageCard from "./MessageCard";

const notifications = [
  {
    notification: "liked your post",
    notificationId: 1,
    userId: 1,
    userName: "Mosh Handemi",
    time: "2:30pm 12/25/20",
  },
  {
    notification: "liked your post",
    notificationId: 2,
    userId: 1,
    userName: "Conboy",
    time: "2:45pm 12/25/20",
  },
  {
    notification: "commented on your post",
    notificationId: 3,
    userId: 2,
    userName: "Bilbo Swaggins",
    time: "3:00pm 12/25/20",
  },
  {
    notification: "tagged you",
    notificationId: 4,
    userId: 1,
    userName: "Ass Eater Extrodinare",
    time: "3:15pm 12/25/20",
  },
  {
    notification: "tagged you",
    notificationId: 5,
    userId: 1,
    userName: "Ass Eater Extrodinare",
    time: "3:40pm 12/25/20",
  },
  {
    notification: "tagged you",
    notificationId: 6,
    userId: 1,
    userName: "Ass Eater Extrodinare",
    time: "3:40pm 12/25/20",
  },
];
const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 5,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 6,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 7,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
];

function TopBar(props) {
  const [modalNotificationVisible, setNotificationModalVisible] = useState(
    false
  );
  const [modalMessageVisible, setMessageModalVisible] = useState(false);

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <View style={styles.container}>
      {/* Messages Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMessageVisible}
        onRequestClose={() => {
          setMessageModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setMessageModalVisible(!modalMessageVisible);
                }}
              >
                <Icon
                  name="window-close"
                  backgroundColor={colors.medium}
                  size={40}
                />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Messages</Text>
            </View>
            <FlatList
              style={styles.list}
              data={messages}
              keyExtractor={(message) => message.id.toString()}
              renderItem={({ item }) => (
                <MessageCard
                  title={item.title}
                  subTitle={item.description}
                  image={item.image}
                  onPress={() => console.log(item)}
                  renderRightActions={() => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                  )}
                />
              )}
              ItemSeparatorComponent={ListItemSeparator}
              refreshing={refreshing}
              onRefresh={() => {
                setMessages([
                  {
                    id: 2,
                    title: "T2",
                    description: "D2",
                    image: require("../assets/mosh.jpg"),
                  },
                ]);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                console.log("about");
              }}
            >
              <Text style={styles.aboutUs}>About WeHarmony</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Notifications Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalNotificationVisible}
        onRequestClose={() => {
          setNotificationModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setNotificationModalVisible(!modalNotificationVisible);
                }}
              >
                <Icon
                  name="window-close"
                  backgroundColor={colors.medium}
                  size={40}
                />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Notifications</Text>
            </View>
            <FlatList
              style={styles.list}
              data={notifications}
              keyExtractor={(notification) =>
                notification.notificationId.toString()
              }
              renderItem={({ item }) => (
                <NotificationCard
                  userName={item.userName}
                  notification={item.notification}
                  time={item.time}
                  onPress={() => console.log(item)}
                />
              )}
            />
            <TouchableOpacity
              onPress={() => {
                console.log("about");
              }}
            >
              <Text style={styles.aboutUs}>About WeHarmony</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Main Topbar */}

      {/* Message Button */}
      <TouchableOpacity
        styles={styles.notifications}
        onPress={() => {
          setMessageModalVisible(true);
        }}
      >
        <Icon name="message" backgroundColor={colors.primary} size={50} />
      </TouchableOpacity>

      <Image style={styles.logo} source={require("../assets/textLogo.png")} />

      {/* Notifications Button */}
      <TouchableOpacity
        styles={styles.notifications}
        onPress={() => {
          setNotificationModalVisible(true);
        }}
      >
        <NotificationsButton />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutUs: {
    textAlign: "center",
    marginTop: 10,
    color: colors.medium,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "700",
    fontStyle: "italic",
    textDecorationLine: "underline",
    textDecorationColor: colors.primary,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logo: {
    width: "50%",
    height: "100%",
    opacity: 0.9,
  },
  list: {
    height: Platform.OS === " android" ? "50%" : "80%",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalTitle: {
    fontSize: 30,
    color: colors.primary,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    height: "90%",
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default TopBar;
