fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
    .then(jokeData =>{
        jokeText = jokeData.attachments[0].text;
        jokeElement = document.getElementById("id");
        jokeElement.innerHTML = jokeText;
    })