import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PaperNoteComponent } from "../components/paperNote/paperNote.component";

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [AppComponent, PaperNoteComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
