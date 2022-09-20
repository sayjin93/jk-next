export function _onEnter(elementId, className) {
    let element = document.getElementById(elementId);
    if (element != null) {
        element.classList.add(className);
    }
}

export function _onLeave(elementId, className) {
    let element = document.getElementById(elementId);
    if (element != null) {
        element.classList.remove(className);
    }
}

export function _multiDimensionalUnique(arr) {
    let uniques = [];
    let itemsFound = {};
    for (let i = 0, l = arr.length; i < l; i++) {
        let stringified = JSON.stringify(arr[i]);
        if (itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}