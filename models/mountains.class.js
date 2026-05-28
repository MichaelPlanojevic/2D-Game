class MountainsObject {
    constructor() {
        this.sprite = new Image();
        this.sprite.src = 'img/nature_1/mountain.png';
        this.loaded = false;
        this.sprite.onload = () => {
            this.loaded = true;
        };
    }

    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(
            this.sprite,
            0, 300,   // source: ab y=0
            800, 400, // source: 400px hoch
            0, 200,   // dest: y position
            800, 600  // dest: hoeher strecken
        );
    }
}