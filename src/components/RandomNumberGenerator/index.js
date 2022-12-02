import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerateNumber = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button
            className="button-generate"
            type="button"
            onClick={this.onGenerateNumber}
          >
            Generate
          </button>
          <p className="num-count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
