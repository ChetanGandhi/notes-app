import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

import "hammerjs";

import { AppComponent } from "./app.component";
import { PaperNoteThemeService } from "../services/theme/theme.service";
import { PaperNoteComponent } from "../components/paperNote/paperNote.component";

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule],
    declarations: [AppComponent, PaperNoteComponent],
    providers: [PaperNoteThemeService],
    bootstrap: [AppComponent]
})
export class AppModule {}
