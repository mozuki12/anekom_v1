import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  SocialIcon,
  ImageBackground,   
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LOGOANEKOM.png')} />
      <Text style={styles.paragraph}> Welcome to ANEKOM </Text>
      <TextInput style={styles.input} placeholder="username/email" />
      <TextInput style={styles.input2} placeholder="password" />
      <TouchableOpacity style={styles.lupa_anu}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tombol}>
        <Text onPress={() => navigation.navigate('Home')} style={styles.logintext}> Log In </Text>
      </TouchableOpacity>
      <Text style={styles.notice}>
        Belum punya akun?
        <TouchableOpacity style={styles.tombol2}>
          <Text onPress={() => navigation.navigate('Register')}  style={styles.daftar}> DAFTAR </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 15,
    marginTop: 30,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    marginTop: 50,
    height: 60,
    width: 230,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  input: {
    height: 45,
    margin: 12,
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  input2: {
    height: 45,
    margin: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  notice: {
    margin: 31,
    marginTop: 1,
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tombol: {
    marginTop: 200,
    backgroundColor: 'darkblue',
    padding: 15,
    borderRadius: 10,
    margin: 25,
  },
  logintext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  tombol2: {},
  daftar: {
    color: 'darkblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // begron: {
  //   marginTop: 200,
  //   backgroundColor: 'white',
  // },
  lupa_anu: {
    margin: 0,
    padding: 5,
  },
});
