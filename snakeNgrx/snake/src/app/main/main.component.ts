import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromGame from '../store/state/game.state';
import * as fromGameSelectors from '../store/selectors/game.selector';
import { StartGame, AnimationFrame, MoveDown, MoveUp, MoveRight, MoveLeft, ReInit } from '../store/actions/game.actions';
import { HostListener } from '@angular/core';
import { Snake } from '../constants/snake.constants';
import { Apple } from '../store/models/apple.model';
import { SnakePosition } from '../store/models/snake-position.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class MainComponent implements OnInit {

  constructor(private store: Store<fromGame.State>) { }

  public gameStarted: boolean;
  public gameOver: boolean;
  public snakePosition: SnakePosition = new SnakePosition();
  public interval: any;
  public apple: Apple;
  public score: number;
  public highestScore: number;

  ngOnInit() {
    // event listeners for store updates - when the store updates an event will fire and you can listen to the values via these event subscriptions

    this.store.pipe(select(fromGameSelectors.getGameStarted)).subscribe(
      gameStarted => {
        this.gameStarted = gameStarted;
      }
    );

    // todo implement more event listeners here in order to update class members
  }

  startGame(): void {
    if (!this.gameStarted) {
      this.store.dispatch(new ReInit());
      this.store.dispatch(new StartGame());
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.store.dispatch(new AnimationFrame());
      }, Snake.Speed);
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    // todo implement. tip: write an if or switch statement and dispatch actions that get picked up in the game-reducer.ts
  }
}
