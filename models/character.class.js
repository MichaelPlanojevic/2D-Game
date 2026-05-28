class Character extends MoveableObject {
    constructor() {
        super(
            'img/Fighter/Walk.png',
            10,           // x
            450,          // y (600 - 150)
            100,          // frameWidth
            150,          // frameHeight
            5,            // totalFrames
            10            // fps
        );
    }
}