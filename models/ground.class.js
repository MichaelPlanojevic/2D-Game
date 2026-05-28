class Ground extends DrawableObject {
    constructor() {
        super('img/nature_1/ground.png');
    }

    draw(ctx) {
        if (!this.loaded) return;
        ctx.drawImage(
            this.sprite,
            0, 200,   // source: ab y=200
            576, 124, // source: 124px hoch
            0, 350,   // dest: noch weiter nach oben fuer mehr Abdeckung
            800, 250  // dest: staerker in der Hoehe strecken
        );
    }
}