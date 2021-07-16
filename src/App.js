import React from 'react'
import AuthPage from './components/Auth/AuthPage'
import MainPage from './components/MainPage/MainPage'
import {Route, BrowserRouter} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


class App extends React.Component {

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <AnimatePresence>
                <Route 
                    path="/"
                    exact
                    component={AuthPage}
                    key={1}
                />
                <Route 
                    path="/user"
                    exact
                    component={MainPage}
                    key={2}
                />
          </AnimatePresence>
      </div>
  </BrowserRouter>
    )
  }
}

export default App
