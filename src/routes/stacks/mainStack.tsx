import React from "react";
import { Login} from "@screens";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const MainStack = ({ isLoggedIn }: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default MainStack;
