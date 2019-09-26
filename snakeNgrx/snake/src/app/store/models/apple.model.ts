import { ArenaDimensions } from 'src/app/constants/arena-dimensions.constants';
import { Snake } from 'src/app/constants/snake.constants';

export class Apple {
    public x: number;
    public y: number;
    constructor() {
        this.x = Apple.randGen(0, ArenaDimensions.WIDTH - Snake.Width);
        this.y = Apple.randGen(0, ArenaDimensions.HEIGHT - Snake.Width);
    }

    private static randGen(min, max): number {
        return Math.floor((Math.random() * max) + min);
    }
}