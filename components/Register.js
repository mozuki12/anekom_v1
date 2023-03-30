import * as React from 'react';
import { useState } from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';


function regis(pppp) {
  return <TextInput style={styles.input} placeholder={pppp}></TextInput>
}

export default function register({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
  return(
    <View style={styles.container}>
    <Image style={styles.foto} source={require('../assets/LOGOANEKOM.png')}/>
    <Text style={styles.tulisan}> Daftar akun Anda </Text>
      {regis("username")}
      {regis("email/no hp")}
      {regis("password")}
      {regis("confrim password")}
      <TouchableOpacity  style={styles.daftar} onPress={() => setModalVisible(true)} >
      <Text style={styles.teks}> REGISTER </Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        >

          <View style={styles.modalView}>
            <Text style={styles.modalText}>Akun anda berhasil dibuat</Text>
            <TouchableOpacity style={styles.close} title="Close" onPress={() => setModalVisible(false)}> Close </TouchableOpacity>
          </View>
      </Modal>
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
    backgroundColor: 'green',
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
  modalView: {
    marginTop: 200,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    }
  },
  modalText: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold'
  },
  close: {
    padding: 10,
    borderRadius: 10,
    margin: 25,
  },
})