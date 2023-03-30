import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  Text,
  TextInput,
} from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { EthPrice, NFTTitle } from "./SubInfo";
import { TouchableHighlight } from "react-native-gesture-handler";
import * as Device from "expo-device";
import * as Network from "expo-network";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState(0);
  const [text, onChangeText] = useState("");
  const [text1, onChangeText1] = useState("");

  let Networkip;

  useEffect(() => {
    Network.getIpAddressAsync().then((ip) => {
      console.log(ip);
      Networkip = ip;
    });
  }, []);

  function media(obj) {
    if (obj.length) {
      let media = 0.0;
      for (let i = 0; i < obj.length; i++) {
        media += obj[i].voto;
      }
      return parseFloat(media / obj.length).toFixed(1);
    } else {
      return 0;
    }
  }

  function insertNew(arg, obj) {
    fetch(
      "https://eu-central-1.aws.data.mongodb-api.com/app/application-0-zzwcv/endpoint/api/insert?secret=test&arg1=" +
        arg,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      }
    ).then((res) => {
      res.json().then((data) => console.log(data));
    });
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Racconta il misfatto 😒</Text>
            <TextInput
              style={styles.input}
              editable
              maxLength={200}
              multiline
              numberOfLines={4}
              onChangeText={onChangeText}
              value={text}
            />
            <Text style={styles.modalText1}>Firmati </Text>
            <TextInput
              style={styles.input1}
              editable
              maxLength={200}
              numberOfLines={1}
              onChangeText={onChangeText1}
              value={text1}
            />
            <Text style={styles.modalText}>Aggiungi un voto 😁</Text>

            <View
              style={{
                flexDirection: "row",
                marginBottom: 30,
                justifyContent: "space-between",
              }}>
              <Pressable onPress={() => setNumber(1)}>
                <View style={styles.modalCustomView}>
                  {number == 0 ? (
                    <Image
                      source={assets.starb}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    <Image
                      source={assets.starc}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable onPress={() => setNumber(2)}>
                <View style={styles.modalCustomView}>
                  {number < 2 ? (
                    <Image
                      source={assets.starb}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    <Image
                      source={assets.starc}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable onPress={() => setNumber(3)}>
                <View style={styles.modalCustomView}>
                  {number < 3 ? (
                    <Image
                      source={assets.starb}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    <Image
                      source={assets.starc}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable onPress={() => setNumber(4)}>
                <View style={styles.modalCustomView}>
                  {number < 4 ? (
                    <Image
                      source={assets.starb}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    <Image
                      source={assets.starc}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </View>
              </Pressable>
              <Pressable onPress={() => setNumber(5)}>
                <View style={styles.modalCustomView}>
                  {number < 5 ? (
                    <Image
                      source={assets.starb}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    <Image
                      source={assets.starc}
                      resizeMode="cover"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                </View>
              </Pressable>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Pressable
                style={[styles.button, styles.buttonCloseCustom]}
                onPress={() => {
                  setNumber(0);
                  onChangeText("");
                  onChangeText1("");
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Annulla</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCloseCustom1]}
                onPress={() => {
                  insertNew(data.nome, {
                    commenti: {
                      id: uuidv4(),
                      voto: number,
                      motivazione: text,
                      autore: text1,
                      data: new Date().toLocaleDateString(),
                      ip: Networkip,
                      imei:
                        Device?.deviceName +
                        "-" +
                        Device?.brand +
                        "-" +
                        Device?.modelName,
                    },
                  });
                  setNumber(0);
                  onChangeText("");
                  onChangeText1("");
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Conferma</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Details", { data });
        }}
        underlayColor="white">
        <View
          style={{
            width: "100%",
            height: 360,
          }}>
          <Image
            source={data.images}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(#9Edddd, #04b0b0)",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
        </View>
      </TouchableHighlight>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.nome + " " + data.cognome}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {data.commenti[0]?.voto ? (
            <EthPrice price={media(data.commenti)} />
          ) : (
            <EthPrice price={0.0} />
          )}

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Vota</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input: {
    height: 170,
    width: 90 + "%",
    margin: 0,
    marginBottom: 10,
    borderWidth: 0.1,
    padding: 6,
    borderRadius: 10,
  },
  input1: {
    height: 30,
    width: 90 + "%",
    margin: 0,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.1,
    padding: 6,
  },
  modalView: {
    margin: 10,
    width: 85 + "%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCustomView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.primary,
  },
  buttonClose: {
    backgroundColor: COLORS.primary,
  },
  buttonCloseCustom: {
    backgroundColor: COLORS.gray,
    padding: 8,
  },
  buttonCloseCustom1: {
    padding: 8,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
  },
  textStyle: {
    color: "white",
    padding: 6,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText1: {
    marginBottom: 5,
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NFTCard;
