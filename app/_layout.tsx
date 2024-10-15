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

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

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
      <NavigationContainer independent={true}>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Dashboard"
            component={DashboardScreen}
          ></Drawer.Screen>
          <Drawer.Screen
            name="Settings"
            component={SettingsScreen}
          ></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
