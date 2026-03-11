import { useAuth } from "@/lib/auth-context";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const { signOut, user } = useAuth();
  return (
    <View>
      <Text>teste</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>
        Sign Out
      </Button>
    </View>
  );
}
