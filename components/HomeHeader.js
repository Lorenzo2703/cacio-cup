import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TouchableHighlight } from "react-native-gesture-handler";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch, data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text style={{ fontSize: SIZES.extraLarge, color: COLORS.white }}>
          Cacio cup V2
        </Text>

        <TouchableHighlight
          onPress={() => navigation.navigate("Rank", { data })}
          underlayColor="primary">
          <View style={{ width: 45, height: 45 }}>
            <Image
              source={assets.trophy}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableHighlight>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Ma che ne sanno quelli della boiler summer cup 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.medium,
            color: COLORS.white,
            marginTop: SIZES.base,
          }}>
          Ecco le migliori peggiori ragazze 😘
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search..."
            style={{
              flex: 1,
              color: COLORS.white,
              padding: SIZES.base,
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
