// function to trim a string to N chars
export function trimString(string, length) {
  return string.length > length ? string.substring(0, length) + '...' : string;
}

// function to format a number with commas as thousands separators
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
