import { BodyPosition } from './body-position.model';
import { Snake } from 'src/app/constants/snake.constants';

export class SnakePosition {
    public x: number;
    public y: number;

    public body: BodyPosition[];

    constructor() {
        this.x = 0;
        this.y = 0;

        this.body = [
            {
                x: -Snake.Width,
                y: 100
            },
            {
                x: - (Snake.Width * 2),
                y: 100
            },
            {
                x: - (Snake.Width * 3),
                y: 100
            },
            {
                x: - (Snake.Width * 4),
                y: 100
            },
            {
                x: - (Snake.Width * 5),
                y: 100
            }
        ]
    }
}