import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from '../main/main.component';
import { gameReducer } from '../store/reducers/game.reducer';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        GameRoutingModule,
        FormsModule,
        StoreModule.forFeature('gameState', gameReducer)
    ]
})
export class GameModule { }
