import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "../pages/HomeScreen";
import PageRandom from "../pages/PageRandom";

const pageRandom = () => {
  return <PageRandom />;
};
const homeScreen = () => {
  return <HomeScreen />;
};
//changer les icones
const NavigationBottom = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "pageRandom", title: "pageRandom" },
    { key: "homeScreen", title: "home" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pageRandom: pageRandom,
    homeScreen: homeScreen,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationBottom;
