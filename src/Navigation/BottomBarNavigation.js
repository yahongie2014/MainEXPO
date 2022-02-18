import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { t } from "@i18n";
import { Config } from "@config";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Linking from "expo-linking";
import { navigationRef } from "./NavigationService";

const Tab = createBottomTabNavigator();

const prefix = Linking.createURL("/");

function MyBottomBar() {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Tab.Navigator initialRouteName="Home">
        {Config.Menu.map((items, i) => {
          return (
            <Tab.Screen
              key={i}
              name={items.name}
              component={items.component}
              options={{
                tabBarLabel: t(`lists:${items.name}`),
                headerShown: items.header,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name={items.label}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          );
        })}
        {Config.Notification[0].enabled ? (
          <Tab.Screen
            name={Config.Notification[0].name}
            component={Config.Notification[0].component}
            options={{
              tabBarLabel: t(`lists:${Config.Notification[0].name}`),
              headerShown: Config.Notification[0].header,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name={Config.Notification[0].label}
                  color={color}
                  size={size}
                />
              ),
              tabBarBadge: Config.Notification[0].number,
            }}
          />
        ) : (
          <></>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const AppNavigatorContainer = MyBottomBar;

export default AppNavigatorContainer;
