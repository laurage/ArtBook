import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './store'

import { DraftTimeline } from './containers/DraftTimeline'
import { DraftSchedules } from './containers/DraftSchedules'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={DraftTimeline}/>
              <Route exact path='/draftSchedules' component={DraftSchedules}/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
