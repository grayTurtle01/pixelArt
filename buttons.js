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
  cleanMatrix()
}

function cleanMatrix(){
  for(y=0; y<max_large; y++)
    for(x=0; x<max_large; x++)
      matrix[y][x] = 'white'
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


// all Blues
allBlue_btn = document.querySelector("#all_blue")
allBlue_btn.addEventListener('click', drawAllBlue)

function drawAllBlue(){
  squares = document.querySelectorAll(".square")
  
  
  for(y=0; y<large; y++ )
    for(x=0; x<large; x++ ){
      
      i = y*large + x
      square = squares[i]
      
      blue = i
      
      square.style.background = `rgb(0, 0, ${blue})`
      
      square.setAttribute('state', 1)
  }
}


// Chess
chess_btn = document.querySelector("#chess")
chess_btn.addEventListener('click', drawChess) 

function drawChess(){
  eraseAllSquares()
  squares = document.querySelectorAll(".square")
  
  for(y=0; y<large; y++ )
    for(x=0; x<large; x += 2 ){
      
      i = y*large + x
      
      if( y % 2 == 0)
        square = squares[i]
      else
        square = squares[i+1]
      
      //~ square.style.background = `rgb(0, 0, 0)`
      square.style.background = input_color.value
      
      square.setAttribute('state', 1)
  }
}


// Mondrian
mondrian_btn = document.querySelector("#mondrian")
mondrian_btn.addEventListener('click', drawMondrian)

function drawMondrian(){
  let opacity = 0.6
  
  //~ colors = ['red','yellow', 'blue', 'white', 'black', 'gray']
  colors = ['red','yellow', 'blue', 'white', 'lightgray']
  colors = [`rgba(255,0,0,${opacity})`,'#FFFD66', `rgba(0,0,255,${opacity})`, 'white', 'lightgray']
  colors = [`rgba(255,0,0,${opacity})`,`rgba(255,255,0, ${opacity})`, `rgba(0,0,255,${opacity})`, 'white', 'lightgray']
 
  
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    
    random_index = Math.floor((Math.random() * colors.length))
    color = colors[random_index]
    
    square.style.background = color
    //~ square.style.opacity = '0.5'
    
    square.setAttribute('state', 1)
  }
}

// Mondrian_2
document.querySelector("#mondrian_2").onclick = function(){
let opacity = 0.6
  
  colors = [`rgba(255,0,0,${opacity})`,`rgba(255,255,0, ${opacity})`, `rgba(0,0,255,${opacity})`,
            'white', 'lightgray',`rgba(0,0,0,${opacity})`,]
  
  squares = document.querySelectorAll(".square")
  for( square of squares ){
    
    random_index = Math.floor((Math.random() * colors.length))
    color = colors[random_index]
    
    square.style.background = color
    //~ square.style.opacity = '0.5'
    
    square.setAttribute('state', 1)
  
}
}
