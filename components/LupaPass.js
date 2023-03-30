import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

function lupapw(llll) {
  return <TextInput style={styles.input} placeholder={llll}></TextInput>
}
function CONFIRM() {
  alert('Password berhasil diubah');
}

export default function Forgot({navigation}) {
  return(
    <View style={styles.container}>
    <Image style={styles.foto} source={require('../assets/LOGOANEKOM.png')}/>
    <Text style={styles.tek}> Buat Password baru </Text>
    <View style={styles.jarak}></View>
      {lupapw("username")}
      {lupapw("password baru")}
      {lupapw("konfirmasi password")}
      <TouchableOpacity style={styles.newpass}>
      <Text onPress={CONFIRM} style={styles.teks}> CONFIRM </Text>
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
    marginTop: 380,
    backgroundColor: 'white'
  },
  jarak: {
    height: 10,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  foto: {
    marginTop: 50,
    height: 60,
    width: 230,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  newpass: {
    marginTop: 25,
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  teks: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tek: {
    marginTop: 40,
    textAlign: "center",
    margin: 12,
    fontWeight: "bold",
  }
})