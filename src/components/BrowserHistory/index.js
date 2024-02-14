import {Component} from 'react'

import './index.css'

import HistorySearch from '../HistorySearch'

class BrowserHistory extends Component {
  state = {inputsearch: ''}

  changesearchinput = event => {
    this.setState({inputsearch: event.target.value})
  }

  deleteclickedlist = id => {
    const {historylist} = this.props
    const remaininglist = historylist.filter(eachlist => eachlist.id !== id)
    this.setState({inputsearch: remaininglist})
  }

  render() {
    const {inputsearch} = this.state
    const {historylist} = this.props
    const searchresults = historylist.filter(eachlist =>
      eachlist.title.toLowerCase().includes(inputsearch.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="searchhistory-container">
          <div className="historylogo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="history-logo"
              alt="app logo"
            />
          </div>
          <div className="searchinput-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search history"
              className="searchinput"
              onChange={this.changesearchinput}
              value={inputsearch}
            />
            <ul className="history-list">
              { searchresults.length === 0 ? (
            <p className="error">There is no history to show</p>
          ) : (   
                searchresults.map(eachlist => (
                <HistorySearch
                  eachlistdetails={eachlist}
                  key={eachlist.id}
                  deleteclickedlist={this.deleteclickedlist}
                />
              )))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
