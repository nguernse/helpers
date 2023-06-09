export type MaxLength = number | undefined;
export type TextSuffix = string | undefined;

export const truncateText = (
  text: string,
  maxLength: MaxLength = 150,
  suffix: TextSuffix = "..."
): string => {
  let result: string = text;

  if (text.length < maxLength) {
    return result;
  }

  result = text.slice(0, maxLength).trim();
  result += suffix;

  return result;
};
