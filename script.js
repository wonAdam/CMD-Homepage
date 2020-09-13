const input = document.querySelector('.cmd-input');
const cmdWindow = document.querySelector('#window-content');
const githubAnchor = document.querySelector('.github > a');
const instaAnchor = document.querySelector('.insta > a');
const youtubeAnchor = document.querySelector('.youtube > a');
const solvedAnchor = document.querySelector('.solved > a');




cmdWindow.addEventListener('click', (e) => {
    input.focus();
})
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      const inputContent = input.innerText.trim().toLowerCase();
      console.log(inputContent)
      input.innerText = "";

        if(inputContent === 'github'){
            githubAnchor.click();
            console.log(inputContent)
        }
        else if(inputContent === 'instagram'){
            instaAnchor.click();
        }
        else if(inputContent === 'youtube'){
            youtubeAnchor.click();
        }
        else if(inputContent === 'solved.ac'){
            solvedAnchor.click();
        }
    }
})