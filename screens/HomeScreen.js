import React from "react";
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

export default function HomeScreen({ navigation }) {
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.slide} onPress={item.open}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Carousel
            data={[
              {
                image:
                  "https://www.thelivingos.com/wp-content/uploads/2020/12/14122563_fullDevice.png",
                open: () => Linking.openURL("https://www.thelivingos.com"),
              },
              {
                image:
                  "https://static.thairath.co.th/media/dFQROr7oWzulq5FZYjcLPh5OZrYcY416ulosyOKd3L7WnWICB94q4E8HDaF0bBPWKrQ.jpg",
                open: () => {
                  const scheme = Platform.OS === "ios" ? "maps:" : "geo:";
                  const url = scheme + `${0},${0}`;
                  Linking.openURL(url);
                },
              },
              {
                image:
                  "https://www.thelivingos.com/wp-content/uploads/2019/07/67536227_438683343641474_8083858312044478464_n-420x280_c.jpg",
              },
            ]}
            renderItem={_renderItem}
            sliderWidth={300}
            itemWidth={300}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "red", marginRight: 10 }]}
            onPress={() => {
              navigation.popToTop();
            }}
          >
            <Text style={{ color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              navigation.navigate('List');
            }}
          >
            <Text style={{ color: "#fff" }}>ListView</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  btn: {
    backgroundColor: "#267eff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
