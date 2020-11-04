import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';

// *************************
// Custom Application imports
// *************************

import { AppState, AuthEffects, reducers } from './auth';
import { storageSync } from '@larscom/ngrx-store-storagesync';

export function storageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return storageSync<AppState>({
        features: [
            { stateKey: 'authState' }
        ],
        storage: localStorage
    })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [storageSyncReducer];

@NgModule({
    imports: [
        EffectsModule.forRoot(
            [
                AuthEffects
            ]
        ),
        StoreModule.forRoot(reducers, { metaReducers }),
    ],
    providers: [],
})
export class AppStateModule { }