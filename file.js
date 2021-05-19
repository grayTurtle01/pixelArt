container = document.querySelector(".container")

large = 16;

// Render Squares
function renderSquares(){
  container.innerHTML = ''
  
  for(i=1; i <= large**2; i++){
    div = document.createElement('div')
    //div.innerText = i
    
    div.setAttribute('state', 0)
    div.setAttribute('class', 'square')
    
    container.appendChild(div)
    div.addEventListener("click", fillSquare)
  }
}

renderSquares()


// fill Square
function fillSquare(){
    
  if( checkbox.checked == false){
    this.style.backgroundColor = input_color.value
    this.setAttribute('state', 1)
  }
  else
    toggle(this)

}


/***** Buttons ******/

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


// Flip Coins
flips_btn = document.querySelector("#flips")
flips_btn.addEventListener('click', flipsRandomSquares)

function flipsRandomSquares(){
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    porcent = Math.random()
    if( porcent > 0.5 ){
      square.style.background = `black`
      square.setAttribute('state', 1)
    }
    else{
      square.style.background = `white`
      square.setAttribute('state', 0)
    }
  }
}

// Random Only Primary Colors
primary_btn = document.querySelector("#random_primary")
primary_btn.addEventListener('click', drawRandomPrimaryColors)

function drawRandomPrimaryColors(){
  
  //colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta']
  //colors = ['red', 'green', 'blue', 'yellow']
  //colors = ['red', 'green', 'blue', 'yellow', 'white', 'black']
  //colors = ['red', 'green', 'blue', 'yellow', 'white', 'black', 'gray']
  colors = ['red', 'green', 'blue', 'yellow', 'white']
  
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    
    random_index = Math.floor((Math.random() * colors.length))
    color = colors[random_index]
    
    square.style.background = color
    
    square.setAttribute('state', 1)
  }
}


// Random Grays
grays_btn = document.querySelector("#random_grays")
grays_btn.addEventListener('click', drawRandomGrays)

function drawRandomGrays(){
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    
    g = Math.floor(Math.random()*255)
   
    square.style.background = `rgb(${g}, ${g}, ${g})`
    
    square.setAttribute('state', 1)
  }
}


/***** Modes ******/

// Pencil Mode
pencil_check = document.querySelector("#pencil")
pencil_check.onclick = pencilMode

function pencilMode(){
  
  if(pencil_check.checked == true){
    
    for( square of squares ){
      
      square.onclick = function(){
          //console.log("click works")
      }
    
      square.onmouseover = function(){
        this.style.background = input_color.value
        this.setAttribute('state', 1)
      }
      
    } 
  }
  else{
     for( square of squares )
        square.onmouseover = function(){
        //this.style.background = input_color.value
      }
  
  }
}


// Toogle Squares
checkbox = document.querySelector("input[type=checkbox]")
function toggle(square){
  
  state =  square.getAttribute('state') 
 
    if( state == 0){
      square.setAttribute('state', 1)
      //~ square.style.background = 'black'
      square.style.background = input_color.value
    }
    if( state == 1){
      square.setAttribute('state', 0)
      square.style.background = 'white'
    }
}

input_color = document.querySelector("input[type=color]")


/***** Responsive Design ******/


// Responsive Design
window.onresize = function (){
  //renderSquares()
  reSizeSquares()
}
  
window.onload = reSizeSquares()

function reSizeSquares(){
  radio = document.querySelector("input[name=size]:checked")
  large = radio.value
  //console.log(large)
  
  squares = document.querySelectorAll(".square")
  
  container.style.gridTemplateColumns = `repeat(${large}, 1fr)`
  
  square = squares[0]
  width = square.clientWidth;
  
  for( square of squares){
    square.style.height = width
  }
} 


// Resize Dimensions
radios = document.querySelectorAll("input[name=size]")
for( radio of radios )
  radio.addEventListener("click", resizeBoard)

function  resizeBoard(){
  saveImage()
  //console.log(this.value)
  large = this.value
  renderSquares()
  reSizeSquares()
  pencilMode()
  
  loadImage()
}


/***  Save Image ***/
imagen = []
function saveImage(){
  imagen = Array(large**2)
  
  for(i=0; i < large * large; i++){
    color = squares[i].style.backgroundColor
    imagen[i] = color
  }
}

save_btn = document.querySelector("#save_image")
save_btn.onclick = saveImage


/***  Load Image ***/
function loadImage(){
  for(i=0; i < imagen.length; i++ ){
    squares[i].style.backgroundColor = imagen[i]
  }
}

load_btn = document.querySelector("#load_image")
load_btn.onclick = loadImage



