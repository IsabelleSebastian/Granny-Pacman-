var backgroundImg, pacman, pacmanImg, ghost, ghostImg, coin, coinImg
var x1, x2, x3, xImg
var base
var endBackground
var gameState = "PLAY"
var score = 0
var hits = 0
var grannyImg, ghostImg
var key1, key1Img, key2, key2Img
var base1,base2,base3,base4,base5,base6,base7,base8,base9,base10,base11,base12,base13,base14,base15,base16,base17,base18,base19,base20
var edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8

function preload(){
    backgroundImg = loadImage("background.jpg")
    pacmanImg = loadImage("face.png")
    ghostImg = loadImage("gameGhost2.png")
    coinImg = loadImage("gold.jpg")
    key1Img = loadImage("wasdKey.png")
    key2Img = loadImage("arrowKey.png")
    xImg = loadImage("x.png")
    grannyWin = loadImage("grannyBkg.jpg")
    ghostWin = loadImage("ghostBkg.jpg")
    }

function setup(){
    createCanvas(displayWidth+210, displayHeight-50);

	pacman = createSprite(600,500)
    pacman.addImage(pacmanImg)
    pacman.scale = 0.3
    pacman.debug = false
    pacman.setCollider("rectangle",20,0,340,340)

    ghost = createSprite(1520,500)
    ghost.addImage(ghostImg)
    ghost.scale = 0.1
    ghost.debug = false
    ghost.setCollider("rectangle",0,20,840,770)

    key1 = createSprite(120,650)
    key1.addImage(key1Img)
    key1.scale = 0.7

    key2 = createSprite(120,450)
    key2.addImage(key2Img)
    key2.scale = 1.7

    //vertical edges
    edge1 = createSprite(0,175,0.1,120)
    edge2 = createSprite(0,830,0.1,120)
    edge3 = createSprite(2130,175,0.1,120)
    edge4 = createSprite(2130,830,0.1,120)
    //horizontal edges
    edge5 = createSprite(615,0,190,0.1)
    edge6 = createSprite(1520,0,210,0.1)
    edge7 = createSprite(615,1030,190,0.1)
    edge8 = createSprite(1520,1030,210,0.1)
    
    bases();
    coins();
}

function draw(){
background(backgroundImg)
    console.log(displayHeight)
edges = createEdgeSprites()
//pacman.collide(edges)
ghost.collide(edges)

if(pacman.isTouching(edge1)||pacman.isTouching(edge2)){
    pacman.x = 2060
}
if(pacman.isTouching(edge3)||pacman.isTouching(edge4)){
    pacman.x = 50
}
if(pacman.isTouching(edge5)||pacman.isTouching(edge6)){
    pacman.y = 970
}
if(pacman.isTouching(edge7)||pacman.isTouching(edge8)){
    pacman.y = 50
}

if(ghost.collide(pacman)){
    hits++
    ghost.x = 1050
    ghost.y = 500
    }

if(hits === 1){
    x1.visible = true
}else if(hits === 2){
    x3.visible = true
}else if(hits === 3){
    x2.visible = true
}

if(score === 26){
    gameState = "GRANNY"
}
if(hits === 3){
    gameState = "GHOST"
}

if(gameState === "GRANNY"){
    endBackground = createSprite(displayWidth/2+100, displayHeight/2)
    endBackground.addImage(grannyWin)
    endBackground.scale = 1.2
}else if(gameState === "GHOST"){
    endBackground = createSprite(displayWidth/2+100, displayHeight/2)
    endBackground.addImage(ghostWin)
    endBackground.scale = 1.2
}

fill("white")
textSize(40)
text("Score: " + score, 1000, 100)

textSize(30)
text("**GOAL: Collect all coins before", 850,800)
text("the ghost can touch you 3 times!!**", 850,850)

text("**GRANNY:", 1700, 470)
text("**Exit the map to reappear", 1700, 500)
text(" on the other side!!**", 1740, 550)

text("Use ARROW KEYS", 200, 400)
text("to control GRANNY!", 210, 440)
text("Use W,A,S,D KEYS", 210, 600)
text("to control GHOST!", 230, 640)

movement();
touch();
collides();
spawnX();


drawSprites();
}

function spawnX(){
    x1 = createSprite(900,250)
    x1.addImage(xImg)
    x1.scale = 0.2
    x1.visible = false
    x2 = createSprite(1200,250)
    x2.addImage(xImg)
    x2.scale = 0.2
    x2.visible = false
    x3 = createSprite(1050,250)
    x3.addImage(xImg)
    x3.scale = 0.2
    x3.visible = false
}

