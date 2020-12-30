import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import ContactScreen from "./screens/ContactScreen"
import LearnScreen from "./screens/LearnScreen"
import ErrorScreen from "./screens/ErrorScreen"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/about">
          <AboutScreen />
        </Route>
        <Route exact path="/contact">
          <ContactScreen />
        </Route>
        <Route exact path="/learn">
          <LearnScreen />
        </Route>
        <Route path="*">
          <ErrorScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
