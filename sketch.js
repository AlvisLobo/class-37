var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car_image1; 
var car_image2; 
var car1;
var car2;
var cars = [] ; 
var track; 


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car_image1 = loadImage("./assets/car1.png");
  car_image2 = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg"); 


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
        background(backgroundImage);
        if (playerCount ===  2){
          game.update(1); 

        }
        if(gameState === 1 )
        {
          game.play(); 

        }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
