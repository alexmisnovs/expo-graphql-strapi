import { Image, StyleSheet, View, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useArticleByDocumentId } from "@/hooks/graphql/useArticles";

export default function HomeScreen() {
  const { data, error, loading, refetch } = useArticleByDocumentId("m6ft5hepqfe24l25d55afggv");

  console.log("error", error?.message);

  if (loading) {
    return (
      <ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }} headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}>
        <View style={styles.titleContainer}>
          <Text>Loading...</Text>
        </View>
      </ParallaxScrollView>
    );
  }

  if (error) {
    return (
      <ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }} headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}>
        <View style={styles.titleContainer}>
          <Text>Error {error?.message}...</Text>
        </View>
      </ParallaxScrollView>
    );
  }

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }} headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}>
      <View style={styles.titleContainer}>
        <Text>Welcome to {data?.article?.title}</Text>
        <Text>Welcome to {data?.article?.description}</Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute"
  }
});
