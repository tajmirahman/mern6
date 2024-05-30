

let string = "i fell in love with java script language";
// console.log(string.split(""))

function calculateVowel(text) {
    let count = 0;
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    text.toLowerCase().split("").forEach(element => {

        const isExit = vowel.includes(element);
        if (isExit) {
            count = count + 1;
        }
    });
    return count
}

let result = calculateVowel(string);
console.log(result);