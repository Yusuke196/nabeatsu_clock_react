import React from 'react'
import 'moment/locale/ja'
import 'moment/locale/zh-cn'
import 'moment/locale/fr'

const Clock = ({ lang, datetime }) => {
  if (lang === 'ch') {
    lang = 'zh-cn'
  }

  let date = datetime.locale(lang).format('llll')
  let time = datetime.locale(lang).format('LT')
  let second = datetime.locale(lang).second()
  let str = null

  // 曜日を表示させるため上でMomentオブジェクトにformat('llll')メソッドを使っているが、これだと表示されてしまう時間の部分を、dateから取り除く処理
  if (lang === 'ja' || lang === 'zh-cn') {
    const array = date.split(' ')
    date = array[0]
  } else {
    const array = date.split(' ')
    date = array.slice(0, 4).join(' ')
  }

  // console.log(lang, datetime.locale(lang).format('llll'))

  if ((second % 3 === 0 && second !== 0) || (second.toString().indexOf(3) !== -1)) {
    if (lang === 'ja' || lang === 'zh-cn') {
      str = second.toString() + '秒！'
    } else {
      str = second.toString() + ' !'
    }
  } else {
    str = '...'
  }

  return (
    <div>
      <p id='date'>{date}</p>
      <p id='time'>{time}</p>
      <p id='second'>{str}</p>
    </div>
  )
}

export default Clock
