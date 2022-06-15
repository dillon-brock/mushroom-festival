

// Add the second handler function parameter and get handleAddFriend
export default function createAddFriend(root) {
    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        // *** prevent the form's default behavior of changing the browser page
        // create a formData object
        // call the handler with the "name" value from the formData
    });

    return () => { };
}