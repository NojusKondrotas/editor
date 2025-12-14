import type { TagFormat } from "./tag-format";

export interface CSSFormat extends TagFormat {
    propertyName: string;
    propertyValue: string;
}