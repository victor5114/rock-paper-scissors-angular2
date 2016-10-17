import {Component, OnInit} from '@angular/core';
import {ActionDifficultyComponent} from '../action-difficulty';
import {GameWindowComponent} from '../game-window';
import {StatsTabComponent} from '../stats-tab';

@Component({
    moduleId: module.id,
    selector: 'game-rps',
    templateUrl: 'game-rps.component.html',
    styleUrls: ['game-rps.component.css'],
    directives: [GameWindowComponent, ActionDifficultyComponent, StatsTabComponent]
})
export class GameRPSComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
