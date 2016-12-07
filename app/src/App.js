import React, { Component } from 'react'
import './App.css'
import Form from './containers/Form'
import BlogList from './containers/BlogList'
import Header from './containers/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <BlogList />
      </div>
    );
  }
}

export default App
