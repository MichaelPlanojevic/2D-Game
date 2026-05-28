class Grass extends DrawableObject {
    constructor() {
        super('img/nature_1/grass.png');
    }

    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(
            this.sprite,
            0, 300,   // source: ab y=300
            300, 110,  // source: 110px hoch
            0, 470,   // dest: y position
            800, 60   // dest: auf 800px strecken
        );
    }
}