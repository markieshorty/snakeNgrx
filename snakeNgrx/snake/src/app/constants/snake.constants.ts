export class Snake {
    public static Width = 7;
    public static Speed = 50;
    public static DefaultSnakePosition = {
        x: 0,
        y: 100,
        body: [
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