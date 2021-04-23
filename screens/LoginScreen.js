import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const canLogin = username && password;

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                "https://www.thelivingos.com/wp-content/uploads/2021/03/767px-01.png",
            }}
            style={styles.logo}
          />
          <View style={styles.boxInput}>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.boxInput}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            style={[styles.btn, !canLogin && { backgroundColor: "#ccc" }]}
            disabled={!canLogin}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={{ color: "#fff" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  boxInput: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#267eff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
