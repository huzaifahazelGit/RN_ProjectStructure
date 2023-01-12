import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Login,

} from "@screens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>

  );
};

export default AuthStack;
