import React from 'react'
import { string } from 'prop-types'

function Copymark ({ mark }) {
  return typeof mark === 'string' ? <span>{mark}</span> : <abbr>&copy;</abbr>
}

Copymark.propTypes = {
  mark: string
}

export default Copymark
