/* exported isVowel */
function isVowel(char) {
  const regex = /[aeiou]/i;

  if (char.match(regex)) {
    return true;
  } else {
    return false;
  }
}
