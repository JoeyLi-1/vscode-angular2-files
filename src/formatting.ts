export const toCamelCase = (input: string) => input.replace(/-([a-z])/ig, (all, letter) => letter.toUpperCase());

export const toTileCase = (str: string) => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

export const toUpperCase = (input: string) => toCamelCase(input.charAt(0).toUpperCase() + input.slice(1));

export const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
