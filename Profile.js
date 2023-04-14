import React, { Component } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Perfil</Text>
      </View>
    );
  }
}

toggleSwitch();
{
  const previous_state = this.state.isEnabled;
  const theme = !this.state.isEnabled ? "dark" : "light";
  var updates = {};
  updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"] =
    theme;
  firebase.database().ref().update(updates);
  this.setState({ isEnabled: !previous_state, light_theme: previous_state });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
