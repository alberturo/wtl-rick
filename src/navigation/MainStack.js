import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Character from "../screens/Character";

const HomeStack = createStackNavigator();

export default function MainStack() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Character" component={Character} />
    </HomeStack.Navigator>
  );
}
