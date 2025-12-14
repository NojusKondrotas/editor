import type { TagFormat } from "./abstractions/tag-format";

export class Italic implements TagFormat {
    formatName = 'italic';
    elementName = 'em';
}