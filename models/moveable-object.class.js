class MoveableObject extends DrawableObject {
    constructor(src, x, y, frameWidth, frameHeight, totalFrames, fps) {
        super(src, x, y, frameWidth, frameHeight);
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.totalFrames = totalFrames;
        this.frameDuration = 1000 / fps;
        this.currentFrame = 0;
        this.lastTime = 0;
    }

    draw(ctx, timestamp) {
        if (!this.loaded) return;
        const delta = timestamp - this.lastTime;
        if (delta >= this.frameDuration) {
            this.lastTime = timestamp;
            this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
        }

        ctx.drawImage(
            this.sprite,
            this.currentFrame * this.frameWidth, 0,
            this.frameWidth, this.frameHeight,
            this.x, this.y,
            this.frameWidth, this.frameHeight
        );
    }
}