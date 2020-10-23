import React from 'react'

const orgProps = ['legalName', 'alternateName', 'name']
const schemas = {
  person: ['alternateName', 'name'],
  organization: orgProps,
  org: orgProps
}

// https://schema.org/Person
export const PersonSpan = ({ nameType = '', children }) => (
  <span
    itemScope
    itemType='http://schema.org/Person'
    vocab='http://schema.org/'
    typeof='Person'
  >
    <span
      itemProp={nameType.includes('alt') ? 'alternateName' : 'name'}
      property='name'
    >
      {children}
    </span>
  </span>
)

// https://schema.org/Organization
export const OrgSpan = ({ nameType = '', children }) => (
  <span itemScope itemType='http://schema.org/Organization'>
    <span itemProp={schemas.org.includes(nameType) ? nameType : 'name'}>
      {children}
    </span>
  </span>
)

export default function CopyrightHolderSpan ({
  copyrightHolderType,
  children
}) {
  if (!copyrightHolderType) {
    return <span>{children}</span>
  }

  const [holderType, nameType] = copyrightHolderType.split(':')

  if (!Object.keys(schemas).includes(holderType.toLowerCase())) {
    throw new Error(
      'Invalid copyrightHolderType. Copyright holder type can be "person" or "organization".'
    )
  }

  if (
    holderType
      .trim()
      .substring(0, 6)
      .toLowerCase() === 'person'
  ) {
    return <PersonSpan nameType={nameType}>{children}</PersonSpan>
  }
  return <OrgSpan nameType={nameType}>{children}</OrgSpan>
}
