import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

import { COLORS, SIZES, assets, FONTS } from "../constants";
import { CircleButton, FocusedStatusBar } from "../components";

const Rank = ({ navigation, route }) => {
  let data = route.params.data.slice(0, 7);
  let data1 = route.params.data.slice(7);
  //calculate total points for each user
  Object.keys(data).forEach((key) => {
    let totalPoints = 0;
    data[key].commenti.forEach((commento) => {
      totalPoints += commento.voto;
    });
    data[key].punti = totalPoints;
  });

  //sort data by points
  let sortedData = Object.entries(data).sort(
    (first, second) => second[1].punti - first[1].punti
  );

  Object.keys(data1).forEach((key) => {
    let totalPoints = 0;
    data1[key].commenti.forEach((commento) => {
      totalPoints += commento.voto;
    });
    data1[key].punti = totalPoints;
  });

  //sort data by points
  let sortedData1 = Object.entries(data1).sort(
    (first, second) => second[1].punti - first[1].punti
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View style={{ width: "100%", height: 80 }}>
        <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <CircleButton
          imgUrl={assets.left}
          handlePress={() => {
            navigation.goBack();
          }}
          left={25}
          top={35}
        />
      </View>

      <View
        style={{
          width: "100%",
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",

          zIndex: 1,
        }}>
        <Text
          style={{
            width: "90%",
            margin: 10,
            fontSize: 25,
            textAlign: "center",
            color: COLORS.white,
            fontFamily: FONTS.bold,
          }}>
          Ottimo {sortedData[0][1].nome}! sei 1°
          {"\n\n Con: " + sortedData[0][1].punti} punti
        </Text>
        <Image
          source={sortedData[0][1].images}
          resizeMode="cover"
          style={{
            width: 200,
            padding: 10,
            margin: 5,
            height: 200,
            borderRadius: 18,
            background: "linear-gradient(#20A4F3, #182B3A)",
          }}
        />
        <View
          style={{
            width: "100%",

            paddingVertical: SIZES.font,
            justifyContent: "center",
            alignItems: "center",

            zIndex: 1,
          }}>
          <Text
            style={{
              width: "90%",
              margin: 10,
              fontSize: 22,
              fontWeight: "400",
              letterSpacing: 2,
              textAlign: "center",
              color: COLORS.white,
            }}>
            <ol>
              La classifica Ragazze{"\n\n"}
              {[...sortedData].map(([key, value]) => (
                <li key={key}>
                  {value?.alias || value?.nome} con {value?.punti} punti
                </li>
              ))}
            </ol>
            <View
              style={{
                width: "100%",
                paddingVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",

                zIndex: 1,
              }}>
              <Text
                style={{
                  width: "90%",
                  margin: 10,
                  fontSize: 25,
                  textAlign: "center",
                  color: COLORS.white,
                  fontFamily: FONTS.bold,
                  marginTop: 60,
                }}>
                Ottimo {sortedData1[0][1].nome}! sei 1°
                {"\n\n Con: " + sortedData1[0][1].punti} punti
              </Text>
              <Image
                source={sortedData1[0][1].images}
                resizeMode="cover"
                style={{
                  width: 200,
                  padding: 10,
                  margin: 5,
                  height: 200,
                  borderRadius: 18,
                  background: "linear-gradient(#20A4F3, #182B3A)",
                }}
              />
            </View>
            <ol>
              La classifica Ragazzi{"\n\n"}
              {[...sortedData1].map(([key, value]) => (
                <li key={key}>
                  {value?.alias || value?.nome} con {value?.punti} punti
                </li>
              ))}
            </ol>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rank;
