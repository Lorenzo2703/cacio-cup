import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  async function storeValue(data) {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("nftData", jsonValue);
    } catch (e) {
      // saving error
    }
  }

  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("nftData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  const [nftData, setNftData] = useState(NFTData);

  useEffect(() => {
    getData()
      .then((data) => {
        setNftData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(
      "https://eu-central-1.aws.data.mongodb-api.com/app/application-0-zzwcv/endpoint/api?secret=test",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .catch((err) => {
        getData().then((data) => {
          setNftData(data);
        });
      })
      .then((res) => {
        res.json().then((data) => {
          data.forEach((element, i) => {
            NFTData[i].commenti = element.commenti;
          });
          setNftData(NFTData);
          storeValue(NFTData);
        });
      })
      .catch((err) => {
        getData().then((data) => {
          setNftData(data);
        });
      });
  }, []);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter(
      (item) =>
        item.nome.toLowerCase().includes(value.toLowerCase()) ||
        item.cognome.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
          <View style={{ height: 350, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
