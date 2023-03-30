import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageResizeMode,
} from 'react-native';

export default function Akun({ navigation }) {
  const [note, setNote] = useState('');

  const handleNoteChange = (newNote) => {
    setNote(newNote);
  };
  return (
    <ScrollView style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <Image 
            source={require('../assets/profile.png')}
            style={{marginBottom: 10, marginLeft: 5,  width: 45, height: 45,}}
            resizeMOde="contain"
        />
      <TouchableOpacity style={{marginTop: 12, marginLeft: 24, fontSize: 15,}}> Hello petra sola</TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image 
            source={require('../assets/back.png')}
            style={{marginBottom: 20, marginLeft: 1,  width: 20, height: 20,}}
            resizeMOde="contain"
        />
      </TouchableOpacity>
      </View>
      <View style={styles.boks1}>
        <Text style={styles.materi}>Catatan Anda</Text>
        <TextInput
        style={styles.cardtext}
        multiline={true}
        numberOfLines={4}
        value={note}
        onChangeText={handleNoteChange}
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
  },
  boks1: {
    alignSelf: 'center',
    padding: 35,
    backgroundColor: '#DFDADA',
    borderRadius: 15,
    height: 800,
    width: 280,
  },
  cardtext: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    fontSize: 16,
    height: 800,
    backgroundColor: 'none'
  },
  materi: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
