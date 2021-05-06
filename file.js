container = document.querySelector(".container")
container.innerHTML = ''

for(i=1; i <= 1000; i++){
  div = document.createElement('div')
  //div.innerText = i
  
  div.setAttribute('state', 0)
  
  container.appendChild(div)
  div.addEventListener("click", toggle)
  
}

function toggle(){
  
  state =  this.getAttribute('state') 
 
    if( state == 0){
      this.setAttribute('state', 1)
      this.style.background = 'black'
    }
    if( state == 1){
      this.setAttribute('state', 0)
      this.style.background = 'white'
    }
}
