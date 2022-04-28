import NavigationBottom from "./NavigationBottom";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

/**
 * Our AppContainer that will load a quick Loading screen in charge of choosing if we display the Login or App stack
 * va contenir le switch pour choisir vers où on navigue
 */
const Root = () => {
  const AppContainer = createAppContainer(
    createSwitchNavigator(
      /* ici on place les différents navigateurs: l'un pour s'identifier et l'autre principal de l'app */
      /* pas utile pour le moment */
      {
        NavigationBottom: NavigationBottom,
      }
      /* {
        initialRouteName: "Loading",
      } */
    )
  );
  return <AppContainer />;
};

export default Root;
