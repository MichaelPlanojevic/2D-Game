class World {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.character = new Character();
        this.enemies = [new Enemies()];
        this.clouds = new Clouds();
        this.bushes = new Bushes();
        this.ground = new Ground();
        this.grass = new Grass();
        this.background = new Background();
        this.littleTree = new LittleTree();
        this.tree = new Tree();
        this.mountains = new MountainsObject();

        // Warten bis ALLE Sprites geladen sind
        this.waitForAssets().then(() => {
            requestAnimationFrame((ts) => this.animate(ts));
        });
    }

    waitForAssets() {
        const objects = [
            this.character,
            ...this.enemies,
            this.clouds,
            this.bushes,
            this.ground,
            this.grass,
            this.littleTree,
            this.tree,
            this.mountains
        ];

        const promises = objects.map(obj =>
            new Promise(resolve => {
                if (obj.sprite.complete) {
                    obj.loaded = true; // sicherstellen
                    resolve();
                } else {
                    obj.sprite.onload = () => {
                        obj.loaded = true; // ← loaded setzen!
                        resolve();
                    };
                    obj.sprite.onerror = resolve;
                }
            })
        );

        return Promise.all(promises);
    }

    animate(timestamp) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(this.ctx);
        this.mountains.draw(this.ctx);
        this.grass.draw(this.ctx);
        this.bushes.draw(this.ctx);
        this.ground.draw(this.ctx);
        this.clouds.draw(this.ctx);
        this.littleTree.draw(this.ctx);  // ← auskommentieren
        this.tree.draw(this.ctx);        // ← auskommentieren
        this.character.draw(this.ctx, timestamp);
        this.enemies.forEach(e => e.draw(this.ctx, timestamp));
        this.animationId = requestAnimationFrame((ts) => this.animate(ts));
    }
}