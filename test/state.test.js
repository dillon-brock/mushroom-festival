import state, {
    initialize,
    // import dispatch functions
    setMessage,
    addMushroom,
    removeMushroom,
    addFriend,
    updateFriend,
    removeFriend,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('sets message', (expect) => {
    // what is the initial expected state?
    expect.deepEqual(state.message, '');
    // use the action
    setMessage('test');
    // what should the state be now?
    expect.deepEqual(state.message, 'test');
});

test('adds mushroom', (expect) => {
    // what is the initial expected state?
    expect.deepEqual(state.mushrooms, []);
    // use the action
    addMushroom({ type: 'porcini' });
    // what should the state be now?
    expect.deepEqual(state.mushrooms, [{ type: 'porcini' }]);
});

test('removes mushroom', (expect) => {
    const mushroom1 = { type: 'porcini' };
    const mushroom2 = { type: 'morel' };
    addMushroom(mushroom1);
    addMushroom(mushroom2);
    removeMushroom(mushroom2);
    // what should the state be now?
    expect.deepEqual(state.mushrooms, [mushroom1]);
});

test('adds a friend', (expect) => {
    // normally, don't directly modify state, but 
    // we want to override having default friends
    state.friends = [];

    // use the action
    const friend = { name: 'jill', satisfied: 0 };
    addFriend(friend);
    // what should the state be now?
    expect.deepEqual(state.friends, [friend]);
});

test('updates a friend', (expect) => {
    // normally, don't directly modify state, but 
    // we want to override having default friends
    state.friends = [];

    const friend = { name: 'jill', satisfied: 0 };
    addFriend(friend);
    friend.satisfied++;
    updateFriend(friend);
    // what should the state be now?
    expect.deepEqual(state.friends, [{ name: 'jill', satisfied: 1 }]);
});

test('removes friend', (expect) => {
    // normally, don't directly modify state, but 
    // we want to override having default friends
    state.friends = [];

    // setup by adding two friends
    const friend1 = { name: 'jill', satisfied: 1 };
    const friend2 = { name: 'ted', satisfied: 2 };
    addFriend(friend1);
    addFriend(friend2);
    // remove the second friend
    removeFriend(friend2);
    // what should the state be now?
    expect.deepEqual(state.friends, [friend1]);
});

