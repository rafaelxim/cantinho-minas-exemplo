export const truncateText = (text, wordLimit) => {
  // Split the text into /an array of words
  const wordsArray = text?.split(" ");

  // Check if the text is longer than the word limit
  if (wordsArray?.length > wordLimit) {
    // Join the first 'wordLimit' words back into a string and append an ellipsis
    return wordsArray?.slice(0, wordLimit)?.join(" ") + "...";
  }

  // If the text is shorter than or equal to the limit, return it as it is
  return text;
};
