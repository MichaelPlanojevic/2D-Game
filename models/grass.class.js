class Grass extends DrawableObject {
    constructor() {
        super('img/nature_1/grass.png');
    }

    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(
            this.sprite,
            0, 300,   // source: ab y=300
            300, 120,  // source: 110px hoch
            0, 465,   // dest: weiter nach oben
            800, 110  // dest: hoeher strecken
        );
    }
}