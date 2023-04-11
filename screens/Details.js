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
  const { data } = route?.params;
  let voti = {
    data: [],
  };

  data?.commenti?.forEach((commento) => {
    voti?.data?.push(commento?.voto);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: 370 }}>
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
          left={25}
          top={35}
        />
      </View>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View>
        {voti?.data?.length > 1 && (
          <LineChart
            data={{
              labels: [],
              datasets: [voti || [1]],
            }}
            width={Dimensions.get("window").width - 10} // from react-native
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            withDots={true}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              linejoinType: "round",
              backgroundGradientFrom: "#ff0f7b",
              backgroundGradientTo: "#f89b29",
              decimalPlaces: 2, // optional, defaults to 2dp
              fillShadowGradientFromOpacity: 0.7,

              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ff5e5a",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
          />
        )}
      </View>
      {data?.commenti?.length > 0 && (
        <FlatList
          key={data.nome}
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
              {"Voto perchè: " +
                item.motivazione +
                "\n\n con voto: " +
                item.voto +
                "\n\n Autore: " +
                (item.autore == null || item.autore === undefined
                  ? "Anonimo"
                  : item.autore)}
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(data) => data.id}
          contentContainerStyle={{
            paddingBottom: SIZES.extraLarge * 3,
          }}
        />
      )}
      {data?.commenti?.length === 0 && (
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
            fontSize: 26,
          }}>
          {"Nessun commento... \n\n Io direi di aggiungere qualcosa! 😈"}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Details;
