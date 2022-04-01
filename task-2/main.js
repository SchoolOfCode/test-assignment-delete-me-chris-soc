const element = document.querySelector('p');

let value = parseInt(element.innerText);

const count = () => {
    if (value >= 12) {
        clearInterval(counter);
        return;
    }
    
    value +=1;
    element.innerText = value;
}

const counter = setInterval(count, 1000);