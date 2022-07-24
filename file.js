container = document.querySelector(".container")

large = 16;
max_large = 32;

matrix = []

// Render Squares
function renderSquares(){
  container.innerHTML = ''
  
  for(y=0; y < large; y++){
    //~ row = []
    for(x=0; x <large; x++){
      div = document.createElement('div')
      
      // i = y*large + x
      //div.innerText = i
      
      div.setAttribute('state', 0)
      div.setAttribute('class', 'square')
      
      container.appendChild(div)
      div.addEventListener("click", fillSquare)
      
      //~ row.push('white')
    }
    //~ matrix.push(row)
  }
}

renderSquares()

// setUp Matrix
function setUpMatrix(){
  
  for(y = 0; y < max_large; y++ ){
    row = []
    for(x = 0; x < max_large; x++ ){
      row.push('white')
    }
    matrix.push(row)
    
  }
}

setUpMatrix()


// fill Square
function fillSquare(){
    
  if( checkbox.checked == false){
    this.style.backgroundColor = input_color.value
    this.setAttribute('state', 1)
  }
  else
    toggle(this)

}


// Colors Panel
colors = document.querySelectorAll(".colors")
for( color of colors )
  color.onclick = selectColor

function selectColor(){
   color_selected = this.style.backgroundColor;
   //~ console.log(color_selected)
   
   hexa_color = rgbToHex(color_selected)
   input_color.value = hexa_color
}

function rgbToHex( color_str ){
  chanels = color_str.split('(')
  chanels_str = chanels[1].slice(0,-1)
  
  chanels = chanels_str.split(',')
  r = Number(chanels[0])
  g = Number(chanels[1])
  b = Number(chanels[2])
  
  r = "#"
  for( chanel of chanels ){
    hex_channel = Number(chanel).toString(16)
    if( hex_channel.length == 1)
      hex_channel = '0' + hex_channel
    r += hex_channel
  }
  
  return r
  
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
  
  cleanMatrix()
  
  for(y = 0; y < large; y++)
    for(x = 0; x < large; x++){
      i = y*large + x
      color = squares[i].style.backgroundColor
    
      matrix[y][x] = color
  }
}

//~ save_btn = document.querySelector("#save_image")
//~ save_btn.onclick = saveImage


/***  Load Image ***/
function loadImage(){
  for(y=0; y < large; y++)
    for(x=0; x < large; x++ ){
      i = y*large + x
      squares[i].style.backgroundColor = matrix[y][x]
  }
}

//~ load_btn = document.querySelector("#load_image")
//~ load_btn.onclick = loadImage



