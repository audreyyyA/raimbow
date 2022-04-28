import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class PageRandom extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Page random</Text>
      </View>
    );
  }
}

/* peut-être à supprimer + tard */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageRandom;
