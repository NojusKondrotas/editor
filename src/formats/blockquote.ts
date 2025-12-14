import type { TagFormat } from "./abstractions/tag-format";

export class Blockquote implements TagFormat {
    formatName = 'blockquote';
    elementName = 'blockquote';
}