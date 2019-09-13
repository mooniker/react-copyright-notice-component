import React from "react";

function Copymark({ mark }) {
  if (typeof mark === "string") {
    return <span>{mark}</span>;
  }
  if (mark === undefined || mark) {
    return <abbr title="Copyright">&copy;</abbr>;
  }
  if (mark === false) {
    return <abbr title="Copyright">(c)</abbr>;
  }
  return <span>Copyright</span>;
}

export default Copymark;
