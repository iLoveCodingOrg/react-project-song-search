import React from 'react'

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
  }
  updateText(e){
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <form className="input-group input-group-lg">
        <input type="text"
          className="form-control"
          onChange={this.updateText}
          value={this.state.text}
          />
        <span className="input-group-btn">
          <input
            value="Search"
            type="submit"
            className="btn btn-default"
            onClick={(e)=>{
              e.preventDefault()
              this.props.onSearch(this.state.text)
            }} />
        </span>
      </form>
    )
  }
}