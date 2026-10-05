/**
 * Get random emojis.
 *
 * @param number - The number of emojis (default `0`, capped at 1,000,000)
 * @returns The emojis as one string; empty string for invalid or non-positive input
 */
declare function getSomeCoolEmojis(number?: number): string;
export = getSomeCoolEmojis;
