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

const questions = [
  {
    question: 'Apa ibu kota Indonesia?',
    options: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'],
    answer: 'Jakarta'
  },
];

export default function Quiz({ navigation }) {
  const [note, setNote] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

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
        <Text style={styles.materi}>Quiz Teks Anekdot</Text>
      {showScore ? (
        <View>
          <Text style={styles.scoreText}>Skor Anda: {score} dari {questions.length}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              title={option}
              onPress={() => handleAnswerButtonClick(option)}
            />
          ))}
        </View>
      )}
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
    backgroundColor: '#9B9898'
  },
  materi: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
