import { InjectionToken } from "@angular/core";

export const BROWSER_STORAGE = new InjectionToken<Storage>( 'Browswer Storage', {
    providedIn:'root',
    factory:() => localStorage
});

