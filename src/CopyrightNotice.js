import React from "react";
import Copymark from "./Copymark";
import CopyrightYearSpan from "./CopyrightYearSpan";
import CopyrightHolderSpan from "./CopyrightHolderSpan";
import periodAsNeeded from "./CopyrightNotice.periodAsNeeded";
import RightsStatementSpan from "./RightsStatementSpan";
import { DEFAULT_COPYRIGHT_NOTICE_CLASSNAME } from "./";

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
    <Copymark mark={mark} className={markClassName} />{" "}
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
    {periodAsNeeded(copyrightHolder, rightsStatement)}
    <RightsStatementSpan
      className={rightsStatementClassName}
      rightsStatement={rightsStatement}
    ></RightsStatementSpan>
  </span>
);

export default CopyrightNotice;
