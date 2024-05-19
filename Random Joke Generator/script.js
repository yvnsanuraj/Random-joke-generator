const text = document.getElementById('joke');
const button = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

button.addEventListener('click', function () {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        this.data = data;
        const joke = data.joke;
        document.text
        text.textContent = joke;
    })
})