
export const availableLangs = ['en', 'fr'] as const;
export type Lang = typeof availableLangs[number];
