let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dogs-playing.jpg') {
      myImage.setAttribute ('src','images/dogs-2-resize.jpg');
    } else {
      myImage.setAttribute ('src','images/dogs-playing.jpg');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Not on team dog yet? You will be soon, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Not on team dog yet? You will be soon, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }