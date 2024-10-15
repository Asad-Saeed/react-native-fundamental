import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/homeScreen";
import AboutScreen from "@/screens/aboutScreen";
import ContactScreen from "@/screens/contactScreen";
import { Pressable, Text } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "@/screens/dashboardScreen";
import SettingsScreen from "@/screens/settingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "@/screens/profileScreen";
import CoursesScreen from "@/screens/courseScreen";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tabs = createBottomTabNavigator();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      {/* Stack Navigation */}
      {/* <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "#6a51ae" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
            headerShown: true,
            headerLeft: () => null,
            headerRight: () => (
              <Pressable
                onPress={() => {
                  alert("Menu is Pressable");
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "#e8e4f3",
            },
          }}
        >
          <Stack.Screen
            // options={{
            //   title: "Welcome Home",
            //   headerStyle: { backgroundColor: "#6a51ae" },
            //   headerTintColor: "#fff",
            //   headerTitleStyle: { fontWeight: "bold" },
            //   headerTitleAlign: "center",
            //   headerShown: true,
            //   headerLeft: () => null,
            //   headerRight: () => (
            //     <Pressable
            //       onPress={() => {
            //         alert("Menu is Pressable");
            //       }}
            //     >
            //       <Text style={{ color: "white", fontSize: 20 }}>Menu</Text>
            //     </Pressable>
            //   ),
            //   contentStyle: {
            //     backgroundColor: "#e8e4f3",
            //   },
            // }}
            name="Home"
            component={HomeScreen}
            initialParams={{ name: "Guest" }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            // options={({ route }) => ({
            //   title: route.params.name,
            // })}
          />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* Drawer Navigation */}
      {/* <NavigationContainer independent={true}>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        >
          <Drawer.Screen
            options={{
              title: "My Dashboard",
              drawerIcon: () => <Text>Dashboard</Text>,
              drawerLabel: "Dashboard label",
              //   drawerActiveTintColor: "#333",
              //   drawerActiveBackgroundColor: "lightblue",
              //   drawerContentStyle: {
              //     backgroundColor: "#c6cbef",
              //   },
            }}
            name="Dashboard"
            component={DashboardScreen}
          ></Drawer.Screen>
          <Drawer.Screen
            name="Settings"
            component={SettingsScreen}
          ></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer> */}
      {/* Tab Navigation */}
      <NavigationContainer independent={true}>
        <Tabs.Navigator
          screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: true,
            tabBarActiveTintColor: "purple",
            tabBarInactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "person" : "person-outline"}
                  color={color}
                  size={20}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Courses"
            component={CoursesScreen}
            options={{
              tabBarLabel: "Coures",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "book" : "book-outline"}
                  color={color}
                  size={20}
                />
              ),
              tabBarBadge: 6,
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "settings" : "settings-outline"}
                  color={color}
                  size={20}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="About Stack"
            component={StackNavigator}
            options={{
              tabBarLabel: "About Stack",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={
                    focused
                      ? "information-circle"
                      : "information-circle-outline"
                  }
                  color={color}
                  size={20}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Welcome Home",
          headerStyle: { backgroundColor: "#6a51ae" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerShown: true,
          headerLeft: () => null,
          headerRight: () => (
            <Pressable
              onPress={() => {
                alert("Menu is Pressable");
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          // options={{
          //   title: "Welcome Home",
          //   headerStyle: { backgroundColor: "#6a51ae" },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: { fontWeight: "bold" },
          //   headerTitleAlign: "center",
          //   headerShown: true,
          //   headerLeft: () => null,
          //   headerRight: () => (
          //     <Pressable
          //       onPress={() => {
          //         alert("Menu is Pressable");
          //       }}
          //     >
          //       <Text style={{ color: "white", fontSize: 20 }}>Menu</Text>
          //     </Pressable>
          //   ),
          //   contentStyle: {
          //     backgroundColor: "#e8e4f3",
          //   },
          // }}
          name="Home"
          component={HomeScreen}
          initialParams={{ name: "Guest" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          // options={({ route }) => ({
          //   title: route.params.name,
          // })}
        />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
