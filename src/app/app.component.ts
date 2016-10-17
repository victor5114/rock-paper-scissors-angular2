import {Component} from '@angular/core';
import {
  FooterBarComponent,
  GameRPSComponent
} from './components/';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [FooterBarComponent, GameRPSComponent]
})
export class AppComponent {
    title = 'Rock Paper Scissors';
}
