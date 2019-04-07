export class Kata {
    static spinWords(words: string) {
        //TODO Have fun :)
        return words.split(' ').map(currentWord => {
            if(currentWord.length > 5) {
                currentWord = currentWord.split('').reverse().join('');
            }
            return currentWord;
        }).join(' ');
    }
}

console.log(Kata.spinWords('Hey fellow warriors'));

const test = 'hjhhj';

if(typeof test === 'string') {
    console.log('Is a string');
} else {
    console.log('Is not a string');
}