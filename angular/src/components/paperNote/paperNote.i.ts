/**
 * The paper note.
 *
 * @export
 * @interface IPaperNote
 */
export interface IPaperNote {
    /**
     * The id of the note.
     *
     * @type {string}
     * @memberof IPaperNote
     */
    id: string;

    /**
     * The title of the note.
     *
     * @type {string}
     * @memberof IPaperNote
     */
    title: string;

    /**
     * The content of the note.
     *
     * @type {string}
     * @memberof IPaperNote
     */
    content?: string;
}
