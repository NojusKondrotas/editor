import { FormatStructure } from "../formats/format-structure";

let chosenStylusOptions: StylusOptions;

interface StylusOptionsI {
    contentClass: string;
    toolbarClass: string;
    isSingleToolbar: boolean;
    isToolbarFixed: boolean;
    fixedToolbarSide: 'up' | 'right' | 'down' | 'left' | null;
    toolbarOffset: { x: number, y: number };
}

class StylusOptions implements StylusOptionsI {
    contentClass: string = "";
    toolbarClass: string = "";
    isSingleToolbar: boolean = false;
    isToolbarFixed: boolean = false;
    fixedToolbarSide: 'up' | 'right' | 'down' | 'left' | null = null;
    toolbarOffset: { x: number, y: number } = { x: 0, y: 0 };

    constructor(options: StylusOptionsI){
        Object.assign(this, options);
    }

    update(options: Partial<StylusOptionsI>){
        Object.assign(this, options);
    }
}

function initStylus(options: StylusOptionsI, className: string){
    chosenStylusOptions = new StylusOptions(options)
}

function updateStylusOptions(options: StylusOptionsI){
    chosenStylusOptions.update(options);
}