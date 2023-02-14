import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import Ionicons from '@expo/vector-icons';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';


export default function Home(navigation) {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.tekspp}>
    <Image style={styles.logo} source={require('../assets/LOGOANEKOM.png')}> contoh 
    </Image>
    </Text>
    <TextInput style={styles.search} placeholder="Search Title or Topic" ></TextInput>
    <Text style={styles.notice}> Teks Anekdot yang Munkin Anda Sukai </Text>
    <View style={styles.boks}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
  },
  boks: {
    padding: 35,
    backgroundColor: "#DFDADA",
    borderRadius: 15,
    height: 500,
  },
  search: {
    height: 40,
    margin: 12,
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#DFDADA",
  },
  notice: {
    marginTop: 20,
    textAlign: "center",
    margin: 12,
    fontWeight: "bold",
    fontSize: 12,
  },
  logo: {
    marginTop: 50,
    height: 30,
    width: 115,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'left',
  },
  tekspp: {
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 30,
  },
})