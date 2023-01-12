import { cross } from "@assets";
import useStyles from "./style";
import { View } from "react-native";
import { navigate } from "@services";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RouteProp, useTheme } from "@react-navigation/native";
import { AppHeader, Wrapper, } from "@components";

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
    };
  }>;
}

const TransactionMenu = ({ navigation, route }: Props) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [onClick, setOnClick] = useState<any>("");

  const on_Click = (type: any) => {
    if (type === "refund") {
      navigate("Merchant_Login",);
    }
    if (type === "admin") {
      navigate("Dashboard");
    }
  };

  return (
    <Wrapper isTop>
      <AppHeader title="Transaction Menu" />
      <View style={styles.mainView}>
       
        <LinearButton
          title="Refund"
          onClick={onClick}
          onPress={() => on_Click("refund")}
        />
        <LinearButton
          title="Print Receipt"
          onPress={() => on_Click("print")}
          onClick={onClick}
        />
        <LinearButton
          title="Admin Menu"
          onPress={() => on_Click("admin")}
          onClick={onClick}
        />
      </View>
    </Wrapper>
  );
};

export default TransactionMenu;
