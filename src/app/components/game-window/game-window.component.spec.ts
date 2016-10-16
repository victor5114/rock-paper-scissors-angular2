/* tslint:disable:no-unused-variable */

import {addProviders, async, inject, describe, beforeEach, it, expect} from '@angular/core/testing';
import {GameWindowComponent} from './game-window.component';

describe('Component: GameWindowComponent', () => {
    beforeEach(() => {
        addProviders([GameWindowComponent]);
    });

    it('should create the component', inject([GameWindowComponent], (mod: GameWindowComponent) => {
        expect(mod).toBeTruthy();
    }));
});
