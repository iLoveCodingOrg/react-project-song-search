import React from 'react'
import ResultItem from './ResultItem'
import SearchForm from './SearchForm'

export default class SearchApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchForm />
        <ResultItem />
      </div>
    )
  }
}