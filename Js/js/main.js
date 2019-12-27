function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'you clicked button';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}