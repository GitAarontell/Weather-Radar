export function capitalizeFirstLetters(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newStr = str[i].toUpperCase();
        } else if (str[i] === ' ' && (i + 1 < str.length)) {
            newStr += ' ' + str[i + 1].toUpperCase();
        } else {
            if (str[i - 1] !== ' ') {
                newStr += str[i];
            }
        }
    }
    return newStr;
}