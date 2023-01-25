const input_text = document.querySelector('.input_text');
const text_area = document.querySelector('.text_area');
const btn_add = document.querySelector('.btn_add');
const btn_reset = document.querySelector('.btn_reset');
const bad_words = document.querySelector('.bad_words');
const btn_cenzor = document.querySelector('.cenzor');
let arrBadWords = ['java', 'css'];
let filterText = '';
function addWord() {
    if (input_text.value) {
        arrBadWords.push(input_text.value);
        render();
        input_text.value = '';
        input_text.placeholder = 'word here..';
        input_text.style.outline = 'none';
    }
    else {
        input_text.placeholder = 'Please write word!';
        input_text.style.outline = '1px solid red';
    }
}
function render() {
    bad_words.innerHTML = `<p class="bad_words">Bad Words:<span>${arrBadWords}</span></p>`;
}
function reset() {
    arrBadWords = [];
    render();
    text_area.value = '';
    input_text.value = '';
}
function cenzor() {
    if (text_area.value) {
        const text = text_area.value;
        let textArr = text.split(' ');
        for (let i = 0; i < textArr.length; i++) {
            for (let j = 0; j < arrBadWords.length; j++) {
                if (textArr[i] == arrBadWords[j]) {
                    let replaceWord = textArr[i].replace(/\S/gi, '*');
                    textArr[i] = replaceWord;
                }
            }
        }
        filterText = textArr.join(' ');
        text_area.value = filterText;
    }
}
btn_reset.addEventListener('click', reset);
btn_add.addEventListener('click', addWord);
btn_cenzor.addEventListener('click', cenzor);
input_text.addEventListener('input', () => {
    input_text.style.outline = '1px solid #74b9ff';
});
input_text.addEventListener('blur', () => {
    input_text.style.outline = 'none';
});
