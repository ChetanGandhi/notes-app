import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";
import { IPaperNoteThemeService, Theme } from "./theme.service.i";

@Injectable({
    providedIn: "root"
})
export class PaperNoteThemeService implements IPaperNoteThemeService {
    private _currentTheme: Theme;

    constructor(@Inject(DOCUMENT) private document: Document, @Inject(OverlayContainer) private overlayContainer: OverlayContainer) {}

    public currentTheme(): Theme {
        return this._currentTheme;
    }

    public loadTheme(theme: Theme): void {
        if (this._currentTheme === theme) {
            return;
        }

        const body: HTMLBodyElement = this.document.getElementsByTagName("body").item(0) as HTMLBodyElement;

        if (this._currentTheme) {
            body.classList.remove(`theme-${this._currentTheme}`);
            this.overlayContainer.getContainerElement().classList.remove(`theme-${this._currentTheme}`);
        }

        this._currentTheme = theme;
        body.classList.add(`theme-${this._currentTheme}`);
        this.overlayContainer.getContainerElement().classList.add(`theme-${this._currentTheme}`);
    }
}
