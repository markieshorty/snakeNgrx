import { Action } from '@ngrx/store';

export enum GameActionTypes {
    StartGame = 'START_GAME',
    MoveUp = 'MOVE_UP',
    MoveDown = 'MOVE_DOWN',
    MoveLeft = 'MOVE_LEFT',
    MoveRight = 'MOVE_RIGHT',
    IncrementScore = 'INCREMENT_SCORE',
    DecrementLives = 'DECREMENT_LIVES',
    GameOver = 'GAME_OVER',
    AnimationFrame = 'ANIMATION_FRAME',
    ReInit = 'REINIT'
}

export class IncrementScore implements Action {
    readonly type = GameActionTypes.IncrementScore

    constructor(public payload: any) { }
}

export class StartGame implements Action {
    readonly type = GameActionTypes.StartGame

    constructor() { }
}

export class ReInit implements Action {
    readonly type = GameActionTypes.ReInit

    constructor() { }
}


export class AnimationFrame implements Action {
    readonly type = GameActionTypes.AnimationFrame

    constructor() { }
}

export class MoveDown implements Action {
    readonly type = GameActionTypes.MoveDown

    constructor() { }
}

export class MoveUp implements Action {
    readonly type = GameActionTypes.MoveUp

    constructor() { }
}

export class MoveLeft implements Action {
    readonly type = GameActionTypes.MoveLeft

    constructor() { }
}

export class MoveRight implements Action {
    readonly type = GameActionTypes.MoveRight

    constructor() { }
}

export type GameActions = IncrementScore | StartGame | AnimationFrame | MoveDown | MoveUp | MoveLeft | MoveRight | ReInit;