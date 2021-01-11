import React, { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/Content'
import store from './redux/store'
import {Provider} from 'react-redux'
import {setListOfCatBreed} from './redux/actions'
import { Route, Switch} from 'react-router-dom'
import Cat from './components/Cat'

const App = ()=> {
  useEffect(()=>{
    setListOfCatBreed()
  })
  
  return (
    <Provider store={store}>
    <div className="App">
        <Switch>
          <Route path={`/details/:cid`} component={Cat} />
          <Route path="/" component={Content} />
        </Switch>
    </div>
    </Provider>
  );
}

export default App;
