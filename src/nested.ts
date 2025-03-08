import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let arr: Question[] = [...questions];
    arr = arr.filter((question: Question): boolean => question.published);
    return arr;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let arr: Question[] = [...questions];
    arr = arr.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            ),
    );
    return arr;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    let arr: Question[] = [...questions];
    arr = arr.filter((question: Question): boolean => question.id === id);
    if (arr.length > 0) {
        return arr[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let arr: Question[] = [...questions];
    arr = arr.filter((question: Question): boolean => !(question.id === id));
    return arr;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    let arr: Question[] = [...questions];
    return arr.map((question: Question): string => question.name);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let arr: Answer[] = [];
    questions.forEach((question: Question): void => {
        arr.push({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        });
    });
    return arr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    let arr: Question[] = [...questions];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = { ...arr[i], published: true };
    }
    return arr;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let arr: Question[] = [...questions];
    arr.push(makeBlankQuestion(id, name, type));
    return arr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let arr: Question[] = [...questions];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === targetId) {
            arr[i] = { ...arr[i], name: newName };
        }
    }
    return arr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let arr: Question[] = [...questions];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === targetId) {
            let options: string[] = [...arr[i].options];
            if (targetOptionIndex === -1) {
                options.push(newOption);
            } else {
                options[targetOptionIndex] = newOption;
            }
            arr[i] = { ...arr[i], options: options };
        }
    }
    return arr;
}
