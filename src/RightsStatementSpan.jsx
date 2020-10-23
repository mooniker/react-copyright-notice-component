import React from 'react'

export const DEFAULT_RIGHTS_STATEMENT = 'All rights reserved.'

export default function RightsStatementSpan ({ rightsStatement }) {
  if (typeof rightsStatement === 'string') {
    return <span>{rightsStatement}</span>
  }
  if (rightsStatement) {
    return <span>{DEFAULT_RIGHTS_STATEMENT}</span>
  }
  return null
}
