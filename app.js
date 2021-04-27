const image = document.querySelector('img');
const jokeDiv = document.querySelector("#display-joke");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    getRandomJoke();
});

function getRandomJoke(){
    const ajax = new XMLHttpRequest;
    const url = 'https://api.chucknorris.io/jokes/random';

    ajax.open("GET", url, true);

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDiv.innerHTML = `${data.value}`
        } else {
            this.onerror = this.onerror();
        }
    }
    ajax.send();
}

function onerror(){
    jokeDiv.textContent = "There was an error";
}