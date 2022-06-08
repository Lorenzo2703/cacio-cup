import React from "react";
import { View, SafeAreaView, Image, Text, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS } from "../constants";
import { CircleButton, RectButton, FocusedStatusBar } from "../components";

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: 373 }}>
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

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.commenti}
        renderItem={({ item }) => <Text> {item.voto + " ok"} </Text>}
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
