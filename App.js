import React, { Component } from 'react'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from './src/navigations/RootStack'
import { store, persistor } from './src/redux/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    )
  }
}
