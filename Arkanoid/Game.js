let interval;
isPaused = false;
isEnd = false;
isFirstMode = false;
isSecondMode = false;
isRunning = false;
let points = 0;
let isSidePlatform = false;
let timer = 0;
let button1;
let button2;
let button3;
balls = [];
powerUps = [];
let numberOfBrokenBricks = 0;
let brickValue = 1;
let platformWidth = 128;
let switchControl = false;

var myArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        isRunning = true;
        button1 = undefined;
        button2 = undefined;
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.canvas.style = "text-align:center";
        this.context = this.canvas.getContext("2d");
        let container_block = document.getElementById('Area');
        container_block.appendChild(this.canvas);
        interval = setInterval(updateArea, 20);
        this.canvas.ownerDocument.createElement('button');
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
}

function startGame() {
    if (isFirstMode || isSecondMode) {
        button3.remove();
    }
    powerUps = [];
    this.balls = [];
    this.brick = new Brick();
    timer = 0;
    points = 0;
    if (this.isPaused === false || this.isEnd === true) {
        this.bricks = this.brick.loadMap();
        this.isEnd = false;
        this.isPaused = false;
        clearInterval(interval);
        this.myPlatform = new Assets(platformWidth, 23, 200, 430, "bar.png");
        this.myBall = new Ball(8, "green", 100, 170, isSidePlatform);
        balls.push(this.myBall);
        this.myArea.start();
    } else {
        this.isPaused = false;
    }
}

function startGameTest() {
    if (isRunning) {
        document.getElementById('Area').hidden;
    }

    this.isPaused = false;
    if (typeof button1 === 'undefined') {
        button1 = document.createElement('button');
        button1.innerText = "Tryb 1";
        document.body.appendChild(button1);

        button1.addEventListener("click", function () {
            isFirstMode = true;
            isSecondMode = false;

            choosePaletMode();
        });
    }
    if (typeof button2 === 'undefined') {
        button2 = document.createElement('button');
        button2.innerText = "Tryb 2";
        document.body.appendChild(button2);

        button2.addEventListener("click", function () {
            isSecondMode = true;
            isFirstMode = false;

            choosePaletMode();
        });
    }
}

function choosePaletMode() {
    button1.remove();
    button2.remove();

    button3 = document.createElement('button');
    button3.innerText = "Pozioma platforma";
    document.body.appendChild(button3);
    button3.addEventListener("click", function () {
        isSidePlatform = false;
        startGame();
    });
}

function updateArea() {
    let activePowerUps = [false, false, false, false, false];
    if (this.isPaused === false) {
        this.myArea.clear();
        this.bricks.forEach((brick) => {
            brick.update();
        });
        powerUps.forEach((powerUp) => {
            powerUp.update(this.myPlatform);
            if (powerUp.isActive) {
                activePowerUps[powerUp.type] = true;
            }
        });
        if (activePowerUps[0]) {

            if (activePowerUps[1]) {
                brickValue = 10;
            } else {
                brickValue = 2;
            }

        } else {

            if (activePowerUps[1]) {
                brickValue = 5;
            } else {
                brickValue = 1;
            }
        }

        if (activePowerUps[2]) {
            if (!activePowerUps[3]) {
                this.myPlatform.width = 150;
            }
        } else {
            if (activePowerUps[3]) {
                this.myPlatform.width = 95;
            } else {
                this.myPlatform.width = platformWidth;
            }
        }
        if (activePowerUps[4]) {
            switchControl = true;
        } else {
            switchControl = false;
        }

        for (let i = 0; i < this.balls.length; i++) {
            this.isEnd = this.balls[i].checkEndOfBricks(this.bricks);
            this.balls[i].newPos(this.bricks, this.myPlatform);
            this.balls[i].update();
            this.balls[i].printNumberOfBricks(this.balls, isSidePlatform);
            if (this.balls[i].collisionDown((balls))) {
                this.isEnd = true;
            } else {
                balls.splice(i, 1);
            }
        }

        this.checkPlatformEdgePadding();
        this.myPlatform.newPos();
        this.myPlatform.update();

        timer++;
        if (timer > 300) {
            if (isFirstMode) {
                this.bricks = this.myBall.setRandomBrokenBlock(this.bricks);
            }
            if (isSecondMode) {
                addNewLineBrick();
            }
            timer = 0;
        }
        this.myBall.printNumberOfBricks(new Ball(10, "Black", 100, 170, isSidePlatform));

    } else {
        ctx = myArea.context;
        ctx.font = "40px Arial";
        ctx.fillStyle = "Black";
        ctx.fillText("Stop", 250, 200);
    }
}

function addNewLineBrick() {
    this.bricks.forEach((brick) => {
        brick.y += 31;
    });
    this.bricks.push(
        new Brick(70, 50, 50, 20, "blue", true),
        new Brick(121, 50, 50, 20, "blue", true),
        new Brick(172, 50, 50, 20, "blue", true),
        new Brick(223, 50, 50, 20, "blue", true),
        new Brick(274, 50, 50, 20, "blue", true),
        new Brick(325, 50, 50, 20, "blue", true),
        new Brick(376, 50, 50, 20, "blue", true),
        new Brick(427, 50, 50, 20, "blue", true),
        new Brick(478, 50, 50, 20, "blue", true),
        new Brick(529, 50, 50, 20, "blue", true)
    );

}

function checkPlatformEdgePadding() {
    if ((this.myPlatform.x + this.myPlatform.width >= 635 && (this.myPlatform.speedX > 0)) || (this.myPlatform.x <= 5 && (this.myPlatform.speedX < 0))) {
        this.myPlatform.speedX = 0;
    }
}

function moveleft() {
    if (!switchControl) {
        this.myPlatform.speedX = -5;
    } else {
        this.myPlatform.speedX = 5;
    }
}

function moveright() {
    if (switchControl) {
        this.myPlatform.speedX = -5;
    } else {
        this.myPlatform.speedX = 5;
    }

}
function moveUp() {

    if (switchControl) {
        this.myPlatform.speedY = -5;
    } else {
        this.myPlatform.speedY = 5;
    }

}
function moveDown() {

    if (!switchControl) {
        this.myPlatform.speedY = -5;
    } else {
        this.myPlatform.speedY = 5;
    }

}

function clearmove() {
    this.myPlatform.speedX = 0;
    this.myPlatform.speedY = 0;
}

function pauseGame() {
    var pauseButton = document.getElementById('pauseButton');

    if (this.isPaused === true) {
        pauseButton.value = "Stop";
        this.isPaused = false;
        return 0;
    }
    if (this.isPaused === false) {
        pauseButton.value = "Start";
        this.isPaused = true;
        return 0;
    }

}

window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37: // Left
            moveleft();
            break;
        case 39: // Right
            moveright();
            break;

    }
}, false);

window.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 37: // Left
            clearmove();
            break;
        case 39: // Right
            clearmove();
            break;

    }
}, false);






