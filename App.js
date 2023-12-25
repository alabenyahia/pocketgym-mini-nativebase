import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {extendTheme, NativeBaseProvider} from "native-base";
import AuthStack from "./navigation/AuthStack";
import UserDrawer from "./navigation/UserDrawer";

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#345872",
        100: "#345872",
        200: "#345872",
        300: "#345872",
        400: "#345872",
        500: "#345872",
        600: "#345872",
        700: "#345872",
        800: "#345872",
        900: "#345872",
      },
    }
  });
  return (
      <>
        <StatusBar backgroundColor={"#345872"}/>

          <NavigationContainer>
            <SafeAreaProvider>
              <NativeBaseProvider theme={theme}>
                <UserDrawer/>
              </NativeBaseProvider>
            </SafeAreaProvider>
          </NavigationContainer>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
