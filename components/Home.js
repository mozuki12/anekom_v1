import * as React from 'react';
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
import Ionicons from '@expo/vector-icons';
import { Feather, Entypo, FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
    <View style={{flexDirection:'row'}}>
      <Image  
            source={require('../assets/LOGOANEKOM.png')} 
            style={{marginLeft: -20,  width: 115, height: 30,}}
        />
      <TouchableOpacity style={{marginTop: 12, marginLeft: 24, fontSize: 15,}}> Hello petra sola</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Akun')}>
      <Image 
            source={require('../assets/profile.png')}
            style={{marginBottom: 10, marginLeft: 5,  width: 45, height: 45,}}
            resizeMOde="contain"
        />
      </TouchableOpacity>
    </View>
      <TextInput style={styles.search} placeholder="Search Title or Topic" />
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
      <Image 
            source={require('../assets/cttan.png')}
            style={{marginBottom: 10, marginLeft: 5,  width: 35, height: 50,}}
            resizeMOde="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
      <Image 
            source={require('../assets/iconquiz.png')}
            style={{marginBottom: 10, marginLeft: 30, marginTop: 5,  width: 37, height: 37,}}
            resizeMOde="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Materi')}>
      <Image 
            source={require('../assets/book.png')}
            style={{marginBottom: 10, marginLeft: 30, marginTop: 5, width: 40, height: 40,}}
            resizeMOde="contain"
        />
      </TouchableOpacity>
      </View>
      <Text style={styles.notice}> Teks Anekdot yang munkin Anda sukai </Text>
      <View style={styles.boks1}>
        <Text style={styles.materi}>jangan kau dekati zina</Text>
      </View>
      <View style={styles.boks2}>
        <Text style={styles.materi}> pe ingfokan </Text>
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
    height: 500,
    width: 280,
  },
  boks2: {
    alignSelf: 'center',
    padding: 35,
    backgroundColor: '#DFDADA',
    borderRadius: 15,
    height: 500,
    width: 280,
    marginTop: 10,
  },
  search: {
    marginBottom: 20,
    alignSelf: 'center',
    width: 280,
    height: 40,
    margin: 12,
    marginTop: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DFDADA',
  },
  notice: {
    marginTop: 20,
    textAlign: 'center',
    margin: 12,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
