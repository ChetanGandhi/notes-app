/**
 * The SVG icon definition.
 */
export interface ISvgIconDefinition {
    /**
     * The icon name.
     */
    name: string;

    /**
     * The SVG path.
     */
    svgPath: string;
}

/**
 * The icon service.
 */
export interface IPaperNoteIconService {
    /**
     * Register SVG icon.
     */
    addSvgIcons(icons: ISvgIconDefinition[]): void;
}
