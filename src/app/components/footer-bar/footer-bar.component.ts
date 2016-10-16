import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer-bar',
    templateUrl: 'footer-bar.component.html',
    styleUrls: ['footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {
    heart_src: String = './static/img/Techno/heart.png';

    constructor() {}

    ngOnInit() {}

}
