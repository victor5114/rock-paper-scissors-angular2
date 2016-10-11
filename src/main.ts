import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/index.ts';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent);
