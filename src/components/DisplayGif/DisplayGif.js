/**
 * Displays cat gif
 */

import * as React from 'react'
import * as styles from './styles.css'


/**
 * Renders the cat gif
 */
const DisplayGif = ({url}) => {
  return(
    <div>
      {<img src={url} alt='cat gif'/>}
    </div>
  )
}


export default DisplayGif
