import type { CSSFormat } from "./abstractions/css-format";

export class Color implements CSSFormat {
    formatName = 'color';
    elementName = 'span';
    propertyName = 'color';
    propertyValue = '#33FF33';
}