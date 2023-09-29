function ransomNote(noteText, magazineText) {
    // Split the noteText and magazineText into arrays of words
    const noteWords = noteText.split(' ');
    const magazineWords = magazineText.split(' ');
  
    // Create an object to store the frequency of words in magazineText
    const wordFrequency = {};
  
    // Count the frequency of each word in magazineText
    for (const word of magazineWords) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  
    // Check if there are enough words in magazineText to construct the noteText
    for (const word of noteWords) {
      if (!wordFrequency[word]) {
        // If the word is not present in magazineText, return false
        return false;
      }
      // Decrease the frequency of the word in magazineText
      wordFrequency[word]--;
    }
  
    // If we reach this point, all words in noteText can be constructed from magazineText
    return true;
  }

  const noteText1 = "this is a secret note to you from a secret admirer";
const magazineText1 = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you";
console.log(ransomNote(noteText1, magazineText1)); // Should print false

const noteText2 = "this is a note to you from a secret admirer";
const magazineText2 = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you";
console.log(ransomNote(noteText2, magazineText2)); // Should print true