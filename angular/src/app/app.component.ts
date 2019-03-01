import { Component, OnInit } from "@angular/core";

@Component({
    selector: "main-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    public name: string;

    public constructor() {}

    ngOnInit(): void {
        this.name = "Notes";
    }
}
