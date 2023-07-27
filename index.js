const displayMultiplicationTable = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};

const isPalindrome = (word = "") => {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word.charAt(i);
  }

  return reversed === word
    ? `${word} is Palindrome`
    : `${word} is not Palindrome`;
};

const cmTokm = (number) => {
  let converted = number / 100000;
  return `${number} cm is ${converted} km`;
};

const formatRupiah = (number = 0) => {
  let numString = number.toString();
  if (numString.length < 4) {
    return `Rp.${numString},00`;
  } else {
    let formattedNumber = "";
    dotSegment = Math.floor((numString.length - 1) / 3);

    for (let i = 1; i <= dotSegment; i++) {
      let index = numString.length - 3 * i;

      if (i === 1) {
        formattedNumber =
          numString.substring(0, index) + "." + numString.substring(index);
      } else {
        formattedNumber =
          formattedNumber.substring(0, index) +
          "." +
          formattedNumber.substring(index);
      }

      //   console.log(formattedNumber);
    }
    return `Rp.${formattedNumber},00`;
  }
};

const removeString = (word = "", toFind = "") => {
  let fistCharIndex = 0;
  let lastCharIndex = toFind.length - 1;
  let isSame = false;
  while (word.length - lastCharIndex !== 0) {
    let wordSlice = word.substring(fistCharIndex, lastCharIndex + 1);
    if (wordSlice === toFind) {
      isSame = true;
      break;
    }
    fistCharIndex++;
    lastCharIndex++;
  }

  if (!isSame) {
    return word;
  }

  let newWord =
    word.substring(0, fistCharIndex) + word.substring(lastCharIndex + 1);
  return newWord;
};

const camelCase = (word = "") => {
  let finalWords = "";
  let isSpace = false;

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      finalWords = finalWords + word[0].toUpperCase();
    } else if (word[i] === " ") {
      isSpace = true;
      finalWords = finalWords + word[i];
    } else if (isSpace) {
      isSpace = false;
      finalWords = finalWords + word[i].toUpperCase();
    } else {
      finalWords = finalWords + word[i];
    }
  }
  return finalWords;
};

const reverseString = (words = "") => {
  let newWord = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newWord = newWord + words.charAt(i);
  }
  return newWord;
};

const caseSwap = (word = "") => {
  let finalWord = "";

  for (let i = 0; i < word.length; i++) {
    let upper = word[i].toUpperCase();
    if (upper === word[i]) {
      finalWord = finalWord + word[i].toLowerCase();
    } else {
      finalWord = finalWord + upper;
    }
  }
  return finalWord;
};

const compare = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

const sort = (num1, num2, num3) => {
  let firstNum = 0;
  let secondNum = 0;
  let thirdNum = 0;

  if (num1 >= num2 && num1 >= num3) {
    thirdNum = num1;
  } else if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
    secondNum = num1;
  } else {
    firstNum = num1;
  }

  if (num2 >= num1 && num2 >= num3) {
    thirdNum = num2;
  } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
    secondNum = num2;
  } else {
    firstNum = num2;
  }

  if (num3 >= num1 && num3 >= num2) {
    thirdNum = num3;
  } else if ((num3 > num1 && num3 < num2) || (num3 < num1 && num3 > num2)) {
    secondNum = num3;
  } else {
    firstNum = num3;
  }

  return `${firstNum}, ${secondNum}, ${thirdNum}`;
};

const typeDetector = (data) => {
  if (typeof data === "string") {
    return 1;
  } else if (typeof data === "number") {
    return 2;
  } else {
    return 3;
  }
};

const changeCharacter = (word = "", toChange = "") => {
  let finalWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === toChange || word[i] === toChange.toUpperCase()) {
      finalWord = finalWord + "*";
    } else {
      finalWord = finalWord + word[i];
    }
  }
  return finalWord;
};

console.log("Multiplication Table");
displayMultiplicationTable(8);
console.log();
console.log("Palindrome");
console.log(isPalindrome("Aba"));
console.log();
console.log("Centimeter to Kilometer");
console.log(cmTokm(100));
console.log();
console.log("Rp currency format");
console.log(formatRupiah(300000000));
console.log();
console.log("Remove");
console.log(removeString("hello world", "el"));
console.log();
console.log("Camel case string");
console.log(camelCase("hello my name"));
console.log();
console.log("Reverse string");
console.log(reverseString("hello my name"));
console.log();
console.log("switch the case");
console.log(caseSwap("The QuiCk BrOwN Fox"));
console.log();
console.log("compare");
console.log(compare(4, 10));
console.log();
console.log("sort");
console.log(sort(40, 60, 10));
console.log();
console.log("Type detector");
console.log(typeDetector(true));
console.log();
console.log("change to '*'");
console.log(changeCharacter("An apple a day keeps the doctor away", "a"));
console.log();
