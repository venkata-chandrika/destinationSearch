// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchRes = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="element-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChange}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="card-container">
            {searchRes.map(each => (
              <DestinationItem key={each.id} destinationDetailsList={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
