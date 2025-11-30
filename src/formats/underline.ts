import { FormatStructure } from './format-structure.js';

export class Underline extends FormatStructure {
    formatName = 'underline';
    tagName = 'U';

    static override FORMAT_NAME = 'underline';
}