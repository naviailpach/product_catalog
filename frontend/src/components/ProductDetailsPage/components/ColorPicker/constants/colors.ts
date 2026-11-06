const COLORS_MAP: Record<string, string> = {
    blacktitanium: "#363636",
    bluetitanium: "#324069",
    whitetitanium: "#f8f8f8",
    deserttitanium: "#f1cf83",
    naturaltitanium: "#d4c9ad",
    cosmicorange: "#ff9100",
    deepblue: "#1d2655",
    silver: "#d9d9da",
    burgundy: "#791b1b",
    glacier: "#a6d4ff",
    black: "#161616",
    spacegray: "#5f5f5f",
    spaceblack: "#444444",
    blue: "#1c5bcf",
    starlight: "#fff5bc",
    darkbronze: "#6e451e",
    lightgold: "#e0d67a",
};

const COLORS_LABEL: Record<string, string> = {
    blacktitanium: "black-titanium",
    bluetitanium: "blue-titanium",
    whitetitanium: "white-titanium",
    deserttitanium: "desert-titanium",
    naturaltitanium: "natural-titanium",
    cosmicorange: "cosmic-orange",
    deepblue: "deep-blue",
    silver: "silver",
    burgundy: "burgundy",
    glacier: "glacier",
    black: "black",
    spacegray: "space-gray",
    spaceblack: "space-black",
    blue: "blue",
    starlight: "starlight",
    darkbronze: "dark-bronze",
    lightgold: "light-gold",
};

const normalizeColorKey = (color: string): string =>
    color.toLowerCase().replace(/[\s-]/g, "");

export const getColorValue = (color: string): string => {
    const value = COLORS_MAP[normalizeColorKey(color)];

    if (!value && import.meta.env.DEV) console.warn(`Unknown color: ${color}`);
    return value ?? color;
};

export const getColorLabel = (color: string): string =>
    COLORS_LABEL[normalizeColorKey(color)] ?? color;
