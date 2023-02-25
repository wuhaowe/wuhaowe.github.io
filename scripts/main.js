let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1110A1DDE276582AD5B156C2AB5450829EA033CA_w728_h410.jpg') {
      myImage.setAttribute('src', 'images/edge-image2.jpg');
    } else {
      myImage.setAttribute('src', 'images/1110A1DDE276582AD5B156C2AB5450829EA033CA_w728_h410.jpg');
    }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Edge 酷毙了,' + myName;
    }
}/*该函数首先调用了 prompt() 函数，与 alert() 类似会弹出一个对话框。但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。接下来将调用 localStorage API，它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。*/ 
if(!localStorage.getItem('name')) {//判断用户是否是第一次进入网站。
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '   Edge 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName;
}