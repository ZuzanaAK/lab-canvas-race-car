window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
 
  function startGame() {
    let cv = document.getElementById('canvas');
    let ctx = cv.getContext('2d');
    //canvas.style.backgroundColor = 'black'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    addRoad()
    addCar()
    carCollision()
    //carX += carXIncrement
    
    //this is for the car to start moving if right or left is pressed (within the canvas)
    if (isRightArrow && (carX + carWidth < canvas.width) ) {
      carX += carIncrement
    }
    else if (isLeftArrow && (carX > 0) ) {
      carX -= carIncrement
    }
  }  
  
  //adding the image "road"
  let road = ""
  let roadX = 0;
  let roadY = 0;
 
  function addRoad () {
 
    let ctx = canvas.getContext("2d")
    let road = new Image()
    road.src = "images/road.png"
 
    ctx.drawImage(road, roadX, roadY, canvas.width, canvas.height )
 
}
  //adding the image "car" + changing its size
  let car = ""
  let carX = 220;
  let carY = 580;
  let carWidth = 50
  let carXIncrement = 1
 
  function addCar () {
 
    let ctx = canvas.getContext("2d")
    let car = new Image()
    car.src = "images/car.png"
 
    ctx.drawImage(car, carX, carY, carWidth, 100 )
 
  }

  //initially both (right and left) are set false
  let isRightArrow = false;
  let isLeftArrow = false;
  //conditions for pressing left and right (movement defined in the if statement in the startGame ())
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 39 || event.key == 'ArrowRight' ) {
        //console.log(event)
        isRightArrow = true;
        isLeftArrow = false;
        //carX += carXIncrement
      }
    else if (event.keyCode == 37 || event.key == 'ArrowLeft' ) {
        //console.log (event)
        isRightArrow = false;
        isLeftArrow = true;
        //carX -=carXIncrement
      }
    })
  //when right or left button is released, it is set back to false
  document.addEventListener('keyup', (event) => {
    isRightArrow = false;
    isLeftArrow = false;
    })
    
  //so that the car is always within the canvas
  function carCollision() {
    //right
    if (carX > canvas.width - carWidth) {
        carXIncrement = -1
    }
 
    //left
    if (carX - carWidth < 0) {
        carXIncrement = 1
    }
  }
 
  }
 
