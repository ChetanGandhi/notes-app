import { Component, OnInit } from "@angular/core";

/**
 * The paper note.
 *
 * @interface IPaperNote
 */
export interface IPaperNote {
    /**
     * The ID of the note.
     */
    id: string;

    /**
     * The title of the note.
     */
    title: string;

    /**
     * The content of the note.
     */
    content?: string;
}

@Component({
    selector: "paper-note",
    templateUrl: "./paperNote.component.html"
})
export class PaperNoteComponent implements OnInit {
    public notes: IPaperNote[];

    constructor() {
        this.notes = [];
    }

    public ngOnInit(): void {
        this.notes = [
            {
                id: "1",
                title: "Note one",
                content:
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            },
            {
                id: "2",
                title: "Note two",
                content: "This is another simple note"
            }
        ];
    }
}
