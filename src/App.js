import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import PropsRoute from './components/PropsRoute'
import store from './store'

import { DraftTimeline } from './containers/DraftTimeline'
import Draft from './containers/Draft'
import Heading from './components/Heading'

import data from './assets/data/data'

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
                <PropsRoute exact path="/" component={Draft} data={data.draftTimeline}/>
                <PropsRoute exact path="/draftSchedules" component={Draft} data={data.draftSchedules}/>
                <PropsRoute exact path="/bookArtists" component={Draft} data={data.bookArtists}/>
              </Switch>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;

{/* <Route exact path='/' render={() => DraftSchedules}/>draftTimeline
<Route exact path='/draftSchedules' render={() => DraftSchedules}/> */}