import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-3xl my-10">Welcome to real eastate app.</Text>
      <Link href={"/signIn"}>Sign in </Link>
      <Link href={"/(root)/(tabs)/profile"}>Profile</Link>
      <Link href={"/(root)/(tabs)/explore"}>Explore </Link>
      <Link href={"/properties/1"}>Property </Link>
    </View>
  );
}
