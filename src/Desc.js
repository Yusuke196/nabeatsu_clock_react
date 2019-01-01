import React from 'react'

const Desc = ({ lang }) => {
  switch (lang) {
    case 'ja':
      return <p>世界のナベアツが<br />世界の秒数をお知らせする時計です</p>
    case 'en':
      return <p>Nabeatsu of the World Announces<br />the Number of Seconds of the World</p>
    case 'ch':
      return <p>是世界的邊鐘<br />宣布世界秒数的时钟</p>
    case 'fr':
      return <p>Nabeatsu du Monde Annonce<br />le Nombre de Secondes du Monde</p>
    default:
      break
  }
}

export default Desc
