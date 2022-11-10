import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import MyFancyButton from "./src/components/MyFancyButton";

//fonts and splash screen
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter-Regular.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.otf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      className='flex-1 items-center justify-center bg-white'
      onLayout={onLayoutRootView}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
      <MyFancyButton>What working na?</MyFancyButton>
    </View>
  );
}
