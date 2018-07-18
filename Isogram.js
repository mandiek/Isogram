function isIsogram(str) {

    var word = str.split(''); //split the word into an array
    for (var i = 0, j = 1; i < word.length - 1; i++, j++) {
        if (word[i] == word[j]) { //check if the character right after the current is the same
            //as the current character
            console.log('Not');
            return Not isogram; //if it is - it's not an isogram
        }
    }
    console.log('Isogram');
    return isogram; //loop has passed - it's an isogram
}

isIsogram("background");
isIsogram("baackground");