const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
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
      { id: 1, name: 'Vasyl' },
      { id: 2, name: 'Roman' },
      { id: 3, name: 'Max' },
      { id: 4, name: 'Serhio' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Person2' },
      { id: 7, name: 'Agnieshka' },
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'Hi' },
      { id: 3, message: 'WORLD' },
      { id: 4, message: 'YO' },
      { id: 5, message: 'YO' },
      { id: 6, message: 'YO' },
    ],

    newMessageBody: "" ,

    friends: [
      { id: 1, name: 'Agat' },
      { id: 2, name: 'Anton' },
      { id: 3, name: 'Roman' },
    ],
  },
  _callSubscriber () {
    console.log('Store changet');
   },

 
  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
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

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
      };
        this._state.posts.push(newPost);
        this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT){
        this._state.newPostText = action.newText;
        this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.newMessageBody = action.body;
        this._callSubscriber(this._state);
    } else if(action.type === SEND_MESSAGE){
      let body = this._state.newMessageBody;
        this._state.newMessageBody = "";
        this._state.messages.push( { id: 8, message: body } );
        this._callSubscriber(this._state);
  }
  } 
};

export const addPostActionCreator = () => ({ type: ADD_POST  });
export const updateNewPostTextActionCreator  = (text) => {
  return{
      type: UPDATE_NEW_POST_TEXT,
      newText: text
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE  });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body  });



export default store;

window.store = store;