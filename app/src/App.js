import React, { Component } from 'react'
import './App.css'
import Form from './containers/Form'
import BlogList from './containers/BlogList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <BlogList />
      </div>
    );
  }
}

export default App
