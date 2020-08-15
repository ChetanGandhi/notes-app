import { Injectable, Inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { ISvgIconDefinition, IPaperNoteIconService } from "./icon.service.i";

@Injectable({
    providedIn: "root"
})
export class PaperNoteIconService implements IPaperNoteIconService {
    constructor(@Inject(MatIconRegistry) private iconRegistry: MatIconRegistry, @Inject(DomSanitizer) private sanitizer: DomSanitizer) {}

    public addSvgIcons(icons: ISvgIconDefinition[]): void {
        icons.forEach((nextIcon: ISvgIconDefinition) => {
            this.iconRegistry.addSvgIcon(nextIcon.name, this.sanitizer.bypassSecurityTrustResourceUrl(nextIcon.svgPath));
        });
    }
}
