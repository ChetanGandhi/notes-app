import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";

export const enum Theme {
    Light = "light",
    Dark = "dark"
}

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private _theme: Theme = Theme.Light;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    public get theme(): Theme {
        return this._theme;
    }

    public set theme(theme: Theme) {
        if (this._theme) {
            this.document.documentElement.removeAttribute("data-theme");
            this.document.documentElement.classList.remove(this._theme);
        }

        this._theme = theme;
        this.document.documentElement.setAttribute("data-theme", this._theme);
        this.document.documentElement.classList.add(this._theme);
    }
}
