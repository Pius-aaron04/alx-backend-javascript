export default function cleanSet(set, startString) {
  let string = '';

  set.forEach((element) => {
    if (startString && element.startsWith(startString)) {
      string += `${element.slice(startString.length)}-`;
    }
  });

  string = string.substring(0, string.length - 1);
  return string;
}
