// import services and utilities
import { getRandomItem } from './utils.js';

// import state and dispatch functions
import state, {
    setMessage,
    addMushroom,
    removeMushroom,
    addFriend,
    updateFriend,
    removeFriend,
} from './state.js';

// import component creators
import createMessage from './components/Message.js';
import createMushrooms from './components/Mushrooms.js';
import createForest from './components/Forest.js';
import createFriends from './components/Friends.js';
import createAddFriend from './components/AddFriend.js';

// create component
const Message = createMessage(document.querySelector('#message'));
const Mushrooms = createMushrooms(document.querySelector('#mushrooms'));

const foundMessage = [
    'No mushrooms found!',
    'You found 1 mushroom',
    'You found 2 mushrooms',
];

const Forest = createForest(document.querySelector('#forest'), {
    handleForage: () => {
        const found = getRandomItem(state.amounts);

        for (let i = 0; i < found; i++) {
            const type = getRandomItem(state.types);
            addMushroom({ type });
        }

        const message = foundMessage[found];
        setMessage(message);

        display();
    },
});

const Friends = createFriends(document.querySelector('#friends'), {
    handleFeedFriend: (friend) => {
        
        if (state.mushrooms.length === 0) {
            setMessage("You don't have any mushrooms. Better go hunting!");
            display();
            return;
        }
        
        if (friend.satisfied === 2) {
            setMessage(`${friend.name} is full! Pick another friend.`);
            display();
            return;
        }

        const firstMushroom = state.mushrooms[0];
        removeMushroom(firstMushroom);
        friend.satisfied++;
        updateFriend(friend);
        setMessage('');
        display();
    },
    handleBye: (friend) => {
        removeFriend(friend);
        display();
    },
});

let friendNo = 1;

const AddFriend = createAddFriend(document.querySelector('#add-friend'), {
    handleAddFriend: (name) => {
        const friend = {
            name: name || 'Friend #' + friendNo++,
            satisfied: 0,
        };
        addFriend(friend);
        display();
    },
});

// Roll-up display function that renders (calls with state) each component
function display() {
    Message({ message: state.message });
    Mushrooms({ mushrooms: state.mushrooms });
    Friends({ friends: state.friends });
    // pass empty props object when no state to pass
    Forest({});
    AddFriend({});
}

// Call display on page load
display();
