import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './screens/Home/HomeScreen';
import Post from './components/Post/Post';

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
}
