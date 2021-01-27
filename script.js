const input = document.querySelector('.cmd-input');
const caret = document.querySelector('.caret')
const cmdWindow = document.querySelector('#window-content');
const githubAnchor = document.querySelector('.github > a');
const instaAnchor = document.querySelector('.insta > a');
const youtubeAnchor = document.querySelector('.youtube > a');
const notionAnchor = document.querySelector('.notion > a');
const solvedAnchor = document.querySelector('.solved > a');
const dontPrint = ['Control', 'Alt', 'Shift', 'CapsLock', 'Tab', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'BrowserHome', 'ContextMenu', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown', 'ScrollLock', 'Pause', 'Escape', 'OS', 'Meta'];
input.textContent = "";
let command = "";


document.body.onkeydown = (event) => {
    if(dontPrint.includes(event.key)){
        return;
    }
    else if(event.key === 'Backspace'){
        command = command.substring(0, command.length-1);
        input.textContent = command;
        return;
    }
    else if(event.key === 'Enter'){
        if(command === 'github')
            githubAnchor.click();
        else if(command === 'instagram')
            instaAnchor.click();
        else if(command === 'youtube')
            youtubeAnchor.click();
        else if(command === 'notion')
            notionAnchor.click();
        else if(command === 'solved.ac')
            solvedAnchor.click();

        command = "";
        input.textContent = command;    
        return;
    }

    command += event.key;
    input.textContent = command;
    
}

let blink = true;
setInterval(() => {
    if(blink){
        caret.style.backgroundColor = "#aaa";
        blink = false;
    }
    else{
        caret.style.backgroundColor = "#000";
        blink = true;
    }
}, 600)
