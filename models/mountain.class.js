class Mountain {
    constructor() {
        this.sprite = new Image();
        this.x = 0;
        this.y = 0;
        this.width = 800;
        this.height = 600;

        this.loaded = false;
        this.sprite.onload = () => {
            this.loaded = true;
        };
        this.sprite.src = 'img/nature_1/mountain.png'; // src NACH onload setzen
    }

    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}