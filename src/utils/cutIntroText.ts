const MAX_LENGTH = 15;

export function cutIntroText(text: string) {
  return text.length > MAX_LENGTH ? text.slice(0, 14).concat('...') : text;
}
