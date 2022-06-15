
export function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomItem(array) {
    const random = getRandomIndex(array.length);
    const item = array[random];
    return item;
}