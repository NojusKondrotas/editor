export abstract class FormatStructure {
    abstract formatName: string;
    abstract elementName: string;

    static FORMAT_NAME: string;
    static ELEMENT_NAME: string | string[];
}