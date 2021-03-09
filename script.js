let randomjokes = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/'


let jokesEl = document.querySelector('.thejokes');
let punchlineEl = document.querySelector('.punchline')

let fetchJokes = async () => { 

await fetch(randomjokes)
 .then( (response) => response.json() )
 .then( res => {
    let jokes = res.setup;
    let punchline = res.punchline;

    jokesEl.textContent = jokes;
    punchlineEl.textContent = punchline;
})

}
