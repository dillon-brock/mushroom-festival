// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?

    // These are "lookup" values that eventually might
    // come from server/database:
    state.types = ['porcini', 'morel', 'chanterelle'];
    state.amounts = [0, 0, 0, 0, 1, 1, 1, 2];
    // State that changes over time:
    state.message = '';
    state.mushrooms = [];
    state.friends = [
        { name: 'Wilbur', satisfied: 0 },
        { name: 'Miss Piggy', satisfied: 0 },
        { name: 'Pumbaa', satisfied: 0 },
    ];
}
// call initialize to setup state
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function setMessage(message) {
    state.message = message;
}

export function addMushroom(mushroom) {
    state.mushrooms.push(mushroom);
}

export function removeMushroom(mushroom) {
    // find the index of this mushroom
    const index = state.mushrooms.indexOf(mushroom);
    // make sure we found something, indexOf returns -1 if not
    if (index !== -1) {
        state.mushrooms.splice(index, 1);
    }
}

export function addFriend(friend) {
    state.friends.push(friend);
}

export function updateFriend(friend) {
    // eventually when updating server/db first before
    // updating state, this would be a new object
    const index = state.friends.indexOf(friend);
    if (index !== -1) {
        state.friends[index] = friend;
    }
}

export function removeFriend(friend) {
    // *** remove the supplied friend from state.friends,
    // use removeMushroom as a guide
}