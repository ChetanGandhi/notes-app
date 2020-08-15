import { Component, OnInit, Inject, inject } from "@angular/core";
import { Theme, IPaperNoteThemeService } from "../services/theme/theme.service.i";
import { PaperNoteThemeService } from "../services/theme/theme.service";
import { IPaperNoteIconService, ISvgIconDefinition } from "../services/iconService/icon.service.i";
import { PaperNoteIconService } from "../services/iconService/ion.service";
import paperNoteLogo from "../resources/logo/paperNoteLogo.svg";
import template from "./app.component.html";

@Component({
    selector: "main-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public theme: Theme = Theme.Dark;

    constructor(
        @Inject(PaperNoteThemeService) private themeService: IPaperNoteThemeService,
        @Inject(PaperNoteIconService) private iconService: IPaperNoteIconService
    ) {}

    public ngOnInit(): void {
        this.iconService.addSvgIcons([{ name: "app-logo", svgPath: paperNoteLogo }]);
        this.themeService.loadTheme(this.theme);
    }

    public onToggleThemeButtonClick(): void {
        switch (this.theme) {
            case Theme.Light:
                this.theme = Theme.Dark;
                break;

            case Theme.Dark:
                this.theme = Theme.Light;
                break;

            default:
                break;
        }

        this.themeService.loadTheme(this.theme);
    }
}
