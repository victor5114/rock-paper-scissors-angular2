import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
    moduleId: module.id,
    selector: 'action-difficulty',
    templateUrl: 'action-difficulty.component.html',
    styleUrls: ['action-difficulty.component.css'],
    providers: [GameService]
})
export class ActionDifficultyComponent implements OnInit {
    constructor(GameService: GameService) {
      console.log(GameService.getDifficulties());
    }

    updateDifficulty(): void {

    }

    ngOnInit() {}
}
