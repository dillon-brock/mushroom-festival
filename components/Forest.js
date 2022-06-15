

export default function createForest(root, { handleForage }) {
    const button = root.querySelector('button');

    button.addEventListener('click', handleForage);
    // "no-op" render function, nothing to change based on state
    return () => { };
}
