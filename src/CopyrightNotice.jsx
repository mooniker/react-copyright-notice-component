import React from 'react'
import { number, string } from 'prop-types'
import Copymark from './Copymark'
import CopyrightYearSpan from './CopyrightYearSpan'
import CopyrightHolderSpan from './CopyrightHolderSpan'

const {
  DEFAULT_COPYRIGHT_NOTICE_CLASSNAME = 'copyright-notice',
  DEFAULT_RIGHTS_STATEMENT = 'All rights reserved.'
} = process.env

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
    {rightsStatement && (
      <>
        {periodAsNeeded(copyrightHolder, rightsStatement)}
        <RightsStatementSpan
          className={rightsStatementClassName}
          rightsStatement={rightsStatement}
        />
      </>
    )}
  </span>
)

CopyrightNotice.propTypes = {
  className: string,
  mark: string,
  markClassName: string,
  year: number,
  yearRangeClassName: string,
  copyrightHolder: string,
  copyrightHolderClassName: string,
  copyrightHolderType: string,
  rightsStatement: string,
  rightsStatementClassName: string
}

export const RightsStatementSpan = ({
  rightsStatement = DEFAULT_RIGHTS_STATEMENT
}) => <span>{rightsStatement}</span>

RightsStatementSpan.propTypes = {
  rightsStatement: string
}

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
