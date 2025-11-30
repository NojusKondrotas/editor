import {FormatStructure} from './format-structure.js';

export class Italic extends FormatStructure {
    formatName = 'italic';
    tagName = 'EM';

    static override FORMAT_NAME = 'italic';
}