const testStr = "My dog's name is Charlie";

const findFirstNonRepeated = (str: String) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() == str[j].toLowerCase()) {
        i++;
      }
    }
    return str[i];
  }
};

const answer = findFirstNonRepeated(testStr);
console.log(answer);
