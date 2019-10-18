import { BodyPosition } from './body-position.model';

export class SnakePosition {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.body = [];
    }

    // coordinates of snakes head
    public x: number;
    public y: number;

    // trailing body coordinates
    public body: BodyPosition[];
}