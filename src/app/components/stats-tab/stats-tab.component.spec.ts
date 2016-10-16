/* tslint:disable:no-unused-variable */

import {addProviders, async, inject, describe, beforeEach, it, expect} from '@angular/core/testing';
import {StatsTabComponent} from './stats-tab.component';

describe('Component: StatsTabComponent', () => {
    beforeEach(() => {
        addProviders([StatsTabComponent]);
    });

    it('should create the component', inject([StatsTabComponent], (mod: StatsTabComponent) => {
        expect(mod).toBeTruthy();
    }));
});
