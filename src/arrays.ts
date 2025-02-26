/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let output: number[] = [];
    if (numbers.length === 0) {
        return output;
    }
    output.push(numbers[0]);
    output.push(numbers[numbers.length - 1]);
    return output;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let output: number[] = [];
    for (let i: number = 0; i < numbers.length; i++) {
        output.push(numbers[i] * 3);
    }
    return output;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let output: number[] = [];
    for (let i: number = 0; i < numbers.length; i++) {
        if (isNaN(parseInt(numbers[i], 10))) {
            output.push(0);
        } else {
            output.push(parseInt(numbers[i], 10));
        }
    }
    return output;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let output: number[] = [];
    for (let i: number = 0; i < amounts.length; i++) {
        if (isNaN(parseInt(amounts[i].replace("$", "")))) {
            output.push(0);
        } else {
            output.push(parseInt(amounts[i].replace("$", ""), 10));
        }
    }
    return output;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let output: string[] = [];
    for (let i: number = 0; i < messages.length; i++) {
        if (messages[i].endsWith("!")) {
            output.push(messages[i].toUpperCase());
        } else if (messages[i].endsWith("?")) {
            //do nothing
        } else {
            output.push(messages[i]);
        }
    }
    return output;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let output: number = 0;
    for (let i: number = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            output++;
        }
    }
    return output;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    for (let i: number = 0; i < colors.length; i++) {
        if (
            colors[i] !== "red" &&
            colors[i] !== "blue" &&
            colors[i] !== "green"
        ) {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = 0;
    let output: string = "=";
    if (addends.length === 0) {
        return "0=0";
    }
    for (let i: number = 0; i < addends.length; i++) {
        sum += addends[i];
        output += addends[i].toString();
        if (i < addends.length - 1) {
            output += "+";
        }
    }
    return sum.toString() + output;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let output: number[] = [];
    let sum: number = 0;
    let flag: boolean = false;
    for (let i: number = 0; i < values.length; i++) {
        if (values[i] > 0) {
            sum += values[i];
            output.push(values[i]);
        } else if (!flag) {
            output.push(values[i]);
            output.push(sum);
            flag = true;
        } else {
            output.push(values[i]);
        }
    }
    if (!flag) {
        output.push(sum);
    }
    return output;
}
