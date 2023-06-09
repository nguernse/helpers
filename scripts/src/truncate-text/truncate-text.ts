export type maxLength = number | undefined;
export type textSuffix = string | undefined;

export const truncateText = (
  text: string,
  maxLength: maxLength = 150,
  suffix: textSuffix = "..."
): string => {
  let result: string = text;

  if (text.length < maxLength) {
    return result;
  }

  result = text.slice(0, maxLength).trim();
  result += suffix;

  return result;
};
