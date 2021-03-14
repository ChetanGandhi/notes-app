import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import "hammerjs";

import { AppComponent } from "./app.component";
import { ThemeService } from "../services/theme/theme.service";
import { PaperNoteComponent } from "../components/paperNote/paperNote.component";

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
    declarations: [AppComponent, PaperNoteComponent],
    providers: [ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule {}
