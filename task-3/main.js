const element = document.getElementById('cat-here');
const url = 'https://api.thecatapi.com/v1/images/search';
const loading = 'https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.webp';

const getCat = async () => {
    element.src=loading;

    let data = await fetch(url)
    let jsonData = await data.json();
    
    element.src=jsonData[0].url;
    element.style.width = 200;
    element.style.height = 200;
};

getCat();

const button = document.createElement('button');

button.innerText = 'Get New Cat';

button.addEventListener('click', getCat);

document.body.appendChild(button);