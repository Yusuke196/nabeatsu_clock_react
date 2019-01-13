import React from 'react'
import moment from 'moment'
import './App.scss'
import Clock from './Clock'
import Desc from './Desc'
import Image from './Image'

const timeZones = {
  ja: 9,
  en: -5,
  ch: 8,
  fr: 1,
}

class App extends React.Component {
  state = {
    lang: 'ja',
    datetime: moment()
  }

  updateTime = lang => {
    const datetime = moment().utcOffset(timeZones[lang] || 9)
    this.setState({
      datetime
    })
  }

  // langに依存したmomentを即時反映するためのメソッド
  setLang = lang => {
    this.setState({lang})
    this.updateTime(lang)
  }

  componentWillMount() {
    // var self = this
    // setInterval(function () { self.forceUpdate() }, 1000)
    const timerId = setInterval(() => {
      this.updateTime(this.state.lang)
      // this.forceUpdate() // アロー関数を使えば、selfは不要
    }, 1000)
    this.setState({timerId})
  }

  componentWillUnmount() {
    // ReactRouterを入れる場合などに備え、setInterval()を止める処理を書いておく
    clearInterval(this.state.timerId)
  }

  render() {
    return (
      <div className="container">
        <h2 id="description">
          <Desc lang={this.state.lang} />
        </h2>
        <Image datetime={this.state.datetime} />
        <div className="clock">
          <Clock lang={this.state.lang} datetime={this.state.datetime} />
          <fieldset>
            <legend>Language & Time Zone</legend>
            <p>
              <input
                type="radio"
                name="lang"
                id="ja"
                checked={this.state.lang === 'ja'}
                onChange={() => this.setLang('ja')}
              /> 日本語 / 東京 (JST)
            </p>
            <p>
              <input
                type="radio"
                name="lang"
                id="en"
                checked={this.state.lang === 'en'}
                onChange={() => this.setLang('en')}
              /> English / New York (EST)
            </p>
            <p>
              <input
                type="radio"
                name="lang"
                id="ch"
                checked={this.state.lang === 'ch'}
                onChange={() => this.setLang('ch')}
              /> 汉语 / 北京 (CST)
            </p>
            <p>
              <input
                type="radio"
                name="lang"
                id="fr"
                checked={this.state.lang === 'fr'}
                onChange={() => this.setLang('fr')}
              /> Français / Paris (CET)
            </p>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default App
