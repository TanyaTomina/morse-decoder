const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let letter = '';
        let string = expr.slice(i, i + 10);
        for (let j = 0; j < string.length; j = j + 2) {
            if (string[j] === '1') {
                if (string[j + 1] === '0') {
                    letter = letter + '.';
                } else if (string[j + 1] === '1'){
                    letter = letter + '-';
                }
            } else if (string[j] === '*') {
                letter = ' ';
            }

        }
        if (letter === ' ') {
            word = word + ' ';
        } else {
            word = word + MORSE_TABLE[letter];
        }
    }
    return word;
}

module.exports = {
    decode
}