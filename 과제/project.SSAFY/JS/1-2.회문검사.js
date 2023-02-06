function palindrome(str) {
  let str1 = str;
  let str2 = "";
  for (let i = 1; i <= str1.length; i++) {
    str2 += str1[str1.length - i];
  }
  if (str1 === str2) console.log(true);
  else console.log(false);
}

palindrome("level");
palindrome("hi");

// 출력
// palindrome('level') => true
// palindrome('hi') => false
