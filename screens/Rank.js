import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
} from "../components";

var max = -1;

const Rank = ({ navigation, route }) => {
  let data = route.params.data;
  let winner = "";
  let classifica = [];
  data.forEach((element) => {
    let sum = 0;
    element.commenti.forEach((item) => {
      sum += item.voto;
      if (sum > max) {
        max = sum;
        winner = {
          nome: element.nome,
          cognome: element.cognome,
          image: element.images,
        };
      }
    });
    classifica.push(sum);
  });
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
            max = -1;
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
          }}>
          Ottimo{" "}
          <Text style={{ fontFamily: FONTS.bold }}>
            {winner.nome + " " + winner.cognome}!
          </Text>
          {"\n"} La tua posizione in classifica è:
          <Text style={{ fontFamily: FONTS.bold }}> 1{"\n\n"}</Text>
          Con: {"\n" + max} punti
        </Text>
        <Image
          source={winner.image}
          resizeMode="cover"
          style={{
            width: 180,
            padding: 10,
            margin: 5,
            height: 180,
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
              margin: 40,
              fontSize: 20,
              letterSpacing: 2,
              textAlign: "center",
              color: COLORS.white,
            }}>
            La classifica {"\n\n"}Giulia: {classifica[0]} punti {"\n"}
            Chiara: {classifica[1]} punti {"\n"}
            Lucrezia: {classifica[2]} punti {"\n"}
            Fabiana: {classifica[3]} punti {"\n"}
            Sara: {classifica[4]} punti
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rank;
