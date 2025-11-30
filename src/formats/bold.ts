import { FormatStructure } from './format-structure.js';

export class Bold extends FormatStructure {
    formatName = 'bold';
    tagName = 'STRONG';

    static override FORMAT_NAME = 'bold';
}