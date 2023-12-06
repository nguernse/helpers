/**
 * Frequency Counter Pattern
 */
function isSame(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1: Record<string, number> = {};
  const frequencyCounter2: Record<string, number> = {};

  for (let i = 0; i < arr1.length; i += 1) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    frequencyCounter1[val1] = (frequencyCounter1[val1] || 0) + 1;
    frequencyCounter2[val2] = (frequencyCounter2[val2] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(isSame([1, 2, 3], [3, 1, 2])); // true
// console.log(isSame([1, 2, 4], [3, 1, 2])); // false
// console.log(isSame([1, 2, 3, 5], [3, 1, 2])); // false

/**
 * Anagrams
 *
 * Assumptions:
 * - Only lowercase letters
 * - All single words
 * - No spaces, punctuation, or special characters
 */
function isAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const frequencyCounter: Record<string, number> = {};

  for (let char of s1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!frequencyCounter[char]) return false;

    frequencyCounter[char] -= 1;
  }

  return true;
}

const testCases = [
  {
    s1: "",
    s2: "",
    expected: true,
  },
  {
    s1: "aaz",
    s2: "zza",
    expected: false,
  },
  {
    s1: "anagram",
    s2: "nagaram",
    expected: true,
  },
  {
    s1: "rat",
    s2: "car",
    expected: false,
  },
  {
    s1: "awesome",
    s2: "awesom",
    expected: false,
  },
  {
    s1: "qwerty",
    s2: "qeywrt",
    expected: true,
  },
  {
    s1: "texttwisttime",
    s2: "timetwisttext",
    expected: true,
  },
];

testCases.forEach(({ s1, s2, expected }) => {
  const result = isAnagram(s1, s2);
  console.log(
    `isAnagram('${s1}', '${s2}') => ${result} (${
      result === expected ? "PASS" : "FAIL"
    })`
  );
});
