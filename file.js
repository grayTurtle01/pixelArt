container = document.querySelector(".container")
container.innerHTML = ''

// Render Squares
for(i=1; i <= 256; i++){
  div = document.createElement('div')
  //div.innerText = i
  
  div.setAttribute('state', 0)
  div.setAttribute('class', 'square')
  
  
  container.appendChild(div)
  div.addEventListener("click", toggle)
}

// Toogle Squares
function toggle(){
  
  state =  this.getAttribute('state') 
 
    if( state == 0){
      this.setAttribute('state', 1)
      //~ this.style.background = 'black'
      this.style.background = input_color.value
    }
    if( state == 1){
      this.setAttribute('state', 0)
      this.style.background = 'white'
    }
}
input_color = document.querySelector("input[type=color]")


// Erase Squares
erase_btn = document.querySelector("#erase")
erase_btn.addEventListener('click', eraseAllSquares)

function eraseAllSquares(){
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    square.style.background = 'white'
    square.setAttribute('state', 0)
  }
}


// Random Draw
random_btn = document.querySelector("#random")
random_btn.addEventListener('click', getRandomDraw)

function getRandomDraw(){
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    
    square.style.background = `rgb(${r}, ${g}, ${b})`
    
    square.setAttribute('state', 1)
  }
}


// GitHub Dream
github_btn = document.querySelector("#github")
github_btn.addEventListener('click', getGithubDream)

function getGithubDream(){
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    r = Math.floor(Math.random()*0)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*0)
    
    square.style.background = `rgb(${r}, ${g}, ${b})`
    
    square.setAttribute('state', 1)
  }
}

// Responsive Design
window.onresize = function(){
  margin = 2;
  width = (window.innerWidth-(margin*16)) / 17
  width = Math.floor(width)
  console.log(width)
  squares = document.querySelectorAll(".square")
  
  for( square of squares){
    square.style.width = width
    square.style.height = width
  }
}

window.onload = function(){
  margin = 2;
  width = (window.innerWidth-(margin*16)) / 17
  width = Math.floor(width)
  console.log(width)
  squares = document.querySelectorAll(".square")
  
  for( square of squares){
    square.style.width = width
    square.style.height = width
  }
}

