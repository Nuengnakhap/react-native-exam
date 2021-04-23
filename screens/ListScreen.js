import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => setData(res.data));
    };
    fetchData();
  }, []);

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          elevation: 5,
          backgroundColor: "#fff",
          marginVertical: 5,
          marginHorizontal: 10,
          alignItems: "center",
          borderRadius: 10,
          overflow: 'hidden'
        }}
      >
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
        <Text style={{ flex: 1, padding: 10 }}>{item.title}</Text>
      </View>
    );
  };

  if (data.length == 0) return null;

  return (
    <FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({});
