import React from "react";

const schemas = {
  Person: ["alternateName", "name"],
  Organization: ["legalName", "alternateName", "name"]
};

export default function CopyrightHolderSpan({ copyrightHolderType, children }) {
  if (!copyrightHolderType) {
    return <span>{children}</span>;
  }
  // https://schema.org/Person
  const holderType = copyrightHolderType.toLowerCase().trim();
  if (holderType.substring(0, 6) === "person") {
    return (
      <span
        itemScope
        itemType="http://schema.org/Person"
        vocab="http://schema.org/"
        typeof="Person"
      >
        <span
          itemProp={holderType.includes("alt") ? "alternateName" : "name"}
          property="name"
        >
          {children}
        </span>
      </span>
    );
  }
  // https://schema.org/Organization
  if (holderType.substring(0, 3) === "org" || holderType === "name") {
    return (
      <span itemScope itemType="http://schema.org/Organization">
        <span itemProp="name">{children}</span>
      </span>
    );
  }
  // https://schema.org/Organization
  if (holderType.includes("legalname")) {
    return (
      <span itemScope itemType="http://schema.org/Organization">
        <span itemProp="legalName">{children}</span>
      </span>
    );
  }
  // https://schema.org/Organization
  if (holderType.includes("alternatename")) {
    return (
      <span itemScope itemType="http://schema.org/Organization">
        <span itemProp="alternateName">{children}</span>
      </span>
    );
  }
  throw new Error(
    'Invalid copyrightHolderType. Copyright holder type can be "person" (i.e. personal name), "orgName", "legalName" (for an org), or "alternateName" (for an org).'
  );
}
