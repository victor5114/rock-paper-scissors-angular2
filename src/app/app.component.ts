import {Component} from '@angular/core';
import {FooterBarComponent} from './components/footer-bar';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [FooterBarComponent]
})
export class AppComponent {
    title = 'Rock Paper Scissors';
}
