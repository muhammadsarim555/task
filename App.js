import * as React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';

import ListView from './src/components/List';

console.disableYellowBox = true;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ListView />
      </PersistGate>
    </Provider>
  );
}

export default App;
