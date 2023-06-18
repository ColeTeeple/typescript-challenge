const testStr = "My dog's name is Charlie";

const findFirstNonRepeating = (str: string): string => {
    str = str.toLowerCase();
    const charCount: { [key: string]: number } = {};

    for (let i = 0; i < str.length; i++) {
      charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]] === 1) {
        return str[i];
      }
    }
    return "";
  }

const answer = findFirstNonRepeating(testStr);
console.log(answer);
