import React from "react";
import CopyrightYearSpan from "./CopyrightYearSpan";
import CopyrightHolderSpan from "./CopyrightHolderSpan";
import RightsStatementSpan from "./RightsStatementSpan";
import { DEFAULT_COPYRIGHT_NOTICE_CLASSNAME } from "./";

const Copymark = ({ mark }) =>
  mark ? <span>{mark}</span> : <span>&copy;</span>;

export const periodAsNeededBetween = (holder, rightsStatement) => {
  if (!rightsStatement) {
    return "";
  }
  if (holder.trim().endsWith(".")) {
    return " ";
  }
  return ". ";
};

const CopyrightNotice = ({
  className = DEFAULT_COPYRIGHT_NOTICE_CLASSNAME,
  mark,
  markClassName = className + "-mark",
  year = new Date().getFullYear(),
  yearRangeClassName = className + "-year-range",
  copyrightHolder,
  copyrightHolderClassName = className + "-copyright-owner",
  copyrightHolderType,
  rightsStatement,
  rightsStatementClassName = className + "-rights-statement"
}) => (
  <span className={className}>
    <Copymark mark={mark} className={markClassName}></Copymark>{" "}
    <CopyrightYearSpan
      className={yearRangeClassName}
      year={year}
    ></CopyrightYearSpan>{" "}
    <CopyrightHolderSpan
      className={copyrightHolderClassName}
      copyrightHolderType={copyrightHolderType}
      itemProp="copyrightHolder"
    >
      {copyrightHolder}
    </CopyrightHolderSpan>
    {periodAsNeededBetween(copyrightHolder, rightsStatement)}
    <RightsStatementSpan
      className={rightsStatementClassName}
      rightsStatement={rightsStatement}
    ></RightsStatementSpan>
  </span>
);

export default CopyrightNotice;
