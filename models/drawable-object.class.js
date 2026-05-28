class DrawableObject {
    constructor(src, x = 0, y = 0, width = 800, height = 600) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.loaded = false;
        this.sprite = new Image();
        this.sprite.onload = () => { this.loaded = true; };
        this.sprite.src = src;
    }

    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}