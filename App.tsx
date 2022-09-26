import * as React from 'react';

import AppStack from './src/navigation/stacks/AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <AppStack />
    </SafeAreaProvider>
  );
};

export default App;
