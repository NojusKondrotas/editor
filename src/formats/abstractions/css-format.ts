import { TagFormat } from "./tag-format";

export abstract class CSSFormat extends TagFormat {
    abstract propertyName: string;
    abstract propertyValue: string;
}