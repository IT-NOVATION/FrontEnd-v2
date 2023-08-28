const MAX_LENGTH = 9;

export function cutMovieTitleText(text: string) {
  return text.length > MAX_LENGTH ? text.slice(0, 8).concat('...') : text;
}
