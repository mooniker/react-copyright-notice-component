import React from 'react'
import Copymark from './Copymark'
import CopyrightYearSpan from './CopyrightYearSpan'
import CopyrightHolderSpan from './CopyrightHolderSpan'
// import periodAsNeeded from './CopyrightNotice.periodAsNeeded'
import RightsStatementSpan from './RightsStatementSpan'
import { DEFAULT_COPYRIGHT_NOTICE_CLASSNAME } from './'

const CopyrightNotice = ({
  className = DEFAULT_COPYRIGHT_NOTICE_CLASSNAME,
  mark,
  markClassName = className + '-mark',
  year = new Date().getFullYear(),
  yearRangeClassName = className + '-year-range',
  copyrightHolder,
  copyrightHolderClassName = className + '-copyright-owner',
  copyrightHolderType,
  rightsStatement,
  rightsStatementClassName = className + '-rights-statement'
}) => (
  <span className={className}>
    <Copymark mark={mark} className={markClassName} />{' '}
    <CopyrightYearSpan className={yearRangeClassName} year={year} />{' '}
    <CopyrightHolderSpan
      className={copyrightHolderClassName}
      copyrightHolderType={copyrightHolderType}
      itemProp='copyrightHolder'
    >
      {copyrightHolder}
    </CopyrightHolderSpan>
    {periodAsNeeded(copyrightHolder, rightsStatement)}
    <RightsStatementSpan
      className={rightsStatementClassName}
      rightsStatement={rightsStatement}
    />
  </span>
)

/**
 * Joins given copyright holder and stement with comma if needed
 * @param {string} holder - copyright holding entity
 * @param {string} statement - rights statement
 * @returns {string}
 */
export function periodAsNeeded (holder, statement) {
  if (!statement || statement.trim() === '') {
    return ''
  }
  // join holder and statement strings with '. ' (period) only
  // if holder string does not end with punctuation
  return /[.?!]\s*$/.test(holder) ? ' ' : '. '
}

export default CopyrightNotice
