import React from 'react'

const Image = () => {
  const sec = new Date().getSeconds()
  console.log(sec)
  if ((sec % 3 === 0 && sec !== 0) || (sec.toString().indexOf(3) !== -1)) {
    return (
      <div className='image'>
        <img alt='nabeatsu' id='nabeatsu' src='images/photo2.jpg' />
        <p id='note'>Source: http://ent.nikkeibp.co.jp/ent/200805/</p>
      </div>
    )
  } else {
    return (
      <div className='image'>
        <img alt='nabeatsu' id='nabeatsu' src='images/photo1.jpg' />
        <p id='note'>Source: http://www.pia.co.jp/interview/61/</p>
      </div>
    )
  }
}

export default Image
