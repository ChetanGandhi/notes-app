import { Component, OnInit } from "@angular/core";

import logo from "../../resources/logo/logo.svg";

@Component({
    selector: "home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public readonly logo: string = logo;

    constructor() {}

    public ngOnInit(): void {}
}
