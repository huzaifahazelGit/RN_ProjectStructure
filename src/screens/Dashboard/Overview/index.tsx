import {
  Wrapper,

} from "@components";
import React from "react";
import useStyles from "./style";
import { View } from "react-native";
import { navigate } from "@services";
import { GenericNavigation } from "@utils";
import { useTheme } from "@react-navigation/native";
import { adminName, admin, transaction, report, setting } from "@assets";

interface Props extends GenericNavigation {}

export default function Dashboard(props: Props) {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  const onPress = () => {
    navigate("LockScreen", { type: "merchant" });
  };

  return (
    <Wrapper
      viewStyle={{
        paddingTop: 0,
        paddingHorizontal: 0,
      }}
    >
      <ImageBackgroundWrapper source={admin} imageName={adminName} />

      <View style={styles.container}>
        <SecondaryButton
             onPress={() => navigate("TransactionMenu",{})}
          icon={transaction}
          title="Transaction Menu"
        />
        <LinearButton icon={report} title="Reports"
         onPress={() => navigate("ReportsSection",{})}
        />
        <LinearButton
          icon={setting}
          title="Settings"
          onPress={() => navigate("Admin_Settings")}
        />
      </View>
    </Wrapper>
  );
}
