class PowerUp {
    constructor(brick) {
        this.colors = [
            "#08605F",
            "#177E89",
            "#177E89",
            "#177E89",
            "#177E89"];
        this.color = "";
        this.isPicked = false;
        this.startTime = null;
        this.x = brick.x;
        this.y = brick.y;
        this.size = 40;
        this.type = this.getRandomInt(0, 5);
        this.isActive = false;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    update(platform) {
        this.y++;
        if ((((this.x > platform.x) && (this.x < platform.x + platform.width)) && (this.y + this.size > platform.y) && (this.y < platform.y + platform.height)) && (!this.isPicked)) {
            this.isPicked = true;
            this.startTime = Date.now();
            this.isActive = true;
        }
        if (this.isActive) {
        }
        if (Date.now() - this.startTime > 5000) {
            this.isActive = false;
        }

        if (!this.isPicked) {
            const ctx = myArea.context;
            ctx.fillStyle = this.colors[this.type];
            ctx.fillRect(this.x, this.y, this.size, this.size);

            ctx.font = "15px Arial";
            ctx.fillStyle = "black";

            switch (this.type) {
                case 0:
                    ctx.fillText("x2", this.x + this.size / 3, this.y + 2 * this.size / 3);
                    break;
                case 1:
                    ctx.fillText(">=<", this.x + this.size / 3, this.y + 2 * this.size / 3);
                    break;
                case 2:
                    ctx.fillText("rewers", this.x + this.size / 3, this.y + 2 * this.size / 3);
                case 3:
                    ctx.fillText("x5", this.x + this.size / 3, this.y + 2 * this.size / 3);
                    break;
                case 4:
                    ctx.fillText("<=>", this.x + this.size / 3, this.y + 2 * this.size / 3);
                    break;
            }


        }
    }

}