function touch(){
    if(pacman.isTouching(coin1)){
        coin1.destroy()
        score++
    }
    if(pacman.isTouching(coin2)){
        coin2.destroy()
        score++
    }
    if(pacman.isTouching(coin3)){
        coin3.destroy()
        score++
    }
    if(pacman.isTouching(coin4)){
        coin4.destroy()
        score++
                    }
    if(pacman.isTouching(coin5)){
        coin5.destroy()
        score++
    }
    if(pacman.isTouching(coin6)){
        coin6.destroy()
        score++
    }
    if(pacman.isTouching(coin7)){
        coin7.destroy()
        score++
    }
    if(pacman.isTouching(coin8)){
        coin8.destroy()
        score++
    }
    if(pacman.isTouching(coin9)){
        coin9.destroy()
        score++
    }
    if(pacman.isTouching(coin10)){
        coin10.destroy()
        score++
    }
    if(pacman.isTouching(coin11)){
        coin11.destroy()
        score++
    }
    if(pacman.isTouching(coin12)){
        coin12.destroy()
        score++
    }
    if(pacman.isTouching(coin13)){
        coin13.destroy()
        score++
    }
    if(pacman.isTouching(coin14)){
        coin14.destroy()
        score++
    }
    if(pacman.isTouching(coin15)){
        coin15.destroy()
        score++
    }
    if(pacman.isTouching(coin16)){
        coin16.destroy()
        score++
    }
    if(pacman.isTouching(coin17)){
        coin17.destroy()
        score++
    }
    if(pacman.isTouching(coin18)){
        coin18.destroy()
        score++
    }
    if(pacman.isTouching(coin19)){
        coin19.destroy()
        score++
    }
    if(pacman.isTouching(coin20)){
        coin20.destroy()
        score++
    }
    if(pacman.isTouching(coin21)){
        coin21.destroy()
        score++
    }
    if(pacman.isTouching(coin22)){
        coin22.destroy()
        score++
    }
    if(pacman.isTouching(coin23)){
        coin23.destroy()
        score++
    }
    if(pacman.isTouching(coin24)){
        coin24.destroy()
        score++
    }
    if(pacman.isTouching(coin25)){
        coin25.destroy()
        score++
    }
    if(pacman.isTouching(coin26)){
        coin26.destroy()
        score++
    }                   
}

function collides(){
    pacman.collide(base1)
    pacman.collide(base2)
    pacman.collide(base3)
    pacman.collide(base4)
    pacman.collide(base5)
    pacman.collide(base6)
    pacman.collide(base7)
    pacman.collide(base8)
    pacman.collide(base9)
    pacman.collide(base10)
    pacman.collide(base11)
    pacman.collide(base12)
    pacman.collide(base13)
    pacman.collide(base14)
    pacman.collide(base15)
    pacman.collide(base16)
    pacman.collide(base17)
    pacman.collide(base18)
    pacman.collide(base19)
    pacman.collide(base20)
    
    ghost.collide(base1)
    ghost.collide(base2)
    ghost.collide(base3)
    ghost.collide(base4)
    ghost.collide(base5)
    ghost.collide(base6)
    ghost.collide(base7)
    ghost.collide(base8)
    ghost.collide(base9)
    ghost.collide(base10)
    ghost.collide(base11)
    ghost.collide(base12)
    ghost.collide(base13)
    ghost.collide(base14)
    ghost.collide(base15)
    ghost.collide(base16)
    ghost.collide(base17)
    ghost.collide(base18)
    ghost.collide(base19)
    ghost.collide(base20)
}

function movement(){
//pacman movement
pacman.velocityY = 0
pacman.velocityX = 0
if(keyIsDown(UP_ARROW)){
pacman.velocityY = -9
pacman.velocityX = 0
}
if(keyIsDown(RIGHT_ARROW)){
pacman.velocityX = 9
pacman.velocityY = 0
}
if(keyIsDown(DOWN_ARROW)){
pacman.velocityY = 9
pacman.velocityX = 0    
}
if(keyIsDown(LEFT_ARROW)){
pacman.velocityX = -9
pacman.velocityY = 0
}                

//ghost movement
ghost.velocityY = 0
ghost.velocityX = 0
if(keyIsDown(keyCode = 87)){ //w key
ghost.velocityY = -11
ghost.velocityX = 0
}
if(keyIsDown(keyCode = 68)){ //d key
ghost.velocityX = 11
ghost.velocityY = 0
}
if(keyIsDown(keyCode = 83)){ //s key
ghost.velocityY = 11
ghost.velocityX = 0    
}
if(keyIsDown(keyCode = 65)){ //a key
ghost.velocityX = -11
ghost.velocityY = 0
}  

}

