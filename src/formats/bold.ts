import type { TagFormat } from './abstractions/tag-format';

export class Bold implements TagFormat {
    formatName = 'bold';
    elementName = 'strong';
}