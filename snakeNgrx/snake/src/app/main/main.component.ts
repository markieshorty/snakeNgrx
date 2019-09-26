import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromGame from '../store/state/game.state';
import * as fromGameSelectors from '../store/selectors/game.selector';
import { StartGame, AnimationFrame, MoveDown, MoveUp, MoveRight, MoveLeft, ReInit } from '../store/actions/game.actions';
import { HostListener } from '@angular/core';

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
  public snakeHeadPosition: fromGame.SnakePosition;
  public interval: any;

  ngOnInit() {
    this.store.pipe(select(fromGameSelectors.getGameStarted)).subscribe(
      gameStarted => {
        this.gameStarted = gameStarted;
      }
    );

    this.store.pipe(select(fromGameSelectors.getSnakeHeadPosition)).subscribe(
      snakeHeadPosition => {
        this.snakeHeadPosition = snakeHeadPosition;
      }
    );

    this.store.pipe(select(fromGameSelectors.getGameOver)).subscribe(
      gameOver => {
        this.gameOver = gameOver;
        if (this.gameOver) {
          this.reinitialiseStore();
          this.startGame();
        }
      }
    );
  }

  reinitialiseStore(): void {
    this.store.dispatch(new ReInit());
  }

  startGame(): void {
    if (!this.gameStarted) {
      this.store.dispatch(new StartGame());
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.store.dispatch(new AnimationFrame());
      }, 50);
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown': {
        this.store.dispatch(new MoveDown());
        break;
      }
      case 'ArrowUp': {
        this.store.dispatch(new MoveUp());
        break;
      }
      case 'ArrowRight': {
        this.store.dispatch(new MoveRight());
        break;
      }
      case 'ArrowLeft': {
        this.store.dispatch(new MoveLeft());
        break;
      }
    }
  }
}
