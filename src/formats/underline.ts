import { FormatStructure } from './format-structure.js';

export class Underline extends FormatStructure {
    formatName = 'underline';
    elementName = 'u';

    static override FORMAT_NAME = 'underline';
    static override ELEMENT_NAME = 'u';
}