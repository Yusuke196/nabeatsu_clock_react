import React from 'react'

const Desc = ({ lang }) => {
  switch (lang) {
    case 'ja':
      return <h2>世界のナベアツが<br />世界の秒数をお知らせする時計です</h2>
    case 'en':
      return <h2>Nabeatsu of the World Announces<br />the Number of Seconds of the World</h2>
    case 'ch':
      return <h2>是世界的邊鐘<br />宣布世界秒数的时钟</h2>
    case 'fr':
      return <h2>Nabeatsu du Monde Annonce<br />le Nombre de Secondes du Monde</h2>
    default:
      break
  }
}

export default Desc
