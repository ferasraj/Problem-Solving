function _12to24(time) {
  try {
    if (typeof time !== "string") throw "error";

    const regex =
      /^\s*(\d{1,2})\s*:\s*(\d{2})(?:\s*:\s*(\d{2}))?\s*(am|pm)\s*$/i;
    const match = time.match(regex);
    if (!match) throw "error";

    let [, hourStr, minuteStr, secondStr, period] = match;

    let hour = parseInt(hourStr, 10);
    let minute = parseInt(minuteStr, 10);
    let second = secondStr ? parseInt(secondStr, 10) : null;

    if (hour < 1 || hour > 12) throw "error";
    if (minute < 0 || minute > 59) throw "error";
    if (second !== null && (second < 0 || second > 59)) throw "error";

    if (period.toLowerCase() === "am" && hour === 12) hour = 0;
    if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;

    const hh = String(hour).padStart(2, "0");
    const mm = String(minute).padStart(2, "0");
    const ss = second !== null ? ":" + String(second).padStart(2, "0") : "";

    return `${hh}:${mm}${ss}`;
  } catch (e) {
    throw "error";
  }
}
function _24to12(time) {
  try {
    if (typeof time !== "string") throw "error";

    const regex = /^\s*(\d{2})\s*:\s*(\d{2})(?:\s*:\s*(\d{2}))?\s*$/;
    const match = time.match(regex);
    if (!match) throw "error";

    let [, hourStr, minuteStr, secondStr] = match;

    let hour = parseInt(hourStr, 10);
    let minute = parseInt(minuteStr, 10);
    let second = secondStr ? parseInt(secondStr, 10) : null;

    if (hour < 0 || hour > 23) throw "error";
    if (minute < 0 || minute > 59) throw "error";
    if (second !== null && (second < 0 || second > 59)) throw "error";

    let period = hour >= 12 ? "PM" : "AM";
    let hour12 = hour % 12 || 12;

    const mm = String(minute).padStart(2, "0");
    const ss = second !== null ? ":" + String(second).padStart(2, "0") : "";

    return `${hour12}:${mm}${ss} ${period}`;
  } catch (e) {
    throw "error";
  }
}

console.log(_12to24("1:56 AM"));
console.log(_12to24("1:56 PM"));
console.log(_24to12("16:56"));
console.log(_24to12("1:56"));
