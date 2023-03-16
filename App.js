import React from 'react';
import { StyleSheet} from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import * as SplashScreen from 'expo-splash-screen';
import ShopNavigator from './src/navigators/ShopNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [FontsLoaded] = useFonts ({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  React.useEffect(() => {
    if (FontsLoaded){
      SplashScreen()} 
  }, [FontsLoaded])

  if(!FontsLoaded){
    return null;
  }

  return (
      <ShopNavigator/>
  );
}

const styles = StyleSheet.create({});
