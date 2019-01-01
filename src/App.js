import React from 'react'
import './App.scss'
import Clock from './Clock'
import Desc from './Desc'
import Image from './Image'

class App extends React.Component {
  state = {
    lang: 'ja'
  }

  componentDidMount() {
    var self = this
    setInterval(function () { self.forceUpdate() }, 1000)
  }

  render() {
    return (
      <div className="container">
        <h2 id="description">
          <Desc lang={this.state.lang} />
        </h2>
        <Image />
        <div className="clock">
          <Clock lang={this.state.lang} />
          <fieldset>
            <legend>Language & Time Zone</legend>
            <p>
              <input 
                type="radio"
                name="lang"
                id="ja"
                checked={this.state.lang === 'ja'}
                onChange={() => this.setState({ lang: 'ja' })}
              /> 日本語 / 東京 (JST)
            </p>
            <p>
              <input
                type="radio"
                name="lang"
                id="en"
                checked={this.state.lang === 'en'}
                onChange={() => this.setState({ lang: 'en' })}
              /> English / New York (EST)
            </p>
            <p>
              <input
                type="radio"
                name="lang"
                id="ch"
                checked={this.state.lang === 'ch'}
                onChange={() => this.setState({ lang: 'ch' })}
              /> 汉语 / 北京 (CST)
            </p>
            <p>
              <input
                type="radio"
                name="lang"
                id="fr"
                checked={this.state.lang === 'fr'}
                onChange={() => this.setState({ lang: 'fr' })}
              /> Français / Paris (CET)
            </p>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default App
