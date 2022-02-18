import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { t } from "@i18n";
import { DrawerContent } from "@components";
import { Config } from "@config";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { navigationRef } from "./NavigationService";
import * as Linking from "expo-linking";

const Drawer = createDrawerNavigator();
const prefix = Linking.createURL("/");

function MyDrawer() {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContent}>
        {Config.Menu.map((items, i) => {
          return (
            <Drawer.Screen
              key={i}
              name={items.name}
              component={items.component}
              options={{
                headerShown: items.header,
                drawerIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name={items.label}
                    color={color}
                    size={size}
                  />
                ),
                drawerLabel: t(`lists:${items.name}`),
              }}
            />
          );
        })}
        {Config.Notification[0].enabled ? (
          <Drawer.Screen
            name={Config.Notification[0].name}
            component={Config.Notification[0].component}
            options={{
              drawerLabel: t(`lists:${Config.Notification[0].name}`),
              drawerIcon: ({ color, size }) => (
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const AppNavigatorContainer = MyDrawer;

export default AppNavigatorContainer;
