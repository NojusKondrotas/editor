import type { TagFormat } from "./abstractions/tag-format";

export class Header implements TagFormat {
    formatName = 'header';
    elementName = 'h0';
}