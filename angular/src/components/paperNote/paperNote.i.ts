/**
 * The paper note.
 *
 * @interface IPaperNote
 */
export interface IPaperNote {
    /**
     * The id of the note.
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
