import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";

export const enum Theme {
    Light = "light",
    Dark = "dark"
}

export interface IThemeService {
    theme: Theme;
}

@Injectable({
    providedIn: "root"
})
export class ThemeService implements IThemeService {
    private _currentTheme: Theme = Theme.Light;

    constructor(@Inject(DOCUMENT) private document: Document, @Inject(OverlayContainer) private overlayContainer: OverlayContainer) {}

    public get theme(): Theme {
        return this._currentTheme;
    }

    public set theme(theme: Theme) {
        if (this._currentTheme) {
            this.document.documentElement.classList.remove(this._currentTheme);
            this.overlayContainer.getContainerElement().classList.remove(this._currentTheme);
        }

        this._currentTheme = theme;
        this.document.documentElement.classList.add(this._currentTheme);
        this.overlayContainer.getContainerElement().classList.add(this._currentTheme);
    }
}
