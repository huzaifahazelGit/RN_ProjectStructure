import React, { useState, useEffect } from "react";
import AuthStack from "./stacks/authStack";
import MainStack from "./stacks/mainStack";
import { useDispatch } from "react-redux";
export default function Routes() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn2] = useState(true);

  return (
    <>
     { isLoggedIn ? <MainStack /> : <AuthStack />}</>
  );
}
