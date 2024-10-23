import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ESSEMTIALS_ARTICLE_FRAGMENT } from "@/hooks/graphql/Fragments";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const client = new ApolloClient({
    uri: process.env.EXPO_PUBLIC_GRAPHQL_API,
    cache: new InMemoryCache({
      fragments: createFragmentRegistry(ESSEMTIALS_ARTICLE_FRAGMENT)
    })
  });

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
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
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ApolloProvider>
  );
}
