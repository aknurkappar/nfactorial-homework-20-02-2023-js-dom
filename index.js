
// Атрибуты и свойства.
// Task 1 –  Получите атрибут
const myEl = document.querySelector('[data-widget-name]');
const myAttributeValue = myEl.getAttribute("data-widget-name");
const myAttributeValue2 = myEl.dataset.widgetName;

// console.log(myAttributeValue);
// console.log(myAttributeValue2);


// Task 2 – Сделайте внешние ссылки оранжевыми

let links = document.querySelectorAll('ul li a');

links.forEach((element) => {
    const att = element.getAttribute("href");
    if(att.includes("://") &&  (!att.startsWith("http://internal.com")))
    element.style.color = 'orange';

    // console.log(att1);
})



// Поиск элементов

// 1
const myTable = document.querySelector('#age-table');
console.log(myTable);

// 2
const labelElements = myTable.querySelectorAll('label');
console.log(labelElements);

// 3
const tdElements = myTable.querySelectorAll('td');
const firstTdElement = tdElements[0];
console.log(firstTdElement.innerHTML); // Age

// 4
const formElements = document.querySelectorAll('form');
let myForm;

formElements.forEach((element) => {
    if(element.getAttribute("name") == "search"){
        myForm = element;
    }
})
// console.log(formElements);
console.log(myForm);

// 5
const myFormInputs = myForm.querySelectorAll('input');

const firstMyFormInput = myFormInputs[0];
console.log(firstMyFormInput);

// 6
const lastMyFormInput = myFormInputs[myFormInputs.length-1]
console.log(lastMyFormInput);


// Тег в комментарии

let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data );

// что выведет? – "BODY"
// body ішінде барлығы "<!--BODY-->" болып өзгереді
// себебі "body.tagName" "BODY"-ды береді