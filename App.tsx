import * as React from 'react';

import AppStack from './src/navigation/stacks/AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import GlobalState from './src/contexts/GlobalState';

const App = () => {
  return (
    <GlobalState>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />
        <AppStack />
      </SafeAreaProvider>
    </GlobalState>
  );
};

export default App;
