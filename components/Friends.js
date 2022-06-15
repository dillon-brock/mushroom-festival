

export default function createFriends(root, { handleFeedFriend, handleBye }) {

    return ({ friends }) => {
        root.innerHTML = '';

        for (const friend of friends) {
            // forward on the two handlers to each individual Friend component
            const friendEl = Friend({ friend, handleFeedFriend, handleBye });
            root.append(friendEl);
        }
    };
}

// Emojis here are part of "display logic",
// so they belong in component file, not state
const emojis = ['😒', '😐', '😀'];

export function Friend({ friend, handleFeedFriend, handleBye }) {
    const button = document.createElement('button');
    button.classList.add('friend');

    button.addEventListener('click', () => {
        handleFeedFriend(friend);
    });

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.textContent = friend.name;

    const emojiEl = document.createElement('span');
    emojiEl.classList.add('emoji');
    emojiEl.textContent = emojis[friend.satisfied];

    button.append(nameEl, emojiEl);

    // Conditionally add this element only 
    // if friend is fully satisfied
    if (friend.satisfied === 2) {
        const bye = document.createElement('button');
        bye.classList.add('bye');
        bye.textContent = '👋';
        bye.addEventListener('click', (e) => {
            e.stopPropagation();
            handleBye(friend);
        });
        button.append(bye);
    }

    return button;
}