function bases(){
    base1 = createSprite(250,250,500,10)
    base1.shapeColor = "white"
    base2 = createSprite(250,100,500,10)
    base2.shapeColor = "white"
    base3 = createSprite(250,750,500,10)
    base3.shapeColor = "white"
    base4 = createSprite(250,900,500,10)
    base4.shapeColor = "white"
    base5 = createSprite(1900,250,500,10)
    base5.shapeColor = "white"
    base6 = createSprite(1900,100,500,10)
    base6.shapeColor = "white"
    base7 = createSprite(1900,750,500,10)
    base7.shapeColor = "white"
    base8 = createSprite(1900,900,500,10)
    base8.shapeColor = "white"
    base9 = createSprite(1050,585,650,10)
    base9.shapeColor = "white"
    base10 = createSprite(1050,400,650,10)
    base10.shapeColor = "white"
    //vertical lines
    base11 = createSprite(500,500,10,510)
    base11.shapeColor = "white"
    base12 = createSprite(730,200,10,400)
    base12.shapeColor = "white"
    base13 = createSprite(730,840,10,500)
    base13.shapeColor = "white"
    base14 = createSprite(1380,200,10,410)
    base14.shapeColor = "white"
    base15 = createSprite(1370,840,10,510)
    base15.shapeColor = "white"
    base16 = createSprite(1650,500,10,510)
    base16.shapeColor = "white"                
    base17 = createSprite(500,50,10,110)
    base17.shapeColor = "white"
    base18 = createSprite(500,965,10,140)
    base18.shapeColor = "white"
    base19 = createSprite(1650,50,10,110)
    base19.shapeColor = "white"
    base20 = createSprite(1650,965,10,140)
    base20.shapeColor = "white"	
}

function coins(){
    coin1 = createSprite(100,180)
	coin2 = createSprite(300,180)
	coin3 = createSprite(500,180)
	coin4 = createSprite(620,50)
	coin5 = createSprite(620,250)
	coin6 = createSprite(620,450)
	coin7 = createSprite(620,650)
	coin8 = createSprite(620,850)
	coin9 = createSprite(50,830)
	coin10 = createSprite(250,830)
	coin11 = createSprite(450,830)
	coin12 = createSprite(1700,830)
	coin13 = createSprite(1900,830)
	coin14 = createSprite(2100,830)
	coin15 = createSprite(1700,180)
	coin16 = createSprite(1900,180)
	coin17 = createSprite(2100,180)
	coin18 = createSprite(1520,50)
	coin19 = createSprite(1520,250)
	coin20 = createSprite(1520,450)
	coin21 = createSprite(1520,650)
	coin22 = createSprite(1520,850)
	coin23 = createSprite(800,500)
	coin24 = createSprite(1000,500)
	coin25 = createSprite(1200,500)
	coin26 = createSprite(1400,500)
		
	//-------------- coin images ----------------
	
	coin1.addImage(coinImg)
	coin2.addImage(coinImg)
	coin3.addImage(coinImg)
	coin4.addImage(coinImg)
	coin5.addImage(coinImg)
	coin6.addImage(coinImg)
	coin7.addImage(coinImg)
	coin8.addImage(coinImg)
	coin9.addImage(coinImg)
	coin10.addImage(coinImg)
	coin11.addImage(coinImg)
	coin12.addImage(coinImg)
	coin13.addImage(coinImg)
	coin14.addImage(coinImg)
	coin15.addImage(coinImg)
	coin16.addImage(coinImg)
	coin17.addImage(coinImg)
	coin18.addImage(coinImg)
	coin19.addImage(coinImg)
	coin20.addImage(coinImg)
	coin21.addImage(coinImg)
	coin22.addImage(coinImg)
	coin23.addImage(coinImg)
	coin24.addImage(coinImg)
	coin25.addImage(coinImg)
	coin26.addImage(coinImg)
	
	coin1.scale = 0.07
	coin2.scale = 0.07
	coin3.scale = 0.07
	coin4.scale = 0.07
	coin5.scale = 0.07
	coin6.scale = 0.07
	coin7.scale = 0.07
	coin8.scale = 0.07
	coin9.scale = 0.07
	coin10.scale = 0.07
	coin11.scale = 0.07
	coin12.scale = 0.07
	coin13.scale = 0.07
	coin14.scale = 0.07
	coin15.scale = 0.07
	coin16.scale = 0.07
	coin17.scale = 0.07
	coin18.scale = 0.07
	coin19.scale = 0.07
	coin20.scale = 0.07
	coin21.scale = 0.07
	coin22.scale = 0.07
	coin23.scale = 0.07
	coin24.scale = 0.07
	coin25.scale = 0.07
	coin26.scale = 0.07
	
}