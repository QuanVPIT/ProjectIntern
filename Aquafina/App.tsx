/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native/types';
import Guide from './src/components/Guide';
import Home from './src/components/Home';
import ScreenNavigation from './src/components/ScreenNavigation';
import Start from './src/components/Start'
function App(): JSX.Element {
  return (
    <ScreenNavigation />
  );
}
export default App; 
