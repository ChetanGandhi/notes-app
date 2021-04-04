import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import "hammerjs";

import { AppComponent } from "./app.component";
import { HomeComponent, PaperNoteComponent } from "../components";

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
    declarations: [AppComponent, HomeComponent, PaperNoteComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
