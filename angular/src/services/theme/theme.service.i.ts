export const enum Theme {
    Light = "light",
    Dark = "dark"
}

export interface IPaperNoteThemeService {
    loadTheme(themeName: Theme): void;
    currentTheme(): Theme;
}
