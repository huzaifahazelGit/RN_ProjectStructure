import { store } from "@redux";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import React, { useState } from "react";
import { navigate, navigationRef } from "@services";
import { persistor } from "./src/shared/redux/store";
import { darkThemeStyle, defaultTheme } from "@theme";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [active, setActive] = useState(true);
  const [isEnabledOne, setIsEnabledOne] = useState(false);
  let appTheme = isEnabledOne ? darkThemeStyle : defaultTheme;
 
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <NavigationContainer theme={appTheme as any} ref={navigationRef}>
            <Routes />
          </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
