import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { t } from "@i18n";
import { DrawerContent } from "@components";
import { Config } from "@config";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { navigationRef } from "./NavigationService";
import * as Linking from "expo-linking";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const prefix = Linking.createURL("/");

function MyBottomBar() {
  return (
    <Tab.Navigator initialRouteName="Home">
      {Config.TabBar.map((items, i) => {
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
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Main"
        component={MyBottomBar}
        options={{
          headerShown: Config.Main_Drawer_Bar,
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          drawerLabel: t(`lists:Home`),
        }}
      />

      {Config.Drawer.map((items, i) => {
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
  );
}
function Merge() {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const AppNavigatorContainer = Merge;

export default AppNavigatorContainer;
