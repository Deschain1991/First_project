

let store = {
  _state:  {
    posts: [
      { id: 1, message: 'Hi!', likeCount: 12 },
      { id: 2, message: 'Yes', likeCount: 4 },
      { id: 3, message: 'Hello', likeCount: 5 },
      { id: 4, message: 'World', likeCount: 8 },
      { id: 5, message: 'yes', likeCount: 1 },
    ],
    newPostText: 'new post',
    dialogs: [
      { id: 18, name: 'Vasyl' },
      { id: 12, name: 'Roman' },
      { id: 24, name: 'Max' },
      { id: 33, name: 'Serhio' },
      { id: 1, name: 'Viktor' },
      { id: 3, name: 'Person2' },
      { id: 4, name: 'Agnieshka' },
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'Hi' },
      { id: 3, message: 'WORLD' },
      { id: 4, message: 'YO' },
      { id: 5, message: 'YO' },
      { id: 6, message: 'YO' },
    ],
    friends: [
      { id: 1, name: 'Agat' },
      { id: 2, name: 'Anton' },
      { id: 3, name: 'Roman' },
    ],
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log('Store changet');
   },
  addPost  (postMessage) {
    let newPost = {
      id: 5,
      message: postMessage,
      likeCount: 0
    };
  
    this._state.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  
};

export default store;

window.store = store;