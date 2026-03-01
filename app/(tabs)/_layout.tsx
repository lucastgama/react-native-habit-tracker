import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
          }}
        />
        <Tabs.Screen name="login" options={{ title: "Login" }} />
      </Tabs>
    </>
  );
}
