/************************************************
 * SAMPLE DATA
 *************************************************/

const names = ["tommy", "bobby", "jimmy", "tammy", "sammy"];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const ages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

/************************************************
 * LINEAR SEARCH
 *************************************************/
function indexOf<T>(arr: T[], target: T): number {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === target) return i;
  }

  return -1;
}

function includes<T>(arr: T[], target: T): boolean {
  return indexOf(arr, target) !== -1;
}

function find<T>(arr: T[], target: T): T | null {
  const index = indexOf(arr, target);

  if (index > -1) return arr[index];

  return null;
}

// console.log('indexOf(names, "bobby")', indexOf(names, "bobby"));
// console.log('includes(names, "bobby")', includes(names, "bobby"));
// console.log('find(names, "bobby")', find(names, "bobby"));

/************************************************
 * BINARY SEARCH
 *************************************************/

function binaryIndexOf<T>(arr: T[], target: T): number {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const item = arr[middle];

    // Found a match, so return index
    if (item === target) {
      return middle;
      // If middle element is larger than target we've gone too far right
      // meaning the right-side of the arr[middle] is invalid, so decrease the right boundary to arr[middle]
    } else if (item > target) {
      right = middle - 1;
      // If middle element is less than target we've gone too far left
      // meaning the entire left-side of the arr[middle] is invalid, so increase the left boundary to arr[middle]
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

// console.log("binaryIndexOf(ages, 50)", binaryIndexOf(ages, 50));
// console.log("binaryIndexOf(ages, 55)", binaryIndexOf(ages, 55));

/************************************************
 * NAIVE STRING SEARCH
 *************************************************/

function naiveStringSearch(str: string, target: string): number {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < target.length; j += 1) {
      if (str[i + j] !== target[j]) break;
      if (j === target.length - 1) count++;
    }
  }

  return count;
}

// console.log(
//   'naiveStringSearch("no match", "z")',
//   naiveStringSearch("no match", "z")
// );
// console.log('naiveStringSearch("apple", "l")', naiveStringSearch("apple", "l"));
// console.log(
//   'naiveStringSearch("hello helium", "he")',
//   naiveStringSearch("hello helium", "he")
// );

/************************************************
 * KMP STRING SEARCH
 *************************************************/
function buildArrayPattern(pattern: string): number[] {
  const arrayPattern = [0];
  let prefix = 0;
  let suffix = 1;

  while (arrayPattern.length < pattern.length) {
    if (pattern[prefix] === pattern[suffix]) {
      arrayPattern.push(prefix + 1);
      prefix += 1;
      suffix += 1;
    } else if (prefix === 0) {
      arrayPattern.push(0);
      suffix += 1;
    } else {
      prefix = arrayPattern[prefix - 1];
    }
  }

  return arrayPattern;
}

function kmpSearch(text: string, pattern: string): number[] {
  if (pattern === "") return [];

  const arrayPattern = buildArrayPattern(pattern);
  let textIndex = 0;
  let patternIndex = 0;
  const results = [];

  while (text.length - textIndex >= pattern.length - patternIndex) {
    if (pattern[patternIndex] === text[textIndex]) {
      patternIndex += 1;
      textIndex += 1;
    }

    if (patternIndex === pattern.length) {
      results.push(textIndex - patternIndex);
      patternIndex = arrayPattern[patternIndex - 1];
    } else if (
      textIndex < text.length &&
      pattern[patternIndex] !== text[textIndex]
    ) {
      if (patternIndex === 0) {
        textIndex += 1;
      } else {
        patternIndex = arrayPattern[patternIndex - 1];
      }
    }
  }

  return results;
}

function kmpCounter(text: string, pattern: string): number {
  const matches: number[] = kmpSearch(text, pattern);

  return matches.length;
}

console.log('kmpCounter("empty string", "")', kmpCounter("empty string", ""));
console.log('kmpCounter("no match", "z")', kmpCounter("no match", "z"));
console.log('kmpCounter("apple", "l")', kmpCounter("apple", "l"));
console.log(
  'kmpCounter("hello helium", "he")',
  kmpCounter("hello helium", "he")
);
console.log('kmpCounter("abababa", "aba")', kmpCounter("abababa", "aba"));
