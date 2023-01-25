//Task 1
// let city: string = 'Київ';
// city = 'Львів';
// let address: string = city;
// console.log(address);

//Task 2
// function getNumber(number: number = +prompt(" Введіть число ")): void {
//     (number == 0) ? alert('Число 0') :  (number % 2 == 0) ? alert('Число парне') : alert('Число непарне');
// }
// getNumber()


//Task 3
// function maxElement(...arr: number[]): string {
//     let max: number = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return `Максимальне число ${max}`
// }
// console.log(maxElement(4, 11, 3));



// Task 4
// function getSqrt(number: number = +prompt(" Введіть число ")): string {
//     let sum: number = 0;
//     let result: string;
//     if (number > 0) {
//         sum += Math.sqrt(number);
//         result = "Корінь з числа = " + sum;
//     } else if (isFinite(number) != true) {
//         result = "Повинно бути числове значення";
//     } else if (number == null || number == 0) {
//         result = "Ви нічого не ввели";
//     } else if (number < 0) {
//         result = "Введіть додатнє число";
//     }
//     return result;
// }
// console.log(getSqrt());


//Task 5
const input_text: any = document.querySelector('.input_text');
const text_area: any = document.querySelector('.text_area');
const btn_add: any = document.querySelector('.btn_add');
const btn_reset: any = document.querySelector('.btn_reset');
const bad_words: any = document.querySelector('.bad_words');
const btn_cenzor: any = document.querySelector('.cenzor');


let arrBadWords: Array<string> = ['java', 'css'];
let filterText: string = '';

function addWord(): void {
    if (input_text.value) {
        arrBadWords.push(input_text.value)
        render()
        input_text.value = '';
        input_text.placeholder = 'word here..'
        input_text.style.outline = 'none';
    } else {
        input_text.placeholder = 'Please write word!'
        input_text.style.outline = '1px solid red';
    }
}

function render(): void {
    bad_words.innerHTML = `<p class="bad_words">Bad Words:<span>${arrBadWords}</span></p>`
}

function reset(): void {
    arrBadWords = [];
    render();
    text_area.value = '';
    input_text.value = '';

}
function cenzor(): void {
    if (text_area.value) {
        const text = text_area.value;
        let textArr: Array<string> = text.split(' ');
        for (let i = 0; i < textArr.length; i++) {
            for (let j = 0; j < arrBadWords.length; j++) {
                if (textArr[i] == arrBadWords[j]) {
                    let replaceWord: string = textArr[i].replace(/\S/gi, '*');
                    textArr[i] = replaceWord;
                }
            }
        }
        filterText = textArr.join(' ')
        text_area.value = filterText;
    }

}

btn_reset.addEventListener('click', reset)
btn_add.addEventListener('click', addWord)
btn_cenzor.addEventListener('click', cenzor)

input_text.addEventListener('input', () => {
    input_text.style.outline = '1px solid #74b9ff';
})

input_text.addEventListener('blur', () => {
    input_text.style.outline = 'none';
})

