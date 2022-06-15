
export default function createMessage(root) {

    return ({ message }) => {
        root.textContent = message;
    };
}