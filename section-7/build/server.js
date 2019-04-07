"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.spinWords = function (words) {
        //TODO Have fun :)
        return words.split(' ').map(function (currentWord) {
            if (currentWord.length > 5) {
                currentWord = currentWord.split('').reverse().join('');
            }
            return currentWord;
        }).join(' ');
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.spinWords('Hey fellow warriors'));
var test = 'hjhhj';
if (typeof test === 'string') {
    console.log('Is a string');
}
else {
    console.log('Is not a string');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFVQSxDQUFDO0lBVFUsY0FBUyxHQUFoQixVQUFpQixLQUFhO1FBQzFCLGtCQUFrQjtRQUNsQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVztZQUNuQyxJQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUQ7WUFDRCxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLG9CQUFJO0FBWWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7QUFFbkQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBRXJCLElBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Q0FDOUI7S0FBTTtJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztDQUNsQyJ9