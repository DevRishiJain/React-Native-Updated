const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AfterAUserFillsTheInfo from "./screens/AfterAUserFillsTheInfo";
import BeforeTheContactWithAUser from "./screens/BeforeTheContactWithAUser";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="BeforeTheContactWithAUser"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="AfterAUserFillsTheInfo"
              component={AfterAUserFillsTheInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BeforeTheContactWithAUser"
              component={BeforeTheContactWithAUser}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <BeforeTheContactWithAUser />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
