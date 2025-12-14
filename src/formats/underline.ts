import type { TagFormat } from "./abstractions/tag-format";

export class Underline implements TagFormat {
    formatName = 'underline';
    elementName = 'u';
}