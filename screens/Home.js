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
  const [isFetching, setIsFetching] = useState(false);
  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("nftData");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }

  const onRefresh = () => {
    setIsFetching(!isFetching);
  };

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
      .catch(() => {
        getData().then((data) => {
          setNftData(data);
        });
      })
      .then((res) => {
        res.json().then((data) => {
          data
            .sort((a, b) => a.id - b.id)
            .forEach((element, i) => {
              NFTData[i].commenti = element.commenti;
            });
          setNftData(NFTData);
          storeValue(NFTData);
        });
      })
      .catch(() => {
        getData().then((data) => {
          setNftData(data);
        });
      });
  }, [isFetching]);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter(
      (item) =>
        item.nome.toLowerCase().includes(value.toLowerCase()) ||
        item.cognome.toLowerCase().includes(value.toLowerCase()) ||
        item.alias.toLowerCase().includes(value.toLowerCase())
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
        <View style={{ flex: 1, flexDirection: "column", zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => (
              <NFTCard key={item.nome} data={item} parentCallBack={onRefresh} />
            )}
            keyExtractor={(item) => item.id}
            onRefresh={onRefresh}
            progressViewOffset={100}
            extraData={nftData}
            alwaysBounceVertical={true}
            alwaysBounceHorizontal={false}
            refreshing={isFetching}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader onSearch={handleSearch} data={nftData} />
            }
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
