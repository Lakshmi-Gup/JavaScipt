function reverseWords(sentence) {
    
    const words = sentence.split(' ');
  
    
    const reversedWords = words.map(word => word.split('').reverse().join(''));
  
    
    return reversedWords.join(' ');
  }
  
  
  const sentence =prompt("Enter any String");
  const reversedSentence = reverseWords(sentence);
  
  console.log(reversedSentence);