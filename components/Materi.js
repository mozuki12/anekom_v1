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

export default function Materi({ navigation }) {
  const [note, setNote] = useState('');

  const handleNoteChange = (newNote) => {
    setNote(newNote);
  };
  return (
    <ScrollView style={styles.container}>
    <View style={{flexDirection:'row'}}>
      <Image  
            source={require('../assets/LOGOANEKOM.png')} 
            style={{marginLeft: -20,  width: 115, height: 30,}}
        />
      <TouchableOpacity style={{marginTop: 12, marginLeft: 24, fontSize: 15,}}> Hello petra sola</TouchableOpacity>
      <Image 
            source={require('../assets/profile.png')}
            style={{marginBottom: 10, marginLeft: 5,  width: 45, height: 45,}}
            resizeMOde="contain"
        />
    </View>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image 
            source={require('../assets/back.png')}
            style={{marginBottom: 20,  width: 20, height: 20,}}
            resizeMOde="contain"
        />
      </TouchableOpacity>
      </View>
      <View style={styles.boks1}>
        <Text style={styles.headier}>Materi Teks Anekdot</Text>
        <Text style={styles.materi}>Pengertian Teks Anekdot</Text>
        <Text style={styles.isi}>Sederhananya, anekdot adalah cerita yang terdiri atas rangkaian kalimat-kalimat lucu. Tapi, nggak semua cerita lucu bisa dikategorikan sebagai anekdot, lho!</Text>
        <Text style={styles.isi}>Berdasarkan Kamus Besar Bahasa Indonesia (KBBI), teks anekdot adalah cerita singkat yang menarik karena lucu dan mengesankan, biasanya mengenai orang penting atau terkenal dan berdasarkan kejadian yang sebenarnya. Jadi, pada dasarnya, anekdot adalah cerita lucu yang didasari oleh kejadian nyata.</Text>
        <Text style={styles.materi}>Ciri-Ciri Teks Anekdot</Text>
        <Text style={styles.headerlist}>Teks anekdot memiliki beberapa ciri-ciri yang perlu kamu tahu. Di antaranya:</Text>
        <Text style={styles.list}>1. Bersifat lucu</Text>
        <Text style={styles.list}>2. Bersifat menggelitik</Text>
        <Text style={styles.list}>3. Bersifat menyindir</Text>
        <Text style={styles.list}>4. Bisa berdasarkan pengalaman pribadi/tokoh</Text>
        <Text style={styles.list}>5. Memiliki tujuan tertentu</Text>
        <Text style={styles.list}>6. Hampir menyerupai dongeng</Text>
        <Text style={styles.list}>7. Bisa menceritakan hubungan antara manusia dan hewan</Text>
        <Text style={styles.materi}>Tujuan Teks Anekdot</Text>
        <Text style={styles.isi}>Selain itu, penulisan teks anekdot juga memiliki tujuan, lho! Biasanya, teks anekdot ditulis dengan tujuan untuk membangkitkan tawa pembaca, sebagai sarana hiburan, atau sebagai sarana untuk mengkritik.
</Text>
        <Text style={styles.materi}>Struktur Teks Anekdot</Text>
        <Text style={styles.isi}>Struktur teks anekdot terdiri dari lima bagian, yaitu abstrak, orientasi, krisis, reaksi, dan koda. Yuk, simak masing-masing penjelasan!
</Text>
        <Text style={styles.list2}>1. Abstrak
Merupakan bagian pendahuluan atau bagian pembuka teks.</Text>
        <Text style={styles.list2}>2. Orientasi
Merupakan awal suatu kejadian atau saat cerita mulai bergulir.</Text>
        <Text style={styles.list2}>3. Krisis
Merupakan puncak cerita yang berisi konflik atau masalah yang terjadi pada karakter.</Text>
        <Text style={styles.list2}>4. Reaksi
Merupakan respon atau reaksi yang dilakukan karakter setelah mengalami krisis.</Text>
        <Text style={styles.list2}>5. Koda
Merupakan bagian penutup teks yang berisi amanat atau kritik.</Text>
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
    height: 1350,
    width: 280,
  },

  headier: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  materi: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'left',
  },
  isi: {
    flexDirection: 'column',
    marginTop: 20,
    fontSize: 13,
    alignSelf: 'left',
  },
  headerlist: {
    marginBottom: 10,
    flexDirection: 'column',
    marginTop: 20,
    fontSize: 13,
    alignSelf: 'left',
  },
  list2: {
    flexDirection: 'column',
    marginTop: 15,
    fontSize: 13,
    alignSelf: 'left',
  },
});
