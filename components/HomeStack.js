import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SplashScreen from './SplashScreen';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const screens = {
    SplashScreen:{
        screen: SplashScreen,
        navigationOption: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOption: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOption: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOption: {
            header: null
        }
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)
