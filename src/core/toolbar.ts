import { StylusConfiguration, StylusToolbarInteractionNode, StylusToolbarInteractions } from "./stylus";

export class StylusToolbar {
    static instantiatedToolbars = new Set();
}

function initToolbar(target: HTMLElement, coords?: { left: number, top: number }) {
    const toolbarObj: StylusToolbarInteractions = new StylusToolbarInteractions([]);
    StylusToolbar.instantiatedToolbars.add(toolbarObj);

    const toolbarContainer = document.createElement('div');
    toolbarContainer.classList.add(StylusConfiguration.chosenStylusOptions.toolbarClass);
    toolbarContainer.style.position = StylusConfiguration.chosenStylusOptions.toolbarPosition;
    if (coords) {
        toolbarContainer.style.left = (coords.left + StylusConfiguration.chosenStylusOptions.toolbarOffset.x) + 'px';
        toolbarContainer.style.top = (coords.top + StylusConfiguration.chosenStylusOptions.toolbarOffset.y) + 'px';
    } else {
        toolbarContainer.style.left = StylusConfiguration.chosenStylusOptions.toolbarOffset.x + 'px';
        toolbarContainer.style.top = StylusConfiguration.chosenStylusOptions.toolbarOffset.y + 'px';
    }
    switch (StylusConfiguration.chosenStylusOptions.fixedToolbarSide) {
        case 'top':
            toolbarContainer.style.top = '0';
            break;
        case 'right':
            toolbarContainer.style.right = '0';
            break;
        case 'bottom':
            toolbarContainer.style.bottom = '0';
            break;
        case 'left':
            toolbarContainer.style.left = '0';
            break;
    }

    StylusConfiguration.chosenToolbarPrototype.formatterNodes.forEach(node => {
        toolbarContainer.appendChild(initToolbarBtn(node, toolbarObj));
    });

    return toolbarContainer;
}

function initToolbarBtn(interaction: StylusToolbarInteractionNode,
    parentToolbar: StylusToolbarInteractions) {
    const btn = document.createElement('button');
    btn.classList.add(StylusConfiguration.chosenStylusOptions.toolbarClass + '-btn');

    Object.entries(interaction.eventListeners).forEach(([eventType, handler]) => {
        btn.addEventListener(eventType, handler);
    });

    interaction.parentToolbar = parentToolbar;
    return btn;
}