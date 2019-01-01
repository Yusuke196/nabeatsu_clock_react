import React from 'react'

const Clock = ({ lang }) => {
  let d = new Date()
  let date = null
  let time = null
  let second = null
  let str = null
  const digit2 = num => {
    const s = '00' + num
    return s.substr(s.length - 2, 2)
  }

  switch (lang) {
    case 'ja':
      date = d.toLocaleDateString() + ' ' + ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'][d.getDay()]
      time = d.getHours() + '時' + d.getMinutes() + '分...'
      second = d.getSeconds()
      break
    case 'en':
      d.setHours(d.getHours() - 14)
      date = d.toLocaleDateString() + ' ' + ['(Sun)', '(Mon)', '(Tue)', '(Wen)', '(Thu)', '(Fri)', '(Sat)'][d.getDay()]
      time = digit2(d.getHours()) + ':' + digit2(d.getMinutes()) + '...'
      second = d.getSeconds()
      break
    case 'ch':
      d.setHours(d.getHours() - 1)
      date = d.toLocaleDateString() + ' ' + ['(日)', '(一)', '(二)', '(三)', '(四)', '(五)', '(六)'][d.getDay()]
      time = d.getHours() + '点' + d.getMinutes() + '分...'
      second = d.getSeconds()
      break
    case 'fr':
      d.setHours(d.getHours() - 8)
      date = d.toLocaleDateString() + ' ' + ['(Dim)', '(Lun)', '(Mar)', '(Mer)', '(Jeu)', '(Ven)', '(Sam)'][d.getDay()]
      time = digit2(d.getHours()) + ':' + digit2(d.getMinutes()) + '...'
      second = d.getSeconds()
      break
    default:
      break
  }

  if ((second % 3 === 0 && second !== 0) || (second.toString().indexOf(3) !== -1)) {
    if (lang === 'ja' || lang === 'ch') {
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
