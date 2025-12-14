import type { TagFormat } from "./abstractions/tag-format";

export class Strike implements TagFormat {
    formatName = 'strike';
    elementName = 's';
}