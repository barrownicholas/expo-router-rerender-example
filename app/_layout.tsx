import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import {Slot} from "expo-router";
import {View} from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [loaded, setLoaded] = useState<boolean>(false);

  const superExpensiveLoadingFunction = async () => {
    console.log("superExpensiveLoadingFunction: ran");
  };

  useEffect(() => {
    superExpensiveLoadingFunction().then(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ width: "100%", height: "100%", padding: 20 }}>
      <Slot />
    </View>
  );
}
