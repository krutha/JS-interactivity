console.log('conected')

 document.querySelector("form").addEventListener("submit", addMovie);
let  message = document.querySelector("#message")
function addMovie(event){
     event.preventDefault();
let  inputField = document.querySelector("input");

const movie = document.createElement("li");

const  movieTitle = document.createElement("span");
movieTitle.textContent=inputField.value;
 movie.appendChild(movieTitle)
 movieTitle.addEventListener("click",crossOffMovie);

  

  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "x";

  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)

  const list = document.querySelector("ul")
  list.appendChild(movie)

  inputField.value = ''
}

function deleteMovie(event){
     event.target.parentNode.remove()
    // message.textContent= `${event.target.parentNode.firtChild.textContent} deleted!`
     message.textContent = "movie name deleted"
    revealMessage()
}
function crossOffMovie(event){
    event.target.classList.toggle("checked")

    if (event.target.classList.contains('checked') === true) {
        // message.textContent = "Movie watched!"
        message.textContent = `${event.target.textContent} watched!`
    }
    else {
        //  message.textContent = "Movie added"
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
   
}
//intermidiate
function  revealMessage(){
     setTimeout(() => {
         message .classList("hide")
     },1000);
}















