import { NavigationProp, RouteProp } from "@react-navigation/core";
export interface GenericNavigation {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

export interface IntroSlide {
  key: number;
  title: string;
  text: string;
  image: any;
  color: string;
}
