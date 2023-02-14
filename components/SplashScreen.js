import { View, Image } from 'react-native';
import {globalStyle} from '../../globalStyle';

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);

  return (
    <View style={globalStyle.root}>
      <Image
        style={globalStyle.logo}
        source={require('../assets/LOGOANEKOM.png')}
      />
    </View>
  );
};

export default Splash;