import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'

import { DraftTimeline } from './containers/DraftTimeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Provider store={store}>
          <DraftTimeline />
        </Provider>
      </div>
    );
  }
}

export default App;
