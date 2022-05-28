import React from 'react';
import {StoreProvider} from 'easy-peasy';
import {store} from './src/common/store';
import tw, {useDeviceContext} from 'twrnc';
import {Navigation} from './src/screens/Navigation';
import {AppStateProvider} from './src/components/Providers/AppStateProvider';

const App = () => {
  useDeviceContext(tw);

  return (
    <AppStateProvider>
      <StoreProvider store={store}>
        <Navigation />
      </StoreProvider>
    </AppStateProvider>
  );
};
export default App;
