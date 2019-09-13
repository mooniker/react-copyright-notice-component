function periodAsNeeded(holder, statement) {
  if (!statement || statement.trim() === "") {
    return "";
  }
  return /[.?!]\s*$/.test(holder) ? " " : ". ";
}

export default periodAsNeeded;
