import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import CopyrightNotice, { DEFAULT_COPYRIGHT_NOTICE_CLASSNAME, periodAsNeeded } from './'

const COPYMARK_UTF8 = '\xA9'
// const COPYMARK_UTF16 = 'x00A9'

const currentYear = new Date().getFullYear()
let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('CopyrightNotice component', () => {
  test('should create generic notice with current year if no props specified', () => {
    act(() => {
      render(<CopyrightNotice />, container)
    })
    const regex = COPYMARK_UTF8 + ' ' + currentYear
    expect(container.textContent).toMatch(regex)
  })

  test('should create generic notice with current year and given copyright symbol', () => {
    act(() => {
      render(<CopyrightNotice mark='(c)' />, container)
    })
    const regex = '(c) ' + currentYear
    expect(container.textContent).toMatch(regex)
  })

  test('should create generic notice (no copyright holder named) with given year', () => {
    act(() => {
      render(<CopyrightNotice year={1999} />, container)
    })
    const regex = COPYMARK_UTF8 + ' ' + 1999
    expect(container.textContent).toMatch(regex)
  })

  const llcName = 'ABC LLC'

  test('should create generic notice with current year (not specified) and given copyright holder (unspecified type)', () => {
    act(() => {
      render(<CopyrightNotice copyrightHolder={llcName} />, container)
    })
    const regex = [COPYMARK_UTF8, currentYear, llcName].join(' ')
    expect(container.textContent).toMatch(regex)
  })

  test('should create notice for given copyright holder (unspecified type) and given year range', () => {
    const year = '2009'
    act(() => {
      render(
        <CopyrightNotice year={year} copyrightHolder={llcName} />,
        container
      )
    })
    const regex = [COPYMARK_UTF8, year, llcName].join(' ')
    expect(container.textContent).toMatch(regex)
  })
})

describe('default className for CopyrightNotice component', () => {
  test('should be defined as "copyright-notice"', () => {
    expect(DEFAULT_COPYRIGHT_NOTICE_CLASSNAME).toBe('copyright-notice')
  })
})

describe('periodAsNeededBetween function', () => {
  test('should return empty string if no rights statement supplied', () => {
    expect(periodAsNeeded('ABC LLC')).toBe('')
  })

  test('should not include period but return a space if copyright holder string aleady ends with a period and rights statement to follow supplied', () => {
    expect(periodAsNeeded('ABC LLC.', 'All rights reserved.')).toBe(' ')
  })

  test('should return a period (if not redundant) and a space if a rights statement is supplied', () => {
    expect(periodAsNeeded('ABC LLC', 'All rights reserved.')).toBe('. ')
  })
})
