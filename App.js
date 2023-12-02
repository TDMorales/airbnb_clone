import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/Home/HomeScreen';
import Post from './components/Post/Post';
import data from './assets/dummy_data/feed';
import { useFonts, Montserrat_100Thin, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import SearchResults from './screens/SearchResults/SearchResults';
import DestinationSearch from './screens/DestinationSearch/DestinationSearch';
import GuestsPage from './screens/GuestsPage/GuestsPage';


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      {/* <HomeScreen /> */}
      {/* <SearchResults posts={data} /> */}
      {/* <DestinationSearch /> */}
      <GuestsPage />
    </SafeAreaView>
  );
}
