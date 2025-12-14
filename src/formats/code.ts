import type { TagFormat } from "./abstractions/tag-format";

export class Code implements TagFormat {
    formatName = 'code';
    elementName = 'code';
}