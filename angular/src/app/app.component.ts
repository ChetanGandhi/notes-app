import { Component, OnInit, Inject } from "@angular/core";
import { ThemeService, Theme } from "../services/";

@Component({
    selector: "main-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor(@Inject(ThemeService) private themeService: ThemeService) {}

    public ngOnInit(): void {
        this.themeService.theme = Theme.Dark;
    }

    public onToggleThemeButtonClick(): void {
        this.themeService.theme = this.themeService.theme === Theme.Light ? Theme.Dark : Theme.Light;
    }
}
