import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  Dimensions,
} from "react-native";

import { COLORS, SIZES, assets } from "../constants";
import { CircleButton, FocusedStatusBar } from "../components";
import { LineChart } from "react-native-chart-kit";

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  let voti = {
    data: [],
  };

  data.commenti.forEach((commento) => {
    voti.data.push(commento.voto);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: 323 }}>
        <Image
          source={data.images}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLORS.terziary,
          }}
        />
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={15}
        />
      </View>

      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View>
        <LineChart
          data={{
            labels: [],
            datasets: [voti],
          }}
          width={Dimensions.get("window").width - 10} // from react-native
          height={200}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            marginHorizontal: 5,
            borderRadius: 10,
          }}
        />
      </View>

      <FlatList
        data={data.commenti}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 8,
              width: "95%",
              backgroundColor: "white",
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 5,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 2,
              textAlign: "center",
            }}>
            {"Votata perchè: " +
              item.motivazione +
              "\n\n con voto: " +
              item.voto}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data) => data.id}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
      />
    </SafeAreaView>
  );
};

export default Details;
