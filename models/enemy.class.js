class Enemies extends MoveableObject {
    constructor() {
        super(
            'img/Samurai/Walk.png',
            600,          // x
            450,          // y (600 - 150)
            100,          // frameWidth
            150,          // frameHeight
            8,            // totalFrames
            10            // fps
        );
    }
}