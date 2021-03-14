import { Component, OnInit, Inject } from "@angular/core";
import { Theme, IThemeService } from "../services/theme/theme.service";
import { ThemeService } from "../services/theme/theme.service";

@Component({
    selector: "main-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor(@Inject(ThemeService) private themeService: IThemeService) {}

    public ngOnInit(): void {
        this.themeService.theme = Theme.Dark;
    }

    public onToggleThemeButtonClick(): void {
        this.themeService.theme = this.themeService.theme === Theme.Light ? Theme.Dark : Theme.Light;
    }
}
