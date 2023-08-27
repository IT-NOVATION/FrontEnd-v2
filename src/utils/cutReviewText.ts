const MAX_REVIEW_LENGTH = 200;

export default function cutReviewText(text: string) {
  if (text.replace(/<[^>]*>?/g, '').length > MAX_REVIEW_LENGTH) {
    return text
      .replace(/<[^>]*>?/g, '')
      .replace(/\n?/g, '')
      .replace(/&nbsp;/g, '')
      .slice(0, MAX_REVIEW_LENGTH)
      .concat('...');
  } else return text.replace(/<[^>]*>?/g, '');
}
