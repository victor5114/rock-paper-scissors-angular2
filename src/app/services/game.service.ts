import { Injectable } from '@angular/core';
import difficulties from '../enum/difficulty.enum';

@Injectable()
export class GameService {
  difficulty: number;
  constructor() {
    this.difficulty = difficulties.EASY;
  }

  getDifficulty(): number {
    return this.difficulty;
  }

  updateDifficulty(newDiff): void {
    if (newDiff && true) {
      console.log(this.difficulty)
    }
  }

  getDifficulties(): any {
    return difficulties;
  }
}
