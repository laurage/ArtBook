import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from './store'

import { DraftTimeline } from './containers/DraftTimeline'
import DraftSchedules from './containers/DraftSchedules'
import Heading from './components/Heading'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Provider store={store}>
          <div>
            <div className="box-container-top">
              <Heading/>
            </div>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={DraftTimeline}/>
                <Route exact path='/draftSchedules' component={DraftSchedules}/>
              </Switch>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
