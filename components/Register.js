import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

function regis(pppp) {
  return <TextInput style={styles.input} placeholder={pppp}></TextInput>
}

export default function register({navigation}) {
  return(
    <View style={styles.container}>
    <Image style={styles.foto} source={require('../assets/LOGOANEKOM.png')}/>
    <Text style={styles.tulisan}> Daftar dengan akun Anda </Text>
      {regis("Nama Lengkap")}
      {regis("Nickname")}
      {regis("Password")}
      {regis("Konfirmasi Password")}
      <TouchableOpacity style={styles.daftar}>
      <Text style={styles.teks}> DAFTAR </Text>
      </TouchableOpacity>
      <View style={styles.begron}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
  },
  begron: {
    marginTop: 200,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  tulisan: {
    marginTop: 20,
    textAlign: "center",
    margin: 12,
    fontWeight: "bold",
  },
  foto: {
    marginTop: 50,
    height: 60,
    width: 230,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  daftar: {
    marginTop: 200,
    backgroundColor: 'darkgrey',
    padding: 15,
    borderRadius: 10,
    margin: 25,
  },
  teks: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
})