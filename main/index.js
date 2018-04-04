import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import SearchApp from '../components/SearchApp'

function App() {
  return (
    <div className="container">
      <SearchApp />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)