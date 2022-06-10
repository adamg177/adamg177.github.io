class Assets {

    constructor(width, height, x, y, imageSrc) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.imageSrc = imageSrc;
    }

    update() {
        const image = new Image();
        image.src = this.imageSrc;

        const ctx = myArea.context;
        ctx.drawImage(image, this.x, this.y, this.width, this.height);

    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

}